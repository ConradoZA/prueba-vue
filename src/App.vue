<template>
  <ChatWindow></ChatWindow>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChatWindow from "./components/ChatWindow.vue";

@Options({
  components: {
    ChatWindow,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  all: unset;
}
</style>
