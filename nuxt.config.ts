// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts", "@kevinmarrec/nuxt-pwa"],
  googleFonts: {
    families: {
      Inter: true,
    },
    preconnect: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css", "animate.css/animate.min.css"],
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      title: "FaceFinder 👀",
    },
  },
  routeRules: {
    "/play": { ssr: false },
  },
});
