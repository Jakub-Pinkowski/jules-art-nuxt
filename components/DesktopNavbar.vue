<template>
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
                        <li><nuxt-link to="/reels">Reels</nuxt-link></li>
                        <li><nuxt-link to="/resources">Resources</nuxt-link></li>
                    </ul>
                </div>
            </nav>
</template>