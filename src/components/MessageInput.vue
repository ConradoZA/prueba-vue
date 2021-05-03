<template>
  <hr />
  <form class="flex" @submit.prevent="submitMessage">
    <textarea
      class="message-input"
      autofocus
      placeholder="Todavía no has escrito nada..."
      @keydown.enter="submitMessage"
      v-model="text"
    ></textarea>
    <button type="submit" class="button">
      <font-awesome-icon
        :icon="send"
        size="2x"
        color="#6ca0db"
      ></font-awesome-icon>
    </button>
    <button @click="uploadFile" class="button" data-test="upload">
      <font-awesome-icon
        :icon="upload"
        size="2x"
        color="#6ca0db"
      ></font-awesome-icon>
    </button>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlay, faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { MessageModel } from "@/types/Message.model";
import { FileModel } from "@/types/File.model";

@Options({
  components: { FontAwesomeIcon },
  emits: ["addMsg"],
})
export default class MessageInput extends Vue {
  send = faPlay;
  upload = faFileUpload;
  text = "";
  version = 0;

  submitMessage(event: KeyboardEvent | MouseEvent): void {
    // Shift para cambio de línea, NO mandar
    if (event.shiftKey) {
      return;
    }
    event.preventDefault();

    // NO mandar si no se ha escrito nada o sólo espacios
    if (this.text.trim().length !== 0) {
      const newMsg = new MessageModel();
      newMsg.author = "Tú";
      newMsg.timestamp = new Date().getTime();
      newMsg.msg = this.text;

      this.text = "";
      this.$emit("addMsg", newMsg);
    }
  }

  uploadFile(): void {
    this.version++;
    const newFile = new FileModel();
    newFile.author = "Tú";
    newFile.version = this.version;
    newFile.title = this.text || "prueba";
    newFile.extension = "pdf";
    newFile.timestamp = new Date().getTime();
    newFile.link = "http://temp.localhost.com";

    this.text = "";
    this.$emit("addMsg", newFile);
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
}
.message-input {
  resize: none;
  width: 80%;
  font-family: Helvetica;
  padding: 0.375rem 0.75rem;
  display: block;
  border: 1px solid #125dad;
  border-radius: 1rem;
}
.message-input:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.2);
}

.button {
  all: unset;
  padding-left: 1rem;
}
</style>
