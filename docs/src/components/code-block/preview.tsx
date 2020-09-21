import { transform } from '@babel/core'
import { Language } from 'prism-react-renderer'
import React, { HTMLAttributes, useContext } from 'react'
import { LiveError, LiveProvider, LivePreview } from 'react-live'

import { CodeBlockContext } from './index'
import styles from './styles.module.css'
import { mapPackageNameToScopes } from './package-map'

const SUPPORTED_LANGUAGES: Language[] = [
  'javascript',
  'jsx',
  'tsx',
  'typescript'
]

interface PreviewData {
  code: string
  scope: Record<string, unknown>
}

interface PreviewProps extends HTMLAttributes<HTMLDivElement> {
  code: string
}
export const Preview: React.FC<PreviewProps> = props => {
  const context = useContext(CodeBlockContext)
  const supported = SUPPORTED_LANGUAGES.includes(context.language)
  if (context.noRender || !supported) return null

  const preview = formatPreview(props.code)

  return (
    <LiveProvider
      code={preview.code}
      scope={preview.scope}
      noInline
      transformCode={transformCode}
    >
      <LiveError />
      <LivePreview className={styles.preview} />
    </LiveProvider>
  )
}

export function formatPreview(code: string): PreviewData {
  return moveImportsToScope(replaceExport({ code, scope: {} }))
}

function moveImportsToScope(data: PreviewData): PreviewData {
  const findAllImports = /import .+ from '.+'/g
  let singleImportMatch = null
  const newData = { ...data }

  const imports = []
  while ((singleImportMatch = findAllImports.exec(data.code)) !== null) {
    const singleImportString = singleImportMatch[0]
    const findPackageName = /.*'(.+)'.*/
    const packageName = singleImportString.replace(findPackageName, '$1')

    imports.push({
      start: singleImportMatch.index,
      end: singleImportMatch.index + singleImportMatch[0].length,
      packageName
    })
  }

  imports.reverse().forEach(range => {
    const codeWithoutImport =
      newData.code.slice(0, range.start) + newData.code.slice(range.end)

    newData.code = codeWithoutImport
    newData.scope = {
      ...newData.scope,
      ...mapPackageNameToScopes(range.packageName)
    }
  })

  return newData
}

function replaceExport(data: PreviewData): PreviewData {
  return {
    ...data,
    code: data.code.replace(/export default (.*)/, 'render(<$1 />)')
  }
}

function transformCode(code: string) {
  const transformed = transform(code, {
    filename: 'example.tsx',
    presets: [require('@babel/preset-typescript')]
  }).code

  return transformed
}
