<template>
    <div>
        <!-- Gallery -->
        <div class="columns-3 gap-4 my-8 w-full h-auto">
            <div v-for="photo in photos" :key="photo.name" class="m-4">
                <div
                    class="w-full overflow-hidden cursor-pointer transition-transform hover:opacity-90 ease-out duration-500"
                >
                    <img
                        :src="photo.src"
                        :alt="photo.name"
                        class="object-cover w-full h-full shadow-2xl rounded-lg"
                    />
                </div>
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
