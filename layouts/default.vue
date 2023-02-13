<script setup lang="ts">
import dayjs from "dayjs";

let time = ref("")

function getTime(){
  time.value = dayjs().format('HH:MM:ss')
  return time
}

const Interval = setInterval(getTime,1000);
</script>
<template>
  <div class="flex flex-col h-[100vh] bgimage">
    <header
      ref="target"
      class="fixed top-0 left-0 right-0 z-10 m-auto px-3 py-1 bg-[#1C1C1C]/80 backdrop-blur-[3px] shadow-md shadow-black/30 border-b-[1px] border-white/30"
    >
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold text-white/90">FaceFinder</NuxtLink>
        <ClientOnly>
          <p class="animate__animated animate__fadeIn">{{ time }}</p>
        </ClientOnly>
      </div>
    </header>
    <main class="m-auto w-[95%]">
      <slot></slot>
    </main>
    <footer class="w-full">
      <p class="text-xs text-white/30 text-center pb-2">
        Par Matéo pour Clara - 14 février 2023
      </p>
    </footer>
  </div>
</template>

<style scoped>
.bgimage {
  /* background-color: #1a101f; */
  background-image: url("../assets/cary.jpg");
  background-position: 60% 0%;
  background-size: 220%;
  color: white;
  font-family: "Inter";
  position: relative;
}
</style>
