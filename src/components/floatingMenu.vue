<template>
  <div>
    <div class="menu-container" :class="{ 'open': isMenuOpen }">
      <div class="floating-button" @click="toggleMenu">
        <ion-icon name="menu"></ion-icon>
      </div>
      <div class="side-menu">
        <ion-content>
          <p>Menu Content Goes Here</p>
        </ion-content>
      </div>
    </div>


    <ion-content id="main-content">
      <p>Main content displayed here</p>
    </ion-content>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
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
  /* 10% from top + button height + spacing */
  left: -20%;
  /* Hidden by default */
  width: 20%;
  height: calc(100% - (10% + 60px + 10px));
  transition: left 0.3s ease-in-out;
  overflow: hidden;
  border-radius: 0px 0px 15px 0px;
}

.menu-container.open .side-menu {
  left: 0;
}

.menu-container .side-menu ion-content {
  --background: #f0f0f0;
  color: black;
}

.menu-container .side-menu ion-content p {
  color: black;
}
</style>
