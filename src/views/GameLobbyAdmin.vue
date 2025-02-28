<template>
    <ion-page>
      <ion-content>
        <div class="page-container">
          <FloatingMenu />
          <div 
            class="imageIcon position-relative" 
            :style="{ backgroundImage: image ? `url(${image})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: image ? 'transparent' : '#b5aeae' }"
          >
            <!-- Backdrop overlay for darkening the page -->
            <div 
              v-if="showOverlay" 
              class="backdrop-overlay"
              @click="closeOverlay"
            ></div>
          </div>
  
          <div class="title-section">
            <div class="title-container">
              <h1 class="title">
                <i 
                  id="icono" 
                  :class="{ active: isActive }" 
                  @click="toggleActive"
                ></i>&numsp;{{ title }}
              </h1>
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
                  <div class="players"></div>
                  <div class="players"></div>
                  <!-- Add @click to toggle the overlay -->
                  <div class="players añadir"><p @click="toggleOverlay">+</p></div>
                </div>
              </div>
              <div class="admin-container">
                <h2 class="section-title">Admin</h2>
                <div class="admin-avatar"><i class="fa fa-user"></i></div>
              </div>
            </div>
          </div>
  
          <div class="action-buttons">
            <router-link to="/tableroA">
              <ion-button expand="block" class="enter-button">Entrar</ion-button>
            </router-link>
            <router-link to="/games">
              <ion-button expand="block" class="delete-button">Borrar Partida</ion-button>
            </router-link>
          </div>
  
          <!-- Sliding overlay with transition -->
          <transition name="slide-up">
            <div 
              v-if="showOverlay" 
              class="overlay-container"
            >
              <div class="white-square bg-white">
                <!-- Your overlay content here -->
                <div class="overlay-header">
                  <h3>Invitar jugador</h3>
                  <button class="close-btn" @click="toggleOverlay">×</button>
                </div>
                <div class="overlay-content">
                  <!-- Parent container for horizontal alignment -->
                  <div class="social-icons">
                    <img src="@/assets/images/whats.svg" alt="Whats" />
                    <img src="@/assets/images/mail.svg" alt="mail" />
                    <img src="@/assets/images/Link.svg" alt="link" @click="toggleClipboardActive" />
                  </div>
                  <!-- Move the "Hello World" input below the icons -->
                  <input readonly type="text" value="linkDeEjemplo.ejemplo" id="myInput" 
                  @click="copy" :class="['clipboardCopy', { active: isClipboardActive }]">
                </div>
              </div>
            </div>
          </transition>
        </div>
      </ion-content>
    </ion-page>
  </template>
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { IonPage, IonContent, IonButton } from '@ionic/vue';
  import FloatingMenu from '@/components/floatingMenu.vue';
  import 'bootstrap/dist/css/bootstrap.css';
  
  // Reactive state to track the active status of the icon
  const isActive = ref(false);
  
  // Reactive state to control the visibility of the overlay
  const showOverlay = ref(false);
  
  // Reactive state to track the active status of the clipboardCopy element
  const isClipboardActive = ref(false);
  
  const route = useRoute();
  const title = decodeURIComponent(route.params.title || 'Nueva Partida');
  const description = decodeURIComponent(route.params.description || 'Descripción...');
  const image = route.params.image ? decodeURIComponent(route.params.image) : '';
  
  // Method to toggle the active state
  const toggleActive = () => {
    isActive.value = !isActive.value;
  };
  
  const copy = () => {
    // Get the text field
    const copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  };
  
  // Method to toggle the overlay
  const toggleOverlay = () => {
    showOverlay.value = !showOverlay.value;
  };
  
  // Method to close the overlay when clicking outside
  const closeOverlay = (event) => {
    // Only close if clicking directly on the backdrop
    if (event.target.classList.contains('backdrop-overlay')) {
      showOverlay.value = false;
    }
  };
  
  // Method to toggle the active state of the clipboardCopy element
  const toggleClipboardActive = () => {
    isClipboardActive.value = !isClipboardActive.value;
  };
  </script>
  <style scoped>
  /* Backdrop overlay for darkening the page */
  .backdrop-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
  
  /* Overlay container */
  .overlay-container {
    position: fixed;
    bottom: 30%;
    left: 0;
    width: 100%;
    z-index: 20;
    display: flex;
    justify-content: center;
    padding: 0 20px 20px;
  }
  
  /* Slide up animation */
  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: transform 0.3s ease;
  }
  
  .slide-up-enter-from,
  .slide-up-leave-to {
    transform: translateY(100%);
  }
  
  /* White square styling */
  .white-square {
    width: 100%;
    max-width: 400px;
    min-height: 210px;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    padding: 20px;
  }
  
  /* Overlay header */
  .overlay-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .overlay-header h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }
  
  .close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
  }
  
  .overlay-content {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px; /* Adds spacing between the icons and the input */
  }
  
  .overlay-content img {
  height: 40px; /* Example size */
  width: 40px; /* Example size */
  margin: 0 15px; /* Spacing between icons */
}

  .social-icons {
    display: flex;
    justify-content: center; /* Center the icons horizontally */
    gap: 15px; /* Adds spacing between the icons */
    align-items: center; /* Ensure they are aligned in the center */
    width: 100%; /* Ensure the container takes full width available */
  }
  
  .clipboardCopy {
    width: 100%;
    max-width: 300px;
    text-align: center;
    padding: 10px;
    border: 1px solid #b8b7b7;
    border-radius: 25px;
    background-color: #f9f9f9;
    cursor: pointer;
    opacity: 0;  /* Initially hidden */
    visibility: hidden; /* Prevents interaction */
    transition: opacity 0.2s ease-in-out, visibility 0s linear 0.2s;
}

.clipboardCopy.active {
    opacity: 1;
    visibility: visible;
    transition-delay: 0s; 
    color: black;
}

  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0;
    background-color: #ffffff;
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
    color: black;
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
  
  .añadir p {
    align-items: center;
    text-align: center;
    font-size: 2em;
    margin-top: 7%;
    margin-right: 15%;
    color: #696767;
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
    padding-right: 7em;
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
  
  .admin-container i {
    font-size: 35px;
    margin-top: 15%;
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