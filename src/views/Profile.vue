<template>
    <ion-page class="profile">
      <ion-content :fullscreen="true">
        <div id="containerP">      
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
  
  <style>
  #containerP{
    background-color: #B2B0B0 !important; /* Change the background color directly on ion-page */
    height: 100%;
  }
  </style>
  