<template>
  <div>
    <div class="menu-container" :class="{ 'open': isMenuOpen }">
      <div class="floating-button" @click="toggleMenu">
        <i class="fa fa-bars"></i>
      </div>
      <div class="side-menu">
        <ion-content>
          <HomeButton />
          <MyGamesButton />
          <SearchButton />
          <ProfileButton />
          <QandA />
        </ion-content>
      </div>
    </div>

    <ion-content id="main-content">
      <p>Main content displayed here</p>
    </ion-content>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';  // Import Vue Router to track route changes
import HomeButton from '@/components/HomeButton.vue';
import QandA from '@/components/Q&AButton.vue';
import MyGamesButton from '@/components/MyGamesButton.vue';
import ProfileButton from '@/components/ProfileButton.vue';
import SearchButton from '@/components/SearchButton.vue';

const isMenuOpen = ref(false);

// Create a route watcher to reset the menu state on route change
const route = useRoute();

watch(route, () => {
  isMenuOpen.value = false;  // Reset menu to closed whenever the route changes
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style>
.menu-container {
  position: sticky;
  top: 10%;
  height: 100%;
  width: 250px;
  text-align: left;
}

.menu-container .floating-button {
  width: 60px;
  height: 60px;
  border-radius: 0px 15px 15px 0px;
  background: #740000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: fixed;
  margin-top: 10%;
  left: 0;
  transition: left 0.3s ease-in-out;
}

.menu-container.open .floating-button {
  left: 20%;
}

.menu-container .side-menu {
  position: fixed;
  margin-top: 10%;
  left: -20%;
  width: 20%;
  height: 50%;
  transition: left 0.3s ease-in-out;
  overflow: hidden;
  border-radius: 0px 0px 15px 0px;
}

.menu-container.open .side-menu {
  left: 0;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.50);

}

.menu-container .side-menu ion-content {
  --background: rgba(175, 175, 175, 0.75);
  color: black;
  
}



.menu-container .side-menu ion-content p {
  color: black;
}

ion-content {
  text-align: center;
}

ion-content i {
  margin-top: 40%;
  font-size: 50px;
  color: #000;
}
.menu-container .floating-button i {
  margin-top: 0;
  font-size: 30px;
  color: #000;
  transition: transform 0.3s ease-in-out;
}

.menu-container.open .floating-button i {
  transform: rotate(90deg);
}

</style>
