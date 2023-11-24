import { defineStore } from 'pinia'

import storyboard from '~/assets/resources/storyboard.pdf'
import storyboard_poster from '~/assets/resources/storyboard.jpg'

interface resourceObject {
    name: string
    src: string
    poster: string
    description: string
}

export const useResourcesStore = defineStore({
    id: 'resourcesStore',
    state: () => ({
        resources: [
            {
                name: 'Storyboard',
                src: storyboard,
                poster: storyboard_poster,
                description:
                    'A storyboard is a graphic organizer that consists of illustrations or images displayed in sequence for the purpose of pre-visualizing a motion picture, animation, motion graphic or interactive media sequence.',
            },
        ] as resourceObject[],
    }),
})
