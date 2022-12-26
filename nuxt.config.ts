// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/css/style.css"],
  modules: ["@nuxtjs/supabase"],
});
buildModules: ["@nuxt/postcss8"];
