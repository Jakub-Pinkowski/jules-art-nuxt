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
                        @click="openModal(photo.src)"
                    />
                </div>
            </div>
        </div>

        <!-- Modal -->
        <transition name="modal" mode="out-in" appear>
            <div class="photo_modal" v-if="modalOpen">
                <div class="modal-background" @click="closeModal"></div>
                <div class="modal-content" @click="closeModal">
                    <img :src="modalImage" alt="Full Size Image" />
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { usePhotosStore } from '~/stores/photos'

const photosStore = usePhotosStore()
const photos = photosStore.photos

// Modal functionality
let modalOpen = ref(false)
let modalImage = ref('')

const openModal = (imageSrc: string) => {
    modalImage.value = imageSrc
    modalOpen.value = true
}

const closeModal = () => {
    modalOpen.value = false
}
</script>

<style scoped lang="scss">
.photo_modal {
    display: flex;
    position: fixed;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    align-items: center;
    overflow: hidden;
    justify-content: center;

    .modal-background {
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(5px);
        background-color: rgba(0, 0, 0, 0.7);
    }

    .modal-content {
        max-width: 1200px;
        max-height: 900px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: auto;
            height: 900px;
            object-fit: contain;
            max-width: 100%;
        }
    }
}

/* Modal Transition */

.modal-enter-active {
    transition: opacity 0.3s ease-out;
}

.modal-leave-active {
    transition: opacity 0.2s ease-in;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>
