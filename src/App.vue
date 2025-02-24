<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
<style>

:root {
  --ion-background-color: #353535; /* Default global background */
  --background: #353535; /* Optional, set for all pages */
}
</style>