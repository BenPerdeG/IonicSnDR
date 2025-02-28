<template>
    <ion-page>
      <ion-content :fullscreen="true" force-overscroll="false" scroll-x="true">
        <div class="grid-containerTablero" :class="currentState">
          <div class="grid-background"></div>
          <floatingMenu />
  
          <!-- Sliding Tab Menu -->
          <div class="sliding-menu" :class="{ 'menu-open': showMenu }">
            <div class="tab-container">
              <div 
                v-for="(tab, index) in tabs" 
                :key="index" 
                class="tab-item" 
                :class="{ active: currentTab === index }"
                @click="setCurrentTab(index)"
              >
                <div class="tab-content">{{ tab }}</div>
              </div>
              <div class="tab-item new-tab">
                <div class="tab-content">
                  +
                </div>
              </div>
            </div>
            <div class="menu-toggle" @click="toggleMenu">
              <ion-button fill="clear">
                <ion-icon :icon="menuOutline"></ion-icon>
              </ion-button>
            </div>
          </div>
  
          <!-- Middle div for Pestaña 3 -->
          <div v-if="currentTab === 2" class="soldado" @click="toggleSheet">
              
          </div>
  
          <!-- Sheet Overlay -->
          <div class="sheet-overlay" v-if="sheetVisible" @click.self="toggleSheet">
            <div class="sheet-content">
              <img src="@/assets/images/charSheet.png" alt="Sheet" class="sheet"/>
            </div>
          </div>
  
          <div class="dice-button">
            <ion-button fill="clear" class="dice-btn" @click="toggleWhiteOverlay">
              <img src="@/assets/images/dice.png" alt="dice" id="dice" />
            </ion-button>
          </div>
  
          <!-- Dice Selection Overlay -->
          <div class="dice-overlay" v-if="showWhiteOverlay">
            <div class="dice-square" @click.stop>
              <div class="dice-header">
                <h3>Select Dice</h3>
                <ion-button fill="clear" @click="toggleWhiteOverlay">
                  <ion-icon :icon="close"></ion-icon>
                </ion-button>
              </div>
              <div class="dice-selection">
                <div class="dice-row" v-for="(dice, index) in diceTypes" :key="index">
                  <div class="dice-type">
                    <ion-icon :icon="dice.icon"></ion-icon>
                    <span>{{ dice.name }}</span>
                  </div>
                  <div class="dice-numbers">
                    <div
                      class="dice-number"
                      v-for="num in [1, 2, 3, 4, 5, 6]"
                      :key="num"
                      @click="selectDice(dice.name, num)"
                    >
                      {{ num }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="overlay-background" @click="toggleWhiteOverlay"></div>
          </div>
  
          <!-- Dice Result Overlay -->
          <div class="dice-result-overlay" v-if="showDiceResultOverlay">
            <div class="dice-result-square" @click.stop>
              <div class="dice-result-header">
                <h3>Dice Roll Results</h3>
                <ion-button fill="clear" @click="closeDiceResultOverlay">
                  <ion-icon :icon="close"></ion-icon>
                </ion-button>
              </div>
              <div class="dice-result-content">
                <div v-for="(roll, index) in diceRolls" :key="index" :class="{ 'red-text': roll === 1 }">
                  {{ roll }}
                </div>
                <div class="green-text">Total: {{ totalRoll }}</div>
              </div>
            </div>
            <div class="overlay-background" @click="closeDiceResultOverlay"></div>
          </div>
  
          <div class="chat-button">
            <ion-button fill="clear" class="chat-btn" @click="toggleChat">
              <ion-icon :icon="chatbubbles"></ion-icon>
            </ion-button>
          </div>
          <div class="chat-overlay" v-if="showChat" @click="toggleChat">
            <div class="chat-container" @click.stop>
              <div class="chat-header">
                <h3>Chat</h3>
                <ion-button fill="clear" @click="toggleChat">
                  <ion-icon :icon="close"></ion-icon>
                </ion-button>
              </div>
              <div class="chat-messages">
                <div v-for="(message, index) in chatMessages" :key="index" class="chat-message">
                  {{ message }}
                </div>
              </div>
              <div class="chat-input">
                <ion-input 
                  v-model="newMessage" 
                  placeholder="Type a message..." 
                  class="message-input"
                  @keyup.enter="addMessage"
                ></ion-input>
                <ion-button @click="addMessage" class="send-button">
                  Send
                </ion-button>
              </div>
            </div>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
<script setup>
import { ref, computed } from 'vue';
import { IonPage, IonButton, IonIcon, IonInput, IonContent } from '@ionic/vue';
import { menu, chatbubbles, add, menuOutline, close, triangle, square, disc, ellipse, apps, stopwatch } from 'ionicons/icons';
import floatingMenu from '@/components/floatingMenu.vue';

const diceTypes = [
  { name: 'D4', icon: triangle },
  { name: 'D6', icon: square },
  { name: 'D8', icon: disc },
  { name: 'D10', icon: ellipse },
  { name: 'D12', icon: apps },
  { name: 'D20', icon: stopwatch },
  { name: 'D100', icon: stopwatch },
];

const showMenu = ref(false);
const showWhiteOverlay = ref(false);
const showChat = ref(false);
const showDiceResultOverlay = ref(false);
const diceRolls = ref([]);
const totalRoll = ref(0);
const chatMessages = ref([
  "Bienvenido a mi chat",
    "Yo creo que minimo esto se merece un 8",
    "Pero que se yo, soy un simple chat",
]);
const newMessage = ref('');
const currentTab = ref(0);
const tabs = ['Pestaña 1', 'Pestaña 2', 'Pestaña 3'];
const sheetVisible = ref(false);

const currentState = computed(() => {
  return `state-${currentTab.value + 1}`;
});

const toggleSheet = () => {
  sheetVisible.value = !sheetVisible.value;
};

const selectDice = (diceType, number) => {
  const diceMax = parseInt(diceType.substring(1)); 
  diceRolls.value = [];
  totalRoll.value = 0;

  for (let i = 0; i < number; i++) {
    const roll = Math.floor(Math.random() * diceMax) + 1;
    diceRolls.value.push(roll);
    totalRoll.value += roll;
  }

  showDiceResultOverlay.value = true;
};

const closeDiceResultOverlay = () => {
  showDiceResultOverlay.value = false;
};

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
  if (showMenu.value) {
    showWhiteOverlay.value = false;
    showChat.value = false;
  }
};

