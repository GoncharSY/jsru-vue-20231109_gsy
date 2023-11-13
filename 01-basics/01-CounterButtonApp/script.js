import { createApp } from './vendor/vue.esm-browser.js';

createApp({
  data() {
    return {
      counter: 0
    };
  },

  methods: {
    onClick() {
      this.counter++;
    }
  }
}).mount("#app");
