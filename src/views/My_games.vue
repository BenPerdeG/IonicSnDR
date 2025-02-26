<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <div class="background-imageG"></div>
        <FloatingMenu />
        <h1 class="titulo_Games">My games</h1>
        <!-- Parent container for all games -->
        <div class="games-container">
          <div class="contieneJuegos" v-for="(Games, index) in gameInst" :key="index">
            <div id="Juegitos">
              {{Games.title}}
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import FloatingMenu from '@/components/floatingMenu.vue';

interface Games {
  title: string;
  text: string;
}

const gameInst: Games[] = [
  { title: 'Partida 1', text: 'Esto es la partida 1' },
  { title: 'Partida 2', text: 'Esto es la partida 2' },
  { title: 'Partida 3', text: 'Esto es la partida 3' },
  { title: 'Partida 4', text: 'Esto es la partida 4' },
  { title: 'Partida 5', text: 'Esto es la partida 4+1' },
  { title: 'Partida 6', text: 'Esto es la partida 6' },
  { title: 'Partida 7', text: 'Esto es la partida 7' },
  { title: 'Partida 8', text: 'Esto es la partida 8' },
  { title: 'Partida 9', text: 'Esto es la partida 9, curioso que revises la 9 y no la 10.' },
  { title: 'Partida 10', text: 'Esto es la partida 10' }
];

defineProps();
</script>

<style scoped>
.background-imageG {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/images/bg.png') 0 0 / 120px 120px repeat;
  opacity: 0.1;
  z-index: -1;
}

.titulo_Games {
  text-align: center;
  font-size: 55px;
  font-weight: 700;
  line-height: 1.2;
  margin: 5% 0;
  color: white;
  padding-top: 10%;
  text-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.50);
}

/* Parent container for all games */
.games-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30%;
  gap: 5px; /* Adds space between each game */

}


#Juegitos {
  display: flex;
  width: 25em;
  height: 5em;
  flex-shrink: 0;
  background: linear-gradient(90deg, #FFF 0%, #2B2938 100%);
  border-radius: 15px;
  align-items: center;
}
</style>