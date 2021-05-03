import { uuid } from "vue-uuid";

export class FileModel {
  id: string;
  author: string | null;
  version: number | null;
  title: string | null;
  extension: string | null;
  timestamp: number | null;
  link: string | null;

  constructor() {
    this.id = uuid.v4();
    this.author = null;
    this.version = null;
    this.title = null;
    this.extension = null;
    this.timestamp = null;
    this.link = null;
  }
}
