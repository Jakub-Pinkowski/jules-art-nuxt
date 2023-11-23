<template>
    <div class="ml-4 text-2xl">
        <h1>Photos</h1>
        <!-- Gallery -->
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div v-for="photo in photos" :key="photo.name">
                <img
                    :src="photo.src"
                    :alt="photo.name"
                    class="w-full h-auto shadow-2xl rounded-lg transition-transform transform hover:scale-105 hover:opacity-95 cursor-pointer"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { usePhotosStore } from '~/stores/photos'

const photosStore = usePhotosStore()
const photos = photosStore.photos
</script>

<style scoped lang="scss"></style>
