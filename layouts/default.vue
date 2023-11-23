<template>
    <div>
        <header>
            <nav class="flex place-content-between border-b py-4 mt-4 mb-4">
                <div>
                    <h1 class="text-2xl font-bold mx-4">My Site</h1>
                </div>
                <h1>Color mode: {{ $colorMode.value }}</h1>
                <h2>Color preference: {{ $colorMode.preference }}</h2>
                <select v-model="$colorMode.preference">
                    <option v-for="theme of themes" :value="theme" :key="theme">
                        {{ theme }}
                    </option>
                </select>
                <ul class="flex m-2 py-2 px-2">
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
            <button class="btn btn-primary">Test Button</button>
        </footer>
    </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const themes = [
    'system',
    'light',
    'dark',
    'sepia',
    'cupcake',
    'bumblebee',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
]
</script>

<style scoped lang="scss">
body {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
}

.sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
}
</style>
