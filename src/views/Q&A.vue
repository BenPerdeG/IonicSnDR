<template>
  <ion-page>
    <ion-content :fullscreen="true">
    <div id="containerQandA">
      <FloatingMenu />
      <p class="titulo_Inicio">Preguntas<br>frecuentes</p>
    </div>
      <div class="text-container">
        <div class="text-section">
          <p>
            Una encuesta de la Asociación Estadounidense de Psiquiatría (APA) publicada conjuntamente con la Asociación Estadounidense de Medicina Veterinaria (AVMA) ha explorado los beneficios de las mascotas para la salud mental.
          </p>

          <p>
            LAS MASCOTAS CALMAN Y REDUCEN EL ESTRÉS Y LA ANSIEDAD DE SUS PROPIETARIOS.
            Otros resultados de la encuesta muestran que los propietarios consideran que su mascota proporciona una presencia calmante (62%) y ayuda a reducir el estrés y la ansiedad (62%).
          </p>

          <p>
            Entre todos los encuestados, el 72% informó tener mascotas en casa. Concretamente, el 52% tenía perros y el 37% tenía gatos.
          </p>

          <p>
            Los propietarios de perros (85%) y gatos (86%) eran más propensos a decir que su mascota tenía un impacto positivo en su salud mental.
          </p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import FloatingMenu from '@/components/floatingMenu.vue';
</script>

<style>
#containerQandA{
  display: flex;
  flex-direction: column;
  height: 100%;
}

ion-content::part(background) {
  background: url('../assets/images/questionmark.png') 0% 0% / 20.509999990463257px 20.509999990463257px repeat, #353333;
}

ion-content::part(scroll) {
text-align: center;
color: #6489A5;

}

ion-content::part(scroll){
  overflow: hidden;
}

ion-title {
text-align: center;
}

.text-container {
overflow-x: auto; 
white-space: nowrap;
}


.text-section {
display: flex;
}

p.titulo_Inicio {
left: -12%;
font-size: 50px;
width: 75%;   
white-space: normal;
text-align: center;
color: #fff;
padding: 40px;
position: absolute;
}
</style>