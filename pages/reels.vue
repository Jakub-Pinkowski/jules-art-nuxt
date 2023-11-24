<template>
    <div class="mt-8">
        <div class="desktop">
            <Swiper
                ref="mySwiper"
                @slideChangeTransitionEnd="onSlideChangeTransitionEnd"
                :slidesPerView="1"
                :centeredSlides="true"
                :spaceBetween="10"
                :slideToClickedSlide="true"
                :modules="modules"
                :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }"
                :breakpoints="{
                    '768': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '1024': {
                        slidesPerView: 3,
                        spaceBetween: 120,
                    },
                }"
                class="mySwiper"
            >
                <SwiperSlide v-for="reel in reversedReels" :key="reel.name">
                    <video
                        class="rounded"
                        :src="reel.src"
                        :poster="reel.poster"
                        loop
                        controls
                    ></video>
                    <span class="video-text"> {{ reel.name }}</span>
                </SwiperSlide>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </Swiper>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useReelsStore } from '~/stores/reels'
import { Navigation } from 'swiper/modules'

const modules = [Navigation]

const reelsStore = useReelsStore()
const reels = reelsStore.reels
const reversedReels = reels.slice().reverse()

// Desktop
const onSlideChangeTransitionEnd = (swiper: any) => {
    const videos = Array.from(document.querySelectorAll('.desktop video')) as HTMLVideoElement[]
    videos.forEach((video, index) => {
        if (index === swiper.activeIndex) {
            video.classList.remove('inactive')
            video.setAttribute('controls', '')
        } else {
            video.classList.add('transition')
            video.classList.add('inactive')
            video.removeAttribute('controls')
            video.pause()
            video.removeAttribute('autoplay')
        }
    })
}
// Apply inactive classes to all the videos except the first one when page loads
onMounted(() => {
    const videos = Array.from(document.querySelectorAll('.desktop video')) as HTMLVideoElement[]
    videos.forEach((video, index) => {
        if (index === 0) {
            video.classList.remove('transition')
            video.classList.remove('inactive')
            video.setAttribute('controls', '')
        } else {
            video.classList.add('transition')
            video.classList.add('inactive')
            video.removeAttribute('controls')
        }
    })
})
</script>

<style scoped lang="scss">
/* Desktop */
.swiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 400px;
        height: auto;

        img,
        video {
            display: block;
            width: 84%;
            height: auto;
            transition: filter 0.3s ease-out;
        }

        video.inactive {
            filter: blur(4px);
        }

        .video-text {
            position: absolute;
            bottom: 60px;
            left: -24px;
            width: 100%;
            text-align: center;
            color: #fff;
            font-size: 1.5rem;
            font-weight: 600;
        }
    }
    .swiper-button-next {
        height: 50px;
        width: 50px;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%234e4e50' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
    }

    .swiper-button-prev {
        height: 50px;
        width: 50px;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%234e4e50' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        content: '';
    }
}
</style>
