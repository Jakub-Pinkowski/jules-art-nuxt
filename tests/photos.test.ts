import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { setup, $fetch, isDev } from '@nuxt/test-utils'

describe('photos', async () => {
    await setup({
        rootDir: fileURLToPath(new URL('..', import.meta.url)),
        server: true,
    })

    it('Renders 3 columns of photos', async () => {
        expect(await $fetch('/photos')).toMatch('columns-3')
    })

    it('At least 1 photo is rendered', async () => {
        expect(await $fetch('/photos')).toMatch('img')
    })

    it('All photos have alt text', async () => {
        // Iterate through all the img to make sure all of them have alt text that's not empty
        const html = await $fetch('/photos')
        const regex = /<img.*?alt="(.*?)"/g
        let match
        let count = 0
        while ((match = regex.exec(html)) !== null) {
            if (match[1] === '') {
                throw new Error('Found an image without alt text')
            }
            count++
        }
        expect(count).toBeGreaterThan(0)
    })

    it('Modal should not be visible when page is loaded', async () => {
        // modalOpen should be false when page is loaded
        expect(await $fetch('/photos')).not.toMatch('modalOpen')
    })


    if (isDev()) {
        it('[dev] ensure vite client script is added', async () => {
            expect(await $fetch('/')).toMatch('/_nuxt/@vite/client"')
        })
    }
})
