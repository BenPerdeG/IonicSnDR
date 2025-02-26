<template>
  <ion-page>
    <ion-content :fullscreen="true">
    <div id="container-a">      
      <img src="@/assets/images/SnDR_logo.png" alt="SnDR Logo" class="logo">
      <div class="Login-container" :class="{ 'open': isLoginOpen }">
        <p class="nombre">Nombre</p>
        <ion-input clear-input></ion-input>
        <p class="password">Contraseña</p>
        <ion-input clear-input></ion-input>
        <p class="azul">¿Has olvidado la contraseña?</p>
        <ion-button class="loginButton" @click="goToInicio">Login</ion-button>
        <p class="azul" @click="toggleSignIn">¿No tienes cuenta?</p>
        
      </div>
      <div class="SignIn-container" :class="{ 'open': isSignInOpen }">
        <p class="email">Email</p>
        <ion-input clear-input></ion-input>
        <p class="nombre">Nombre</p>
        <ion-input clear-input></ion-input>
        <p class="password">Contraseña</p>
        <ion-input clear-input></ion-input>
        <ion-button class="signinButton" @click="goToInicio">Sign In</ion-button>
        <p class="azul" @click="toggleSignIn">¿Ya tienes cuenta?</p>
      </div>
    </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">import { IonContent, IonPage, IonInput, IonButton } from '@ionic/vue';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const isLoginOpen = ref(true);
const isSignInOpen = ref(false);
const route = useRoute();
const router = useRouter();


watch(route, () => {
  isSignInOpen.value = false;
  isLoginOpen.value = true;
});

const toggleSignIn = () => {
  isLoginOpen.value = !isLoginOpen.value;
  isSignInOpen.value = !isSignInOpen.value;
};

const goToInicio = () => {
  router.push('/inicio');
};

defineProps();

</script>

<style>

#container-a {
  background-color: #B2B0B0 !important; /* Change the background color directly on ion-page */
  height: 100%;
  color: #000;
}


img{
  margin-top: 15%;
  width: 187px;
  height: 186px;
  flex-shrink: 0;
}

ion-input {
  width: 70% !important;
  margin-left: 15%;
  height: 50px;
  border-radius: 25px;
  background: white;
  padding: 10px;
  
}

p{
  margin-left: 15%;
  text-align: left;
  font-weight: bolder;
}


.Login-container{
  margin-top: 20%;
  left: -1000%;
  width: 100%;
  align-items: center;
  position: absolute;
  transition: left 0.3s ease-in-out;
}
.Login-container.open{
  left: 0;
}

.SignIn-container{
  margin-top: 20%;
  right: -1000%;
  width: 100%;
  align-items: center;
  position: absolute;
  transition: right 0.3s ease-in-out;
}
.SignIn-container.open{
  right: 0;
}

p.azul{
color: #3E62BD;
text-align: center;
font-family: Inter;
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left: 0;
}

p.azul:active{
  text-decoration: underline;
  color: #5974b8;
}

.loginButton{
width: 50%;
height: 200%;
--border-radius: 25px;
--background: #000;
color: white;
font-size: 15px;

}

.signinButton{
width: 50%;
height: 200%;
--border-radius: 25px;
--background: #000;
color: white;
margin-top: 10%;
}
</style>
