<template>
  <div v-if="!!message.version" class="file-bubble">
    <hr />
    <div class="flex">
      <div>
        <span>
          <b>VERSIÓN {{ message.version }}</b>
        </span>
        <br />
        <span>{{ message.title }}.{{ message.extension }}</span>
        <br />
        <span>
          <i>{{ date }}</i>
        </span>
      </div>

      <div>
        <a :href="message.link">
          <font-awesome-icon
            :icon="download"
            size="3x"
            color="#6ca0db"
          ></font-awesome-icon>
        </a>
      </div>
    </div>
    <hr />
  </div>

  <div v-else class="message-bubble" :class="me">
    <span class="from" :class="me">{{ message.author }}</span>
    <span class="from" :class="notMe">{{ date }}</span>
    <br />
    <span class="message-text">{{ message.msg }}</span>
  </div>
</template>

<script lang="ts">
import { FileModel } from "@/types/File.model";
import { MessageModel } from "@/types/Message.model";
import { PropType } from "@vue/runtime-core";
import { Options, Vue } from "vue-class-component";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";

@Options({
  props: {
    message: Object as PropType<MessageModel | FileModel>,
  },
  components: { FontAwesomeIcon },
  computed: {
    me() {
      let result = false;
      if (this.message.author === "Tú") {
        result = true;
      }
      return result ? "me" : "";
    },
    notMe() {
      let result = false;
      if (this.message.author === "Tú") {
        result = true;
      }
      return result ? "" : "me";
    },
    date() {
      const date = new Date(this.message.timestamp);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hour = date.getHours();
      const min = date.getMinutes();

      return `${day}-${month}-${year} ${hour}:${min}`;
    },
  },
})
export default class MessageBubble extends Vue {
  download = faCloudDownloadAlt;
  message!: MessageModel | FileModel;
}
</script>

<style scoped>
.file-bubble {
  display: block;
  width: 100%;
  margin-bottom: 4px;
  float: left;
  clear: both;
}
.flex {
  display: flex;
  justify-content: space-around;
}

.message-bubble {
  display: block;
  max-width: 50%;
  margin-bottom: 4px;
  float: left;
  clear: both;
}

.message-text {
  padding: 8px;
  margin: 5px;
  text-align: left;
  background-color: #dfdfdf;
  border-radius: 10px;
  font-family: Helvetica;
}

.message-bubble.me {
  float: right;
}

.message-bubble.me .message-text {
  background-color: #9ec6f5;
}

.from {
  float: left;
  margin: 5px;
  font-size: 0.8rem;
  color: #9da7af;
}

.from.me {
  float: right;
  color: #6ca0db;
}

.message-bubble span {
  display: block;
}
</style>
