import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { setup, $fetch, isDev, createPage } from '@nuxt/test-utils'

describe('photos', async () => {
    await setup({
        rootDir: fileURLToPath(new URL('..', import.meta.url)),
        server: true,
    })

    const page = await createPage('/photos')

    it('Renders 3 columns of photos', async () => {
        const columns = await page.findAll('.column')
        expect(columns).toHaveLength(3)
    })

    if (isDev()) {
        it('[dev] ensure vite client script is added', async () => {
            expect(await $fetch('/')).toMatch('/_nuxt/@vite/client"')
        })
    }
})
