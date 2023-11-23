<template>
    <div>
        <header>
            <nav>
                <ul>
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

<script lang="ts" setup></script>

<style></style>
