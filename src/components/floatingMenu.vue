<template>
    <div>
      <!-- Floating Button (Red Square with Rounded Corners) -->
      <div class="floating-button" :class="{ 'open': isMenuOpen }" @click="toggleMenu">
        <ion-icon name="menu"></ion-icon>
      </div>
  
      <!-- Gray Rectangle (Side Menu) -->
      <div class="side-menu" :class="{ 'open': isMenuOpen }">
        <ion-header>
          <ion-toolbar>
            <ion-title>Side Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <p>Menu Content Goes Here</p>
        </ion-content>
      </div>
  
      <!-- Main content -->
      <ion-content id="main-content">
        <p>Main content displayed here</p>
      </ion-content>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

// Toggle menu state (open/close)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Floating Button (Red Square with Rounded Corners) */
.floating-button {
  position: sticky; /* Makes the button sticky */
  margin-top: 10.33%; /* Keeps the button at 20% from the top of the screen */
  left: 0;  /* Keeps the button at the left of the screen */
  width: 60px;  /* Width of the square button */
  height: 60px; /* Height of the square button */
  border-radius: 0px 15px 15px 0px; /* Rounded corners on the right */
  background: #740000; /* Red color */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
  transition: left 0.3s ease-in-out; /* Smooth transition when moving */
}

.floating-button.open {
  left: 20%; /* Moves the button to the right when the menu is open */
}

/* Icon inside the floating button */
.floating-button ion-icon {
  font-size: 30px;  /* Icon size */
  color: white;  /* White icon color */
}

/* Gray rectangle (side menu) attached to the button */
.side-menu {
  position: fixed; /* Keeps the side menu fixed */
  top: 20%; /* Aligns it with the button */
  left: -80%; /* Initially off-screen */
  width: 20%; /* Same width as the button */
  height: 30%; /* Height of the side menu */
  background-color: #444; /* Gray color */
  z-index: 999;
  transition: left 0.3s ease-in-out; /* Smooth transition when moving */
  padding: 20px;
}

/* When the menu is open, it slides to the right */
.side-menu.open {
  left: 0%; /* Slide the menu to the right */
}

/* Main content */
ion-content {
  padding: 20px;
}
</style>
