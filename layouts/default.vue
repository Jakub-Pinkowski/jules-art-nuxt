<template>
    <div>
        <header>
            <nav class="flex place-content-between border-b py-4 mt-4 mb-4">
                <div>
                    <h1 class="text-2xl font-bold mx-4">My Site</h1>
                </div>
                <ul class="flex m-2 py-2 px-2">
                    <select class="select w-full max-w-xs" v-model="colorMode.preference">
                        <option disabled selected>Theme</option>
                        <option v-for="theme of themes" :key="theme">{{ theme }}</option>
                    </select>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/photos">Photos</nuxt-link></li>
                    <li><nuxt-link to="/movies">Movies</nuxt-link></li>
                    <li><nuxt-link to="/movies">Reels</nuxt-link></li>
                    <li><nuxt-link to="/resources">Resources</nuxt-link></li>
                </ul>
            </nav>
        </header>
        <slot />
        <footer>
            <p>&copy; 2023</p>
        </footer>
    </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const themes = ['light', 'dark']

</script>

<style scoped lang="scss"></style>
