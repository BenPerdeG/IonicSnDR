<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container"> 
        <div class="background-imageG"></div>     
        <FloatingMenu />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import FloatingMenu from '@/components/floatingMenu.vue'; 

defineProps(); 

</script>

<style scoped>

.background-imageG {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: 
  url('@/assets/images/bg.png') 0 0 / 120px 120px repeat;
opacity: 0.1;
z-index: -1;
}

</style>
