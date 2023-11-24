<template>
    <div>
        <div class="desktop">
            <swiper
                ref="mySwiper"
                @slideChangeTransitionEnd="onSlideChangeTransitionEnd"
                :slidesPerView="1"
                :centeredSlides="true"
                :spaceBetween="10"
                :slideToClickedSlide="true"
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
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide v-for="reel in reversedReels" :key="reel.name">
                    <video
                        class="rounded"
                        :src="reel.src"
                        :poster="reel.poster"
                        loop
                        controls
                    ></video>
                    <span class="video-text"> {{ reel.name }}</span>
                </swiper-slide>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </swiper>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
</script>

<style scoped lang="scss"></style>
