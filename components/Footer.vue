<template>
    <footer class="flex place-content-between items-center p-2 bg-neutral text-neutral-content">
        <aside class="items-center">
            <p>© 2023 Jakub Pinkowski</p>
        </aside>
        <nuxt-link to="https://github.com/Jakub-Pinkowski" class="justify-self-end">
            <img :src="github_icon" alt="GitHub Icon" />
        </nuxt-link>
    </footer>
</template>

<script lang="ts" setup>
import github_icon from '~/assets/icons/github_icon.svg'
</script>
