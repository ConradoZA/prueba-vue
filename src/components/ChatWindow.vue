<template>
  <section class="chat-container">
    <div class="heading">
      <h1>Conversación con {{ teacher }}</h1>
    </div>
    <div class="body">
      <div class="table">
        <chat-log style="height: 88%" :messages="messages"></chat-log>
        <message-input @addMsg="addMessage"></message-input>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { MessageModel } from "@/types/Message.model";
import { FileModel } from "@/types/File.model";
import { Options, Vue } from "vue-class-component";
import data from "../assets/chatHistory.json";
import ChatLog from "@/components/ChatLog.vue";
import MessageInput from "@/components/MessageInput.vue";

@Options({
  created() {
    this.teacher = this.messages.find(
      (msg: MessageModel | FileModel) => msg.author !== "Tú"
    ).author;
  },
  components: {
    ChatLog,
    MessageInput,
  },
})
export default class ChatWindow extends Vue {
  public messages: (MessageModel | FileModel)[] = data;
  public teacher = "";

  addMessage(newMsg: MessageModel | FileModel): void {
    this.messages.push(newMsg);
  }
}
</script>

<style scoped>
.chat-container {
  display: table;
  width: 60vw;
  max-width: 800px;
  height: 80vh;
  margin: 5vh auto;
  background-color: #ffffff;
  border: solid 1px #bfbfbf;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 5px 8px 3px rgba(0, 0, 0, 0.35);
}

.heading {
  display: table;
  width: 100%;
  height: 4rem;
  text-align: center;
  background-color: #fffeee;
  border-radius: 5px;
  user-select: none;
  background: linear-gradient(#fffffa 0%, #e0debc 75%);
}

.body {
  display: block;
  width: auto;
  height: 100%;
  overflow: hidden;
}

.table {
  display: table;
  width: 100%;
  height: 80vh;
}
</style>
