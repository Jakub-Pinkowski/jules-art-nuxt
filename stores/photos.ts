import { defineStore } from 'pinia'

import photo1 from '@/assets/photos/1.jpg'
import photo2 from '@/assets/photos/2.jpg'
import photo3 from '@/assets/photos/3.jpg'
import photo4 from '@/assets/photos/4.jpg'
import photo5 from '@/assets/photos/5.jpg'
import photo6 from '@/assets/photos/6.jpg'
import photo7 from '@/assets/photos/7.jpg'

interface photoObject {
    name: string
    src: string
}

export const usePhotosStore = defineStore({
    id: 'photosStore',
    state: () => ({
        photos: [
            {
                name: 'photo1',
                src: photo1,
            },
            {
                name: 'photo2',
                src: photo2,
            },
            {
                name: 'photo3',
                src: photo3,
            },
            {
                name: 'photo4',
                src: photo4,
            },
            {
                name: 'photo5',
                src: photo5,
            },
            {
                name: 'photo6',
                src: photo6,
            },
            {
                name: 'photo7',
                src: photo7,
            },
        ] as photoObject[],
    }),
})
