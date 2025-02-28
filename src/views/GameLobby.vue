<template>
    <ion-page>
      <ion-content>
        <div class="page-container">
          <FloatingMenu />
          <div 
            class="imageIcon" 
            :style="{ backgroundImage: image ? `url(${image})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: image ? 'transparent' : '#b5aeae' }"
          ></div>
  
          <div class="title-section">
            <div class="title-container">
              <h1 class="title">  <i 
              id="icono" 
              :class="{ active: isActive }" 
              
            ></i>&numsp;{{ title }}</h1>
            
            </div>
          </div>
  
          <div class="description-section">
            <br>Descripción:
            <p class="description-text">{{ description }}</p>
          </div>
  
          <div class="players-section">
            <div class="section-row">
              <div class="jugadores-container">
                <h2 class="section-title">Jugadores:</h2>
                <div class="players-container">
                  <div class="players"><i class="fa fa-user"></i></div>
                  <div class="players"></div>
                </div>
              </div>
              <div class="admin-container">
                <h2 class="section-title">Admin</h2>
                <div class="admin-avatar"></div>
              </div>
            </div>
          </div>
  
          <div class="action-buttons">
            <router-link to="/tablero">
              <ion-button expand="block" class="enter-button">Entrar</ion-button>
            </router-link>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import FloatingMenu from '@/components/floatingMenu.vue';

// Reactive state to track the active status of the icon
const isActive = ref(false);

const route = useRoute();
const title = decodeURIComponent(route.params.title || 'Nueva Partida');
const description = decodeURIComponent(route.params.description || 'Descripción...');
const image = route.params.image ? decodeURIComponent(route.params.image) : '';

// Method to toggle the active state
const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>

  
  <style scoped>
  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0;
    background-color: #ffffff;
  }

  .players i{
    font-size: 35px;
    margin-top: 15%;
  }
  
  
  #icono {
    width: 24px;
    height: 24px;
    background-image: url('@/assets/images/lock.png');
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    margin-left: -50%;
  }

  #icono.active {
    width: 24px;
    height: 24px;
    background-image: url('@/assets/images/unlock.png');
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    margin-left: -50%;
  }
  
  .imageIcon {
    width: 80%;
    height: 170px;
    border-radius: 16px;
    margin-top: 2em;
    margin-bottom: -2em;
    display: block;
  }
  
  .title-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    padding: 0 20px;
    color: black;
  }
  
  .title-container {
    text-align: center;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .title {
    font-size: 28px;
    font-weight: bold;
    margin: 0;
    line-height: 1.2;
  }
  
  .description-section {
    margin-bottom: 40px;
    text-align: left;
    font-size: 15px;
    font-weight: bolder;
    color: black;
  }
  

  
  .description-text {
    color:black;
    font-size: 18px;
    width: 300px;
    margin-left: 0;
    padding-top: 1em;
    padding-bottom: 5em;
    padding-left: 2em;
    padding-right: 5em;
    margin-bottom: 10em;
    background-color: rgba(58, 57, 57, 0.205);
    border-radius: 5px;
  }
  
  .players-section {
    flex: 1;
    padding: 0 20px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .section-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
  }
  
  .jugadores-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 10em;
  }
  
  .jugadores-container .section-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .jugadores-container .players-container {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .players {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #b5aeae;
  }
  
  .admin-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .admin-container .section-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .admin-avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #b5aeae;
  }
  
  .action-buttons {
    padding: 0 20px 20px;
    display: flex;
    justify-content: center;
  }
  
  .enter-button {
    --background: #3a0ca3;
    --color: white;
    --border-radius: 24px;
    font-weight: bold;
    font-size: 18px;
    height: 48px;
    flex: 1;
  }
  .delete-button {
    --background: #e70b0b;
    color: white;
    --border-radius: 24px;
    font-weight: bold;
    font-size: 18px;
    height: 48px;
    flex: 1;
  }
  </style>
  