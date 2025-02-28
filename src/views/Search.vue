<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <div class="background-imageG"></div>
        <FloatingMenu />
        <h1 class="titulo_Games">Buscar Publica</h1>

        <!-- Search Bar -->
        <ion-searchbar v-model="searchQuery" debounce="300" placeholder="Buscar Publica..."></ion-searchbar>

        <!-- Parent container for all games -->
        <div class="games-container">
          <div class="contieneJuegos" v-for="(Games, index) in filteredGames" :key="index">
            <div id="Juegitos">
              <div id="iconoG" :style="{ background: `url(${Games.iconImage})`}" ></div>
              <p>{{ Games.title }}</p>
              <router-link :to="{
  path: `/lobby/${encodeURIComponent(Games.title)}/${encodeURIComponent(Games.text)}/${encodeURIComponent(Games.iconImage || '')}`
}">
  <ion-button id="GoGamesSearch"><p>➡</p></ion-button>
</router-link>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonButton, IonSearchbar } from '@ionic/vue';
import { ref, computed } from 'vue';
import Fuse from 'fuse.js'; // Import Fuse.js
import FloatingMenu from '@/components/floatingMenu.vue';

import dndImage from '@/assets/images/dnd.png';
import pathfinderImage from '@/assets/images/pathfinder.png';
import logo2bgImage from '@/assets/images/logo2bg.png';

interface Games {
  title: string;
  text: string;
  iconImage?: string;
}

const gameInst: Games[] = [
  { title: 'Publica 1', text: 'Esto es la Publica 1', iconImage: dndImage },
  { title: 'Publica 2', text: 'Esto es la Publica 2' },
  { title: 'Publica 3', text: 'Esto es la Publica 3', iconImage: pathfinderImage },
  { title: 'Publica 4', text: 'Esto es la Publica 4', iconImage: dndImage },
  { title: 'Publica 5', text: 'Esto es la Publica 4+1', iconImage: logo2bgImage },
  { title: 'Publica 6', text: 'Esto es la Publica 6' },
  { title: 'Publica 7', text: 'Esto es la Publica 7', iconImage: pathfinderImage },
  { title: 'Publica 8', text: 'Esto es la Publica 8' },
  { title: 'Publica 9', text: 'Esto es la Publica 9, curioso que revises la 9 y no la 10.', iconImage: logo2bgImage },
  { title: 'Publica 10', text: 'Esto es la Publica 10', iconImage: dndImage }
];

const searchQuery = ref('');

// Setting up Fuse.js
const fuse = new Fuse(gameInst, {
  keys: ['title'], // Only search titles
  threshold: 0.3,  // Adjust sensitivity
  includeScore: false // Disable scoring, only return matches
});

// Filter the games list to only return games that match the search query
const filteredGames = computed(() => {
  if (!searchQuery.value.trim()) {
    return gameInst; // Return all if search is empty
  }

  // Fuzzy search using Fuse.js
  const results = fuse.search(searchQuery.value);

  // Only show results that closely match the search term
  return results
    .filter(result => {
      // Ensure the game title matches the search query (either exactly or fuzzy enough)
      const gameTitle = result.item.title.toLowerCase();
      return gameTitle.includes(searchQuery.value.toLowerCase());
    })
    .map(result => result.item); // Return only the matching game items
});

defineProps();
</script>

<style scoped>
/* Background */
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

/* Title */
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

/* Search Bar */
ion-searchbar {
  margin: 10px auto;
  width: 80%;
  max-width: 500px;
  --background: #2B2938;
  --color: white;
  --placeholder-color: lightgray;
  --border-radius: 10px;
}

/* Games Container */
.games-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20%;
  gap: 5px;
  color: black;
}

/* Game Icon */
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

/* Button */
#GoGamesSearch {
  --background: #000000;
  border-radius: 5px;
  width: 3em;
  height: 3em;
  right: 2em;
  margin-top: -1.5em;
  position: absolute;
  color: white;
}

#GoGamesSearch p {
  font-size: 1.5em;
  margin-top: 0.75em;
}

/* Game Card */
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
