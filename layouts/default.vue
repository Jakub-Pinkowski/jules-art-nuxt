<template>
    <div>
        <header>
            <nav class="navbar bg-base-100">
                <div class="flex-1">
                    <a class="btn btn-ghost text-xl">Jules-Art</a>
                </div>
                <ThemeToggle />
                <div class="flex-none">
                    <ul class="menu menu-horizontal px-1">
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
        <footer>
            <p>&copy; 2023</p>
            <button class="btn btn-primary">Test Button</button>
        </footer>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss"></style>
