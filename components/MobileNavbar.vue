<template>
    <nav role="navigation">
        <div id="menuToggle">
            <input type="checkbox" ref="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                <ThemeToggle />
                <nuxt-link to="/">
                    <li @click="close()">Home</li>
                </nuxt-link>
                <nuxt-link to="/photos">
                    <li @click="close()">Photos</li>
                </nuxt-link>
                <nuxt-link to="/movies">
                    <li @click="close()">Movies</li>
                </nuxt-link>
                <nuxt-link to="/reels">
                    <li @click="close()">Reels</li>
                </nuxt-link>
                <nuxt-link to="/resources">
                    <li @click="close()">Resources</li>
                </nuxt-link>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts" setup>
const checkbox = ref<HTMLInputElement | null>(null)

const close = () => {
    if (checkbox.value) {
        checkbox.value.checked = false
    }
}
</script>

<style scoped lang="scss">
#menuToggle {
    display: block;
    position: absolute;
    top: 50px;
    right: 50px;
    z-index: 10000;
    -webkit-user-select: none;
    user-select: none;

    a {
        text-decoration: none;
        color: #232323;
        transition: color 0.3s ease;
    }

    a:hover {
        color: var(--primary);
    }

    & > input {
        display: block;
        width: 60px;
        height: 32px;
        position: absolute;
        top: -7px;
        left: -5px;
        cursor: pointer;
        opacity: 0;
        z-index: 20000;
        -webkit-touch-callout: none;
    }

    & > input:checked ~ span {
        opacity: 1;
        transform: rotate(23deg) translate(-2px, -1px);
        background: #232323;
    }

    & > input:checked ~ span:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }

    & > input:checked ~ span:nth-last-child(2) {
        transform: rotate(-23deg) translate(0, -1px);
    }

    & > input:checked ~ #menu {
        transform: translateX(0);
    }

    span {
        display: block;
        width: 50px;
        height: 3px;
        margin-bottom: 5px;
        position: relative;
        background: var(--light-gray);
        border-radius: 3px;
        z-index: 10000;
        transform-origin: 4px 0px;
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }

    span:first-child {
        transform-origin: 0% 0%;
    }

    span:nth-last-child(2) {
        transform-origin: 0% 100%;
    }

    #menu {
        position: fixed;
        right: 0;
        top: 0;
        width: 300px;
        padding: 50px;
        padding-top: 125px;
        height: 100vh;
        background: #ededed;
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        transform: translateX(100%);
        transform-origin: top right;
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

        li {
            padding: 10px 0;
            font-size: 22px;
        }
    }
}

/* Mobile */

@media screen and (max-width: 768px) {
    #menuToggle {
        span {
            background-color: var(--gray);
        }
    }
}
</style>
