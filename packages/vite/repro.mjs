import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { createServer } from './dist/node/index.js'

writeFileSync(
  './source.ts',
  `
import { isMainThread } from "node:worker_threads";
import { access } from "node:fs";

// some
// comments

console.log(isMainThread, access);
`.trim(),
  'utf8',
)

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const server = await createServer({
  configFile: false,
  root: __dirname,
  server: {
    port: 1337,
  },
})
await server.listen()

const result = await server.transformRequest('./source.ts', { ssr: true })
console.log('\n#####\n', result.code, '\n#####\n')
console.log(result.map.mappings)

await server.close()
process.exit()
