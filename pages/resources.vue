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
                    <a :href="resource.src" download>
                        <button class="btn btn-primary">Download</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useResourcesStore } from '~/stores/resources'

const resourcesStore = useResourcesStore()
const resources = resourcesStore.resources
</script>

<style scoped lang="scss"></style>
