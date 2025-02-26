<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="containerQandA">
        <div class="background-image"></div>
        <FloatingMenu />
        <p class="titulo_Inicio">Preguntas frecuentes</p>

        <!-- Swiper Container -->
        <swiper
          :modules="swiperModules"
          :slides-per-view="1"
          :space-between="50"
          :pagination="{ clickable: true }"
          class="mySwiper"
        >
          <swiper-slide v-for="(qa, index) in faqData" :key="index">
            <div class="qa-pair">
              <p class="question">{{ qa.question }}</p>
              <p class="answer">{{ qa.answer }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import FloatingMenu from '@/components/floatingMenu.vue';
import { Swiper, SwiperSlide } from 'swiper/vue'; // Import Swiper components
import {Pagination} from 'swiper/modules'; // Import Pagination module (no curly braces)
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/pagination'; // Pagination styles

// Swiper modules
const swiperModules = [Pagination];

// FAQ data
const faqData = [
  {
    question: "¿Qué es SnDR?",
    answer: "SnDR es una página web donde puedes crear o unirte a sesiones. Dentro de estas sesiones, hay un tablero virtual donde se puede llevar a cabo todo lo necesario para una partida de un TTRPG."
  },
  {
    question: "¿Qué es un TTRPG?",
    answer: "El término TTRPG significa 'juego de rol de mesa' (o RPG de mesa). La principal diferencia entre los TTRPG y los videojuegos RPG es que los TTRPG generalmente tienen lugar entre un grupo de jugadores sentados alrededor de una mesa, y la acción ocurre principalmente en el 'teatro de la mente'."
  },
  {
    question: "¿Es SnDR un juego?",
    answer: "NO."
  }
];
</script>

<style>
/* Main container */
#containerQandA {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Background image */
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/images/questionmark.png') 0% 0% / 100px 100px repeat;
  opacity: 0.3;
  z-index: -1;
}

/* Title centered at the top */
.titulo_Inicio {
  font-size: 50px;
  width: 100%;
  text-align: center;
  margin-top: 60px;
  margin-left:5%;
  color: white !important;
}

/* Swiper container */
.mySwiper {
  width: 100%;
  height: 70vh;
  position: relative; /* Ensure relative positioning for pagination */
}

/* Individual question-answer pair */
.qa-pair {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 20px;
}

/* Question Styling */
.question {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
  color: white;
}

/* Answer Styling */
.answer {
  font-size: 18px;
  max-width: 350px;
  line-height: 1.5;
  color: white;
}

/* Pagination dots (ensure visibility) */
.mySwiper .swiper-pagination {
  bottom: 10px;
  position: absolute;
  text-align: center;
  width: 100%;
}

.mySwiper .swiper-pagination-bullet {
  background-color: white !important;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  opacity: 0.7;
  border-radius: 50%;
}

.mySwiper .swiper-pagination-bullet-active {
  background-color: #ffcc00 !important;
  opacity: 1;
}
</style>