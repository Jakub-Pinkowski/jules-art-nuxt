<template>
    <div>
        <h1>Resources</h1>
        <div v-for="resource in resources" class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img :src="resource.poster" :alt="resource.name" />
            </figure>
            <div class="card-body text-justify">
                <h2 class="card-title">{{ resource.name }}</h2>
                <p>
                    {{ resource.description }}
                </p>
                <div class="card-actions justify-end">
                    <a :href="resource.src" download @click="downloadFile">
                        <button class="btn btn-primary">Download</button>
                    </a>
                </div>
            </div>
        </div>

        <transition name="fade">
            <div v-show="showToast" class="toast toast-top toast-center top-20">
                <div class="alert alert-success">
                    <span>File downloaded successfully</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { useResourcesStore } from '~/stores/resources'

const resourcesStore = useResourcesStore()
const resources = resourcesStore.resources

const showToast = ref(false)

const downloadFile = () => {
    showToast.value = true

    // Hide the toast after 3 seconds
    setTimeout(() => {
        showToast.value = false
    }, 1500)
}
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
