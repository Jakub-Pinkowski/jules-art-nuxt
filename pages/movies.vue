<template>
    <div class="mt-8">
        <div
            v-for="movie in movies"
            :key="movie.name"
            class="flex flex-col items-center justify-center w-full h-auto"
        >
            <video :src="movie.src" :poster="movie.poster" controls class="w-4/5"></video>
            <h3 class="text-2xl font-medium mt-4 mb-8">{{ movie.name }}</h3>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useMoviesStore } from '~/stores/movies'

const moviesStore = useMoviesStore()
const movies = moviesStore.movies
</script>

<style scoped lang="scss"></style>
