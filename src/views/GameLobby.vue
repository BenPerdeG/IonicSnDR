<template>
    <ion-page>
      <ion-content>
        <div class="page-container">
          <FloatingMenu />
          <div class="imageIcon"></div>
  
          <div class="title-section">
            <div class="icon-container">
              <ion-icon :icon="lockClosedOutline" class="lock-icon"></ion-icon>
            </div>
            <div class="title-container">
              <h1 class="title">Nueva</h1>
              <h1 class="title">Partida</h1>
            </div>
          </div>
          
          <!-- Description section -->
          <div class="description-section">
            <p class="description-text">Descripción...</p>
          </div>
          
          <!-- Players section -->
          <div class="players-section">
            <div class="section-row">
              <!-- Jugadores Title and Circle on the left -->
              <div class="jugadores-container">
                <h2 class="section-title">Jugadores:</h2>
                <div class="players-container">
                  <div class="players"></div>
                  <div class="players"></div> <!-- Removed the plus sign -->
                </div>
              </div>
              
              <!-- Admin Title and Circle on the right -->
              <div class="admin-container">
                <h2 class="section-title">Admin</h2>
                <div class="admin-avatar"></div>
              </div>
            </div>
          </div>
          
          <!-- Action buttons -->
          <div class="action-buttons">
            <router-link to="/login">
            <ion-button expand="block" class="enter-button">Entrar</ion-button>
            </router-link>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { 
    IonPage, 
    IonContent, 
    IonButton, 
    IonIcon 
  } from '@ionic/vue';
  import { lockClosedOutline } from 'ionicons/icons';
  import FloatingMenu from '@/components/floatingMenu.vue';
  </script>
  
  <style scoped>
  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center everything horizontally */
    justify-content: center; /* Center everything vertically */
    height: 100%;
    padding: 0;
    background-color: #888;
  }
  
  .imageIcon {
    width: 80%;
    height: 170px;
    background-color: #b5aeae;
    border-radius: 16px;
    margin-top: 2em;
    margin-bottom: 2em;
    margin-left: 10%;
    display: block;
    margin-left: auto;
    margin-right: auto; /* Center horizontally */
  }
  
  .title-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    padding: 0 20px;
  }
  
  .icon-container {
    margin-right: 10px;
  }
  
  .lock-icon {
    font-size: 32px;
    color: #000;
  }
  
  .title-container {
    text-align: center;
  }
  
  .title {
    font-size: 28px;
    font-weight: bold;
    margin: 0;
    line-height: 1.2;
  }
  
  .description-section {
    padding: 0 20px;
    margin-bottom: 40px;
    text-align: center; /* Center text */
  }
  
  .description-text {
    color: #000000;
    font-size: 18px;
    width: 300px;
    margin-left: 0;
    padding: 3em;
    background-color:white;
    border-radius: 5px;
  }
  
  .players-section {
    flex: 1;
    padding: 0 20px;
    margin-bottom: 20px;
    text-align: center; /* Center text */
  }
  
  .section-row {
    display: flex;
    justify-content: space-between; /* Space out the two containers (Jugadores and Admin) */
    margin-bottom: 20px;
    align-items: center; /* Align titles and circles in the same row */
  }
  
  .jugadores-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 10em; /* Center the content */
  }
  
  .jugadores-container .section-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px; /* Space between title and circles */
  }
  
  /* New container for players to align them horizontally */
  .jugadores-container .players-container {
    display: flex;
    justify-content: center; /* Align circles horizontally */
    gap: 10px; /* Optional: space between circles */
  }
  
  .players {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #b5aeae;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .admin-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center the content */
  }
  
  .admin-container .section-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px; /* Space between title and circle */
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
    gap: 10px;
    justify-content: center; /* Center the buttons */
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
    --background: #932121;
    color: white;
    --border-radius: 24px;
    font-weight: bold;
    font-size: 18px;
    height: 48px;
    flex: 1;
  }
  </style>
  