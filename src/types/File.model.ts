import { uuid } from "vue-uuid";

export class FileModel {
  id: string;
  author: string | null;
  version: number | null;
  fileName: string | null;
  type: string | null;
  timestamp: number | null;
  link: string | null;

  constructor() {
    this.id = uuid.v4();
    this.author = null;
    this.version = null;
    this.fileName = null;
    this.type = null;
    this.timestamp = null;
    this.link = null;
  }
}
