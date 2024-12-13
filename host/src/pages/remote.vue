<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const RemoteMFE = defineAsyncComponent(
  // @ts-ignore
  () => import("remote/remote-app")
);
</script>

<template>
  <router-link to="/">Home</router-link>
  <RemoteMFE v-if="!!RemoteMFE" />
</template>
