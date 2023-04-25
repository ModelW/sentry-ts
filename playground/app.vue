<template>
  <div>
    Nuxt module playground!
    <button @click="throwError">Throw an error</button>
  </div>
</template>

<script setup>
function throwError() {
  throw new Error("Oh no");
}
</script>
