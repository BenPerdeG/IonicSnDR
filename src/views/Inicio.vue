<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="containerInicio">      
        <FloatingMenu />
        <p class="titulo_Inicio">Welcome to SnDR</p>
        <newComp text="Click me to open overlay!" />
        <ion-footer class="footer_Inicio">
          <p class="footerText">Contactos: </p>
          <p class="footerText"> &ensp;
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 3.5625H2.5C2.33424 3.5625 2.17527 3.62506 2.05806 3.73641C1.94085 3.84776 1.875 3.99878 1.875 4.15625V14.25C1.875 14.5649 2.0067 14.867 2.24112 15.0897C2.47554 15.3124 2.79348 15.4375 3.125 15.4375H16.875C17.2065 15.4375 17.5245 15.3124 17.7589 15.0897C17.9933 14.867 18.125 14.5649 18.125 14.25V4.15625C18.125 3.99878 18.0592 3.84776 17.9419 3.73641C17.8247 3.62506 17.6658 3.5625 17.5 3.5625ZM10 9.88223L4.10703 4.75H15.893L10 9.88223ZM7.71172 9.5L3.125 13.4937V5.50629L7.71172 9.5ZM8.63672 10.3053L9.57422 11.1254C9.68953 11.2259 9.84035 11.2817 9.99687 11.2817C10.1534 11.2817 10.3042 11.2259 10.4195 11.1254L11.357 10.3053L15.8883 14.25H4.10703L8.63672 10.3053ZM12.2883 9.5L16.875 5.50555V13.4945L12.2883 9.5Z" fill="white"/>
            </svg> sndr.business@gmail.com 
            <br> &emsp;<img id="a"/> @sndr.bsky.social 
            <br> &emsp;<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.2413 12.9986L14.3768 11.2669L14.3661 11.262C14.1655 11.1762 13.9467 11.1418 13.7294 11.1618C13.5121 11.1819 13.3033 11.2558 13.1217 11.3769C13.1004 11.391 13.0798 11.4063 13.0602 11.4228L11.0636 13.125C9.79864 12.5105 8.4927 11.2144 7.87829 9.96593L9.5829 7.93894C9.5993 7.91843 9.61489 7.89793 9.62966 7.87578C9.74813 7.69474 9.82001 7.48721 9.83891 7.27168C9.8578 7.05614 9.82311 6.83928 9.73794 6.64039V6.63054L8.00134 2.75949C7.88874 2.49967 7.69513 2.28323 7.44942 2.14248C7.2037 2.00173 6.91906 1.94423 6.63798 1.97855C5.52643 2.12482 4.50613 2.6707 3.76765 3.51425C3.02916 4.3578 2.623 5.44133 2.62501 6.56246C2.62501 13.0757 7.92423 18.375 14.4375 18.375C15.5586 18.377 16.6422 17.9708 17.4857 17.2323C18.3293 16.4938 18.8751 15.4735 19.0214 14.362C19.0558 14.081 18.9984 13.7964 18.8578 13.5507C18.7172 13.305 18.501 13.1114 18.2413 12.9986ZM14.4375 17.0625C11.6537 17.0594 8.98472 15.9522 7.01624 13.9837C5.04777 12.0152 3.94055 9.3463 3.93751 6.56246C3.93442 5.76141 4.22302 4.98663 4.7494 4.38281C5.27578 3.77899 6.00396 3.38741 6.79794 3.28121C6.79761 3.28448 6.79761 3.28778 6.79794 3.29105L8.52059 7.14652L6.82501 9.17597C6.8078 9.19577 6.79216 9.21689 6.77825 9.23914C6.6548 9.42856 6.58239 9.64666 6.56802 9.8723C6.55364 10.0979 6.5978 10.3235 6.69622 10.527C7.43942 12.0471 8.97094 13.5671 10.5074 14.3095C10.7124 14.407 10.9393 14.4496 11.1657 14.4332C11.3922 14.4168 11.6105 14.342 11.7994 14.216C11.8204 14.2018 11.8407 14.1864 11.8601 14.17L13.8543 12.4687L17.7097 14.1955C17.7097 14.1955 17.7163 14.1955 17.7188 14.1955C17.6139 14.9906 17.2229 15.7202 16.6189 16.2479C16.015 16.7756 15.2395 17.0652 14.4375 17.0625Z" fill="white"/>
                  </svg> +34 123 456 789 </p>
        </ion-footer>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonButton, IonModal } from '@ionic/vue';
import FloatingMenu from '@/components/floatingMenu.vue'; 
import newComp from '@/components/newComp.vue'; 
defineProps(); 

</script>

<style>
#containerInicio {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#containerInicio .titulo_Inicio {
  text-align: center;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.50);
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #000;
  font-family: "Poltawski Nowy";
  font-size: 55px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(78deg, #740000 8.99%, #DA0000 92.67%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 25%;
  margin-top: 5%;
  width: 55%;
  flex-grow: 1; /* Allow content to take remaining space */
}

.footer_Inicio {
  position: fixed;
  bottom: 0;
  height: 15%;
  width: 100%;
  color: #FFF;
  font-family: "Poltawski Nowy";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: 1px solid #000;
  background: #521313;
  padding: 10px 0; /* Add some padding for spacing */
}

#a {
  background: url('@/assets/images/bsky.png') 50% / cover no-repeat;
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  margin-top: 0;
  border: none;
}

p.footerText {
  margin-left: 20%;
}
</style>
