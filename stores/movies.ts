import { defineStore } from 'pinia'

import berlin_romance_1 from '~/assets/movies/Berlin_Romance_1.mov'
import berlin_romance_2 from '~/assets/movies/Berlin_Romance_2.mov'
import jane from '~/assets/movies/Jane.mov'
import berlin_romance_1_poster from '@/assets/movies/Berlin_Romance_1.jpg'
import berlin_romance_2_poster from '@/assets/movies/Berlin_Romance_2.jpg'
import jane_poster from '@/assets/movies/Jane_poster.jpg'

interface movieObject {
    name: string
    src: string
    poster: string
}

export const useMoviesStore = defineStore({
    id: 'moviesStore',
    state: () => ({
        movies: [
            {
                name: 'Berlin Romance part 2',
                src: berlin_romance_2,
                poster: berlin_romance_2_poster,
            },
            {
                name: 'Berlin Romance part 1',
                src: berlin_romance_1,
                poster: berlin_romance_1_poster,
            },
            {
                name: 'Jane & Inspiration',
                src: jane,
                poster: jane_poster,
            },
        ] as movieObject[],
    }),
})
