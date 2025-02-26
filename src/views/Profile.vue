<template>
  <ion-page class="profile">
    <ion-content :fullscreen="true">
      <div id="containerP">      
        <FloatingMenu class="menuF"/>
        <div class="profile-container">
          <div class="avatar-container">
            <ion-avatar class="avatar">
              <i class="fa fa-user"></i>
            </ion-avatar>
          </div>
          
          <h1 id="Usuario" expand="full">
            Nombre de Usuario
          </h1>

          <div class="info">
            <p id="arriba"><strong>Correo:</strong></p>
            <p class="emailP">aaaaaa@aaaaa.aaa</p>
          </div>
          
          <div class="info">
            <p id="arriba"><strong>Horas Jugadas:</strong></p>
            <p class="hours">2123456789</p>
          </div>
          <router-link to="/login">
          <ion-button fill="clear" class="logout-button">Log out</ion-button>
          </router-link>
          <router-link to="/login">
          <ion-button fill="clear" color="danger" class="delete-button">Eliminar cuenta</ion-button>
        </router-link>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonButton, IonAvatar, IonIcon } from '@ionic/vue';
import FloatingMenu from '@/components/floatingMenu.vue';
</script>

<style>


.menuF {
  position: absolute;
  top: 0.5%;
}

#Usuario {
  text-align: center;
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: bold;
}

#containerP {
  background-color: #B2B0B0 !important;
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Ensures all content is centered */
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 400px;
  text-align: center;
}

.avatar-container {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 30px;
  color: #000;
}
.avatar-container i{
  margin-top: 15px;
}

.avatar {
  width: 80px;
  height: 80px;
  background-color: gray; /* Temporary check */
  border-radius: 50%; /* Ensure it keeps the round shape */
  overflow: hidden; /* Make sure image fits inside */
  margin-left: -2.5%;
}

.avatar-icon {
  font-size: 80px;
  color: black;
}


.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 15px;
}
#arriba {
  font-weight: bold;
  text-align: center;
  display: block; /* Ensures it's treated as a full-width block */
  width: 100%; /* Makes sure it aligns with the parent */
  margin-left: -2.5%;
}


.emailP, .hours {
  color: blue;
  font-size: 16px;
  margin-left: -2.5%;
}

.logout-button {
  color: blue;
  margin-top: 15px;
}

.delete-button {
  color: red;
  margin-top: 5px;
}

</style>
