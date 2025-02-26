<template>
  <ion-modal :is-open="isOpen" @didDismiss="close" class="custom-modal">
    <ion-content class="ion-padding">
      <div class="news-overlay">
        <h2 v-if="news" class="news-title">{{ news.title }}</h2>
        <p v-if="news" class="news-full-text">{{ news.fullText }}</p>
        <ion-button @click="close" expand="block" color="danger">Close</ion-button>
      </div>
    </ion-content>
  </ion-modal>
</template>

<script setup lang="ts">
import { IonModal, IonContent, IonButton } from '@ionic/vue';

interface NewsItem {
  title: string;
  text: string;
  fullText: string;
}

defineProps<{
  news: NewsItem | null;
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const close = () => {
  emit('close');
};
</script>
<style scoped>
/* Ensure the modal's background is transparent */
.custom-modal {
  --background: rgba(0, 0, 0, 0.5); /* Modal background semi-transparent */
  --ion-background-color: rgba(0, 0, 0, 0.5); /* Fallback for background color */
}

/* News overlay styles */
.news-overlay {
  margin-top: 40%;
  margin-left: 2.5%;
  display: flex;
  flex-direction: column;
  width: 357px;
  height: 397px;
  padding: 11px 29px 0px 28px;
  justify-content: center; /* Centers content vertically */
  align-items: center;    /* Centers content horizontally */
  background: #535050; /* Opaque background for the overlay */
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2); /* Optional shadow for better visibility */
}

/* Targeting the modal's shadow DOM background */
.custom-modal::part(overlay) {
  background: rgba(0, 0, 0, 0.5); /* Set the semi-transparent background */
}

/* Ensure host is styled correctly without overriding issues */
:host(.custom-modal) {
  --background: rgba(0, 0, 0, 0.5); /* Modal background transparency */
}

/* Other styles */
.news-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-decoration: underline;
  color: #ffffff;
}

.news-full-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
  overflow-y: auto;
}
</style>
