<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">      
        <FloatingMenu /> <!-- This will render your FloatingMenu component -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import FloatingMenu from '@/components/floatingMenu.vue';  // Ensure the correct path

defineProps();  // Add this to ensure proper component setup

</script>

<style scoped>
/* Your existing styles */
</style>
