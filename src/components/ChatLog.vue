<template>
  <section class="chat-log" ref="container">
    <message-bubble
      v-for="msg in messages"
      :key="msg.id"
      :message="msg"
      data-test="msg"
    ></message-bubble>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MessageBubble from "@/components/MessageBubble.vue";
import { MessageModel } from "@/types/Message.model";
import { FileModel } from "@/types/File.model";
import { PropType } from "@vue/runtime-core";

@Options({
  props: { messages: Array as PropType<(MessageModel | FileModel)[]> },
  components: { MessageBubble },
  watch: {
    messages: {
      deep: true,
      handler() {
        this.$nextTick(this.scrollToBottom);
      },
    },
  },
  mounted() {
    this.$nextTick(this.scrollToBottom);
  },
})
export default class ChatLog extends Vue {
  scrollToBottom(): void {
    const container: any = this.$refs.container;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }
}
</script>

<style scoped>
.chat-log {
  display: block;
  width: 100%;
  padding: 2% 4%;
  box-sizing: border-box;
  overflow-y: scroll;
  height: 100%;
}

.chat-log::-webkit-scrollbar {
  display: none;
}
</style>
