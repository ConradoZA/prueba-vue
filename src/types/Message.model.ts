import { uuid } from "vue-uuid";

export class MessageModel {
  id: String;
  author: String | null;
  timestamp: String | null;
  msg: String | null;

  constructor() {
    this.id = uuid.v4();
    this.author = null;
    this.timestamp = null;
    this.msg = null;
  }
}
