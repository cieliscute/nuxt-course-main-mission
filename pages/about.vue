<script setup lang="ts">
import {ref} from 'vue';
const a=ref(true);

// definePageMeta({
//   layout: a.value ? 'default': 'another'
// })
definePageMeta( {
  layout:'another'
} )

</script>

<template>
  <div>
    Page: about頁面!
  </div>
</template>

<style scoped></style>
