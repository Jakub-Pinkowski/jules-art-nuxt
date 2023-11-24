<template>
    <div class="flex flex-col min-h-screen">
        <header>
            <DesktopNavbar class="max-md:hidden" />

            <!-- Mobile -->
            <MobileNavbar class="md:hidden" />
        </header>
        <main class="flex-1 mx-6">
            <slot />
        </main>
        <footer class="footer items-center p-2 bg-neutral text-neutral-content">
            <aside class="items-center grid-flow-col">
                <p>© 2023 Jakub Pinkowski</p>
            </aside>
            <nav class="md:place-self-center md:justify-self-end">
                <nuxt-link to="https://github.com/Jakub-Pinkowski">
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
