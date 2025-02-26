<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="containerInicio">      
        <FloatingMenu />
        <h1 class="titulo_Inicio">Welcome<br/>to SnDR</h1>
        
        <!-- News Carousel -->
        <swiper
          :modules="swiperModules"
          :slides-per-view="1"
          :space-between="50"
          :pagination="{ 
            type: 'fraction',
            el: '.swiper-pagination'
          }"
          class="news-swiper"
        >
          <swiper-slide v-for="(news, index) in newsData" :key="index">
            <div class="news-card">
              <h2 class="news-title">{{ news.title }}</h2>
              <div class="news-content">
                <p class="news-text">{{ news.text }}</p>
                <a href="#" class="ver-mas" @click.prevent="openNewsOverlay(news)">Ver más</a>
              </div>
            </div>
          </swiper-slide>

          <!-- Custom pagination -->
          <div class="swiper-pagination"></div>
        </swiper>

        <!-- Footer -->
        <ion-footer class="footer_Inicio">
          <div class="footer-content">
            <p class="footer-title">Contactos:</p>
            <div class="contact-info">
              <div class="contact-item">
                <ion-icon :icon="mailOutline"></ion-icon>
                sndr.business@gmail.com
              </div>
              <div class="contact-item">
                <img id="bsky" src="@/assets/images/bsky.png" alt="Bluesky" class="bsky-icon"/>
                @sndr.bsky.social
              </div>
              <div class="contact-item">
                <ion-icon :icon="callOutline"></ion-icon>
                +34 123 456 789
              </div>
            </div>
          </div>
        </ion-footer>
      </div>
    </ion-content>
    <NewsOverlay :news="selectedNews" :isOpen="isNewsOverlayOpen" @close="closeNewsOverlay" />
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonContent, IonPage, IonFooter, IonIcon } from '@ionic/vue';
import { mailOutline, callOutline } from 'ionicons/icons';
import FloatingMenu from '@/components/floatingMenu.vue';
import NewsOverlay from '@/components/NewOverlay.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Define the NewsItem interface
interface NewsItem {
  title: string;
  text: string;
  fullText: string;
}

const swiperModules = [Pagination];

const newsData: NewsItem[] = [
  {
    title: 'Noticia 1',
    text: 'Sed id lacinia erat, Sed id lacinia erat, sit amet auctor neque. Sed id lacinia erat, Pellentesque fringilla....',
    fullText: 'Sed id lacinia erat, Sed id lacinia erat, sit amet auctor neque. Sed id lacinia erat, Pellentesque fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam tincidunt, nisl nunc tincidunt urna, nec aliquam nisl nunc vel nunc. Sed id lacinia erat, sit amet auctor neque. Pellentesque fringilla.'
  },
  {
    title: 'Noticia 2',
    text: 'Nulla ac pharetra turpis, a feugiat est. Vivamus condimentum ullamcorper elit ac scelerisque. Nulla id volutpat mauris, at fermentum libero. Sed id lacinia erat, sit amet auctor neque. Pellentesque fringilla....',
    fullText: 'Nulla ac pharetra turpis, a feugiat est. Vivamus condimentum ullamcorper elit ac scelerisque. Nulla id volutpat mauris, at fermentum libero. Sed id lacinia erat, sit amet auctor neque. Pellentesque fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam tincidunt, nisl nunc tincidunt urna, nec aliquam nisl nunc vel nunc.'
  },
  {
    title: 'Noticia 3',
    text: 'Vivamus condimentum ullamcorper elit ac scelerisque. Nulla id volutpat mauris, at fermentum libero. Sed id lacinia erat, sit amet auctor neque. Pellentesque fringilla...',
    fullText: 'Vivamus condimentum ullamcorper elit ac scelerisque. Nulla id volutpat mauris, at fermentum libero. Sed id lacinia erat, sit amet auctor neque. Pellentesque fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam tincidunt, nisl nunc tincidunt urna, nec aliquam nisl nunc vel nunc. Sed id lacinia erat, sit amet auctor neque.'
  }
];

const selectedNews = ref<NewsItem | null>(null);
const isNewsOverlayOpen = ref(false);

const openNewsOverlay = (news: NewsItem) => {
  selectedNews.value = news;
  isNewsOverlayOpen.value = true;
};

const closeNewsOverlay = () => {
  isNewsOverlayOpen.value = false;
};
</script>

<style>

#bsky{
  width: 16px;
  height: 16px;
  margin-top: 0;
}

#containerInicio {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #353535;
}

.titulo_Inicio {
  text-align: center;
  font-family: "Poltawski Nowy", serif;
  font-size: 55px;
  font-weight: 700;
  line-height: 1.2;
  margin: 5% 0;
  background: linear-gradient(78deg, #740000 8.99%, #DA0000 92.67%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.50);
  -webkit-text-stroke: 2px #000;
}

/* News Carousel Styles */
.news-swiper {
  width: 100%;
  height: 60vh;
  margin-bottom: 2rem;
}

.news-card {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 1.5rem;
  margin: 0 auto;
  max-width: 800px;
}

.news-title {
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: "Poltawski Nowy", serif;
}

.news-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.news-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  display: none;
}

.news-text {
  color: white;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
}

.ver-mas {
  color: #DA0000;
  text-decoration: none;
  font-weight: bold;
  align-self: flex-end;
}

/* Swiper Navigation */
.swiper-button-next,
.swiper-button-prev {
  display: none;
}

.swiper-pagination {
  color: white;
}

/* Footer Styles */
.footer_Inicio {
  background: #521313;
  border-top: 1px solid #000;
  padding: 1.5rem 0;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-title {
  color: white;
  font-family: "Poltawski Nowy", serif;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 1rem;
}

.bsky-icon {
  width: 16px;
  height: 16px;
}

ion-icon {
  font-size: 1.2rem;
  color: white;
}

@media (max-width: 768px) {
  .titulo_Inicio {
    font-size: 40px;
  }

  .news-card {
    margin: 0 1rem;
  }
}
</style>

