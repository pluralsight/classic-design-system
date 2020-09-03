// declaration.d.ts
declare module '*.module.css' {
  const content: { [className: string]: string }
  export default content
}
