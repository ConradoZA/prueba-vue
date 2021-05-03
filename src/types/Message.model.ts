import { uuid } from "vue-uuid";

export class MessageModel {
  id: string;
  author: string | null;
  timestamp: number | null;
  msg: string | null;

  constructor() {
    this.id = uuid.v4();
    this.author = null;
    this.timestamp = null;
    this.msg = null;
  }
}
