<template>
    <div class="text-2xl">
        <div class="w-full">
            <h1>Photos</h1>
        </div>

        <!-- Gallery -->
        <div class="columns-1 md:columns-3 gap-8">
            <div v-for="photo in photos" :key="photo.name" class="my-8">
                <img
                    :src="photo.src"
                    :alt="photo.name"
                    class="w-full h-auto shadow-2xl rounded-lg cursor-pointer ease-out duration-500"
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
