<template>
    <div>
        <header>
            <nav class="navbar bg-base-100">
                <div class="flex-1">
                    <nuxt-link class="btn btn-ghost text-2xl" to="/">Jules-Art</nuxt-link>
                </div>
                <ThemeToggle />
                <div class="flex-none">
                    <ul class="menu menu-horizontal px-1 text-xl">
                        <li><nuxt-link to="/">Home</nuxt-link></li>
                        <li><nuxt-link to="/photos">Photos</nuxt-link></li>
                        <li><nuxt-link to="/movies">Movies</nuxt-link></li>
                        <li><nuxt-link to="/movies">Reels</nuxt-link></li>
                        <li><nuxt-link to="/resources">Resources</nuxt-link></li>
                    </ul>
                </div>
            </nav>
        </header>
        <slot />
        <footer class="footer items-center p-4 bg-neutral text-neutral-content">
            <aside class="items-center grid-flow-col">
                <p>© 2023 Jakub Pinkowski</p>
            </aside>
            <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <nuxt-link to="https://github.com/Jakub-Pinkowski?tab=repositories">
                    <img :src="github_icon" alt="GitHub Icon" />
                </nuxt-link>
            </nav>
        </footer>
    </div>
</template>

<script lang="ts" setup>
import github_icon from '~/assets/icons/github_icon.svg'
</script>

<style scoped lang="scss"></style>
