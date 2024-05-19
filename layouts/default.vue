<template>
    <div class="flex flex-col min-h-screen">
        <header>
            <DesktopNavbar class="max-md:hidden" />

            <MobileNavbar class="md:hidden" />
        </header>
        <main class="flex-1 mx-6">
            <slot />
        </main>

        <Footer />
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss"></style>
