import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import React from 'react'
import { renderStatic } from 'glamor/server'

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    const jsxStyles = flush()
    const styles = renderStatic(() => page.html || page.errorHtml)
    return { ...page, ...styles, styles: jsxStyles }
  }

  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
