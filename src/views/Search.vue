<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <div class="background-imageG"></div>
        <FloatingMenu />
        <h1 class="titulo_Games">Buscar Partida</h1>
        <!-- Parent container for all games -->
        <div class="games-container">
          <div class="contieneJuegos" v-for="(Games, index) in gameInst" :key="index">
            <div id="Juegitos">
              <div id="iconoG" :style="{ background: `url(${Games.iconImage})`}" ></div>
              <p>{{Games.title}}</p>
              <router-link to="/login">
              <ion-button id="GoGames"><p>➡</p></ion-button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonButton} from '@ionic/vue';
import FloatingMenu from '@/components/floatingMenu.vue';

import dndImage from '@/assets/images/dnd.png';
import pathfinderImage from '@/assets/images/pathfinder.png';
import logo2bgImage from '@/assets/images/logo2bg.png';

interface Games {
  title: string;
  text: string;
  iconImage?:string;
}

const gameInst: Games[] = [
  { title: 'Partida 1', text: 'Esto es la partida 1', iconImage: dndImage },
  { title: 'Partida 2', text: 'Esto es la partida 2' },
  { title: 'Partida 3', text: 'Esto es la partida 3',iconImage: pathfinderImage  },
  { title: 'Partida 4', text: 'Esto es la partida 4',iconImage: dndImage  },
  { title: 'Partida 5', text: 'Esto es la partida 4+1', iconImage: logo2bgImage },
  { title: 'Partida 6', text: 'Esto es la partida 6' },
  { title: 'Partida 7', text: 'Esto es la partida 7',iconImage: pathfinderImage },
  { title: 'Partida 8', text: 'Esto es la partida 8' },
  { title: 'Partida 9', text: 'Esto es la partida 9, curioso que revises la 9 y no la 10.', iconImage:logo2bgImage },
  { title: 'Partida 10', text: 'Esto es la partida 10',iconImage: dndImage }
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
  margin: 10% 20%;
  color: white;
  padding-top: 10%;
  text-shadow: 10px 10px 10px rgb(0, 0, 0) !important; 
}


/* Parent container for all games */
.games-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20%;
  gap: 5px; /* Adds space between each game */

}

#iconoG {
  background-color: #2B2938 !important;
  border-radius: 5px !important;
  width: 3em !important;
  height: 3em !important;
  margin-left: 2em !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}



#GoGames{
--background: #000000;
border-radius: 5px;
width: 3em;
height: 3em;
right: 2em;
margin-top:-1.5em;
position: absolute;
}


#GoGames p{
font-size: 1.5em;
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