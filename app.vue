<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

body,
html {
  margin: 0;
  padding: 0;
}

body {
  /* background-color: #1a101f; */
  background-color: #1c1c1c;
  color: white;
  font-family: "Inter";
}

:root {
  color-scheme: dark;
}
</style>