const toggleWhiteOverlay = () => {
  showWhiteOverlay.value = !showWhiteOverlay.value;
  if (showWhiteOverlay.value) {
    showMenu.value = false;
    showChat.value = false;
  }
};

const toggleChat = () => {
  showChat.value = !showChat.value;
  if (showChat.value) {
    showMenu.value = false;
    showWhiteOverlay.value = false;
  }
};

const addMessage = () => {
  if (newMessage.value.trim()) {
    chatMessages.value.push(newMessage.value);
    newMessage.value = '';
  }
};

const setCurrentTab = (index) => {
  currentTab.value = index;
};
</script>

<style scoped>
.grid-containerTablero {
  position: relative;
  width: 200vw;
  height: 200vh;
  overflow-x: auto;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  color: black;
  font-weight: bold;
}

#dice {
  width: 40px;
  height: 40px;
  margin-top: 0;
}

ion-page {
  --overflow: auto !important;
}

.grid-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#e5e5e5 1px, transparent 1px),
    linear-gradient(90deg, #e5e5e5 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: 0;
  background-color: white;
}

.grid-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-position: center;
}

.state-1 .grid-background::before {
  background-image: none;
}

.state-2 .grid-background::before {
  background-image: url('@/assets/images/camp.png');
}

.state-3 .grid-background::before {
  background-image: url('@/assets/images/inn.png');
}

.sheet-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}

.sheet-content {
  border-radius: 8px;
  padding: 20px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
}

.sheet {
  height: 300px;
  width: 231.819972856px;
}

.soldado {
  position: absolute;
  top: 73%;
  left: 26%;
  transform: translate(-50%, -50%);
  background-color: none;
  padding: 20px;
  border-radius: 10px;
  z-index: 10;
  background-image: url('@/assets/images/soldier.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.sliding-menu {
  position: fixed;
  top: -150px;
  left: 0;
  width: 100%;
  background-color: #777;
  border-radius: 0 0 15px 15px;
  z-index: 15;
  transition: top 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.menu-open {
  top: 0;
}

.tab-container {
  display: flex;
  justify-content: space-around;
  padding: 15px 10px;
}

.tab-item {
  background-color: #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  width: 22%;
  cursor: pointer;
}

.tab-item.active {
  background-color: #fff;
}

.tab-item.new-tab {
  background-color: #eee;
}

.tab-content {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: larger;
}

.new-tab {
  font-size: 30px;
}

.menu-toggle {
  display: flex;
  justify-content: center;
  background-color: #555;
  border-radius: 0 0 8px 8px;
  padding: 5px;
}

.dice-button {
  position: fixed;
  bottom: 80px;
  left: 20px;
  z-index: 10;
}

.dice-btn {
  --background: #d32f2f;
  --border-radius: 8px;
  --padding-start: 10px;
  --padding-end: 10px;
  --padding-top: 10px;
  --padding-bottom: 10px;
  --box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 50px;
  height: 50px;
}

.dice-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}

.dice-square {
  width: 90%;
  max-width: 400px;
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  z-index: 21;
  color: black;
}

.dice-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.dice-header h3 {
  margin: 0;
  font-size: 18px;
}

.dice-selection {
  max-height: 70vh;
  overflow-y: auto;
}

.dice-row {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
}

.dice-type {
  display: flex;
  align-items: center;
  width: 80px;
  font-weight: 500;
}

.dice-type ion-icon {
  margin-right: 8px;
  font-size: 20px;
}

.dice-numbers {
  display: flex;
  flex: 1;
  justify-content: space-around;
}

.dice-number {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.dice-number:hover {
  background-color: #f0f0f0;
}

.dice-result-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}

.dice-result-square {
  width: 90%;
  max-width: 400px;
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  z-index: 21;
  color: black;
}

.dice-result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.dice-result-header h3 {
  margin: 0;
  font-size: 18px;
}

.dice-result-content {
  max-height: 70vh;
  overflow-y: auto;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}

.overlay-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 19;
}

.chat-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10;
}

.chat-btn {
  --background: #d32f2f;
  --border-radius: 50%;
  --padding-start: 10px;
  --padding-end: 10px;
  --padding-top: 10px;
  --padding-bottom: 10px;
  --box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 60px;
  height: 60px;
}

.chat-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}

.chat-container {
  width: 80%;
  max-width: 400px;
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  z-index: 21;
  color: black;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.chat-messages {
  height: calc(100% - 120px);
  overflow-y: auto;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.chat-message {
  padding: 8px 12px;
  margin-bottom: 8px;
  background-color: #f1adad;
  border-radius: 8px;
  max-width: 80%;
}

.chat-input {
  display: flex;
  gap: 10px;
  padding: 10px 0;
}

.message-input {
  flex: 1;
  --background: #f0f0f0;
  --padding-start: 12px;
  --padding-end: 12px;
  --border-radius: 20px;
}

.send-button {
  --background: #d32f2f;
}

ion-icon {
  font-size: 24px;
}
</style>