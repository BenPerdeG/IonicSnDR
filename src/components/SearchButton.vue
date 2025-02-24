<template>
    <div>
      <!-- Wrap the icon with a router-link component -->
      <router-link to="/search">
        <i class="fa fa-search" aria-hidden="true"></i> <!-- Font Awesome icon -->
      </router-link>
    </div>
  </template>
  
  <script setup>
  // No additional imports needed if you're using the CDN or npm version for Font Awesome
  </script>
  
  <style>
    i {
      font-size: 30px;
      color: #000;
    }
  </style>
  