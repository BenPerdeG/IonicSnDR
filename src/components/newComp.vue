<template>
   
</template>
  
<script>
import { ref, computed } from 'vue';

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOverlayOpen = ref(false);

    const toggleOverlay = () => {
      isOverlayOpen.value = !isOverlayOpen.value;
    };

    const overlayStyle = computed(() => {
      return {
        background: isOverlayOpen.value ? 'rgba(0, 0, 0, 0.5)' : '#f0f0f0', // Change background when overlay content is open
      };
    });

    return {
      isOverlayOpen,
      toggleOverlay,
      overlayStyle,
    };
  },
};
</script>

<style scoped>
/* Full-screen overlay background */

</style>
  