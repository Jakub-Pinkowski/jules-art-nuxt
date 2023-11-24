import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { setup, $fetch, isDev } from '@nuxt/test-utils'

describe('home', async () => {
    await setup({
        rootDir: fileURLToPath(new URL('..', import.meta.url)),
        server: true,
    })

    it('Renders Home heading', async () => {
        expect(await $fetch('/')).toMatch('Home')
    })

    if (isDev()) {
        it('[dev] ensure vite client script is added', async () => {
            expect(await $fetch('/')).toMatch('/_nuxt/@vite/client"')
        })
    }
})
