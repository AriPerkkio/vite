globalThis.__vite_ssr_import__ = async function load(name) {
  globalThis.__vite_ssr_exports__ = {}
  await import(name.replace(/^\//g, './').replace('.ts', '.js'))
  return globalThis.__vite_ssr_exports__
}

debugger

await import('./entry.js')
