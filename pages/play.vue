<script lang="ts" setup>
import similarity from "string-similarity";
definePageMeta({
  layout: "game",
});

let guessList = [
  "Bruce Lee",
  "Audrey Hepburn",
  "Catherine Deneuve",
  "Lily Collins",
  "Vin Diesel",
  "Vivien Leigh",
  "Alain Delon",
  "Courteney Cox",
  "Ewan McGregor",
  "Isabelle Adjani",
  "Isabelle Huppert",
  "Jean Paul Belmondo",
  "Lily Rose Depp",
  "Lino Ventura",
  "Marion Cotillard",
  "Romy Schneider",
  "Will Smith",
  "Ansel Elgort",
  "Ben Affleck",
  "Emily Ratajkowski",
  "Kirk Douglas",
  "Paul Walker",
  "Tom Cruise",
  "Virginie LeDoyen",
  "Clara",
  "James Stewart",
  "Sophia Loren"
];
let solution = ref(false);
let found = ref(false);

let currentguess = ref("");
let input = ref("");

function newguess() {
  found.value = false;
  solution.value = false;
  input.value = "";
  const random = Math.floor(Math.random() * guessList.length)
  currentguess.value = guessList[random];
  console.log(currentguess.value, guessList.length)
  guessList =  guessList.filter(e=>e!=guessList[random])
}

function guess() {
  console.log(input.value);
  const result = similarity.compareTwoStrings(
    currentguess.value.toLowerCase(),
    input.value.toLowerCase()
  );
  console.log(result)
  result >= 0.7 ? (found.value = true) : "";
  console.log(found.value)
  solution.value = true;
}

newguess();

function image() {
  return `/img/${currentguess.value.split(" ").join("").toLowerCase()}.jpg`;
}

function imageeyes() {
  return `/img/${currentguess.value.split(" ").join("").toLowerCase()}_eyes.jpg`;
}
</script>
<template>
  <div class="m-auto relative">
    <h1
      v-show="solution"
      class="text-white text-3xl mb-2 text-center font-bold animate__animated animate__fadeIn animate__slower"
    >
      {{found ? "✅" : "❌"}} {{ currentguess }} {{found ? "✅" : "❌"}}
    </h1>
    <ClientOnly>
      <div class="m-auto relative flex justify-center">
        <img class="relative rounded-md" :src="imageeyes()" alt="" />
        <img
          class="absolute top-0 opacity-0 rounded-md"
          :class="
            solution
              ? 'opacity-100  animate__animated animate__fadeIn animate__slower'
              : ''
          "
          :src="image()"
          alt=""
        />
      </div>
    </ClientOnly>
    <div class="-mt-24 absolute m-auto flex justify-center w-full" :class="solution ? 'mt-3' : ''">
      <div v-if="!solution" class="flex justify-center gap-2">
        <input
          v-model="input"
          type="text"
          placeholder="name..."
          class="px-2 text-sm py-1 rounded-lg border-4 border-sky-600 shadow-md shadow-sky-600/40 bg-white/30 placeholder:text-black placeholder:italic focus:ring-red-600 focus:outline-none"
        />
        <button
          @click="guess()"
          class="bg-sky-600 font-bold px-3 py-2 rounded-lg shadow-md shadow-sky-600/40 border-[1px] border-sky-300"
        >
          GUESS
        </button>
      </div>
      <div v-else class="flex justify-center">
        <button
          @click="newguess()"
          class="bg-white/70 text-lg font-bold px-4 py-1 rounded-lg shadow-md shadow-white/20 text-black"
        >
          SUIVANT
        </button>
      </div>
    </div>
  </div>
</template>
