import path from 'node:path'
import fs from 'node:fs'
import { createServer } from 'vite'
import { afterEach, expect, test } from 'vitest'
import { isBuild, page, ports } from '~utils'

const filename = path.resolve(__dirname, '../src/header-text.mjs')
const cleanups: (() => void | Promise<void>)[] = []

afterEach(async () => {
  await Promise.all(cleanups.splice(0).map((cleanup) => cleanup()))
})

test.runIf(isBuild)('watch mode is enabled by default', async () => {
  const server = await createServer({
    root: path.join(__dirname, '..'),
    logLevel: 'silent',
    server: {
      port: ports['watch/enabled'],
      strictPort: true,
    },
  })

  expect(server.watcher).toBeTruthy()

  cleanups.push(() => server.close())
  await server.listen()

  const initialHeader = 'Initial header'
  const newHeader = 'New header'

  await page.goto(`http://localhost:${server.config.server.port}`)
  expect(await page.textContent('h1')).toBe(initialHeader)

  // Edit file and wait for content to appear on page
  cleanups.push(() =>
    fs.writeFileSync(
      filename,
      `export const headerText = '${initialHeader}'\n`,
      'utf8',
    ),
  )
  fs.writeFileSync(
    filename,
    `export const headerText = '${newHeader}'\n`,
    'utf8',
  )

  await page.waitForSelector('text=New header')
})

test.runIf(isBuild)('watch mode can be disabled', async () => {
  const server = await createServer({
    root: path.join(__dirname, '..'),
    logLevel: 'silent',
    server: {
      watch: false,
      port: ports['watch/disabled'],
      strictPort: true,
    },
  })

  expect(server.watcher).toBe(undefined)

  cleanups.push(() => server.close())
  await server.listen()

  const initialHeader = 'Initial header'
  const newHeader = 'New header'

  await page.goto(`http://localhost:${server.config.server.port}`)
  expect(await page.textContent('h1')).toBe(initialHeader)

  cleanups.push(() =>
    fs.writeFileSync(
      filename,
      `export const headerText = '${initialHeader}'\n`,
      'utf8',
    ),
  )
  fs.writeFileSync(
    filename,
    `export const headerText = '${newHeader}'\n`,
    'utf8',
  )

  // Initial header should still be visible after some time
  await new Promise((r) => setTimeout(r, 1000))
  expect(await page.textContent('h1')).toBe(initialHeader)
})
