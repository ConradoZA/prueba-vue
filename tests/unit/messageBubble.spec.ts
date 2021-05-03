import { shallowMount } from "@vue/test-utils";
import MessageBubble from "@/components/MessageBubble.vue";
import { MessageModel } from "@/types/Message.model";
import { FileModel } from "@/types/File.model";

const msg1: MessageModel = {
  id: "afcda6f8-1960-4344-9d33-3fd73ee997f3",
  author: "Tú",
  timestamp: 1620030643,
  msg: "Esto es un mensaje de prueba, procedente del alumno.",
};
const msg2: MessageModel = {
  id: "04493b94-83c0-433d-8975-a83eaedfb64d",
  author: "Otros",
  timestamp: 1620031008,
  msg: "Esto es otro mensaje de prueba, procedente del profesor.",
};
const file: FileModel = {
  id: "e025e09e-e146-4103-b684-f3c1b0db7b60",
  author: "Tú",
  version: 1,
  title: "prueba",
  extension: "png",
  timestamp: 1620030643,
  link: "http://prueba.com",
};

describe("MessageBubble component", () => {
  describe("renders a message when given a text type", () => {
    it("is to the right if its from you", () => {
      const wrapper = shallowMount(MessageBubble, {
        props: { message: msg1 },
      });

      expect(wrapper.find("div").classes()).toContain("me");
    });

    it("is to the left if it isn't from you", () => {
      const wrapper = shallowMount(MessageBubble, {
        props: { message: msg2 },
      });

      expect(wrapper.find("div").classes()).not.toContain("me");
    });

    it("displays the right info", () => {
      const wrapper = shallowMount(MessageBubble, {
        props: { message: msg1 },
      });
      const author = wrapper.find(".from.me");
      const date = wrapper.find(".from:not(.me)");
      const message = wrapper.find(".message-text");

      expect(author.text()).toBe(msg1.author);
      expect(message.text()).toBe(msg1.msg);
      expect(date.text()).toBe(wrapper.vm.date);
    });
  });

  describe("renders a notification when given a file type", () => {
    it("displays de right info", () => {
      const wrapper = shallowMount(MessageBubble, {
        props: { message: file },
      });

      const version = wrapper.find("b");
      const archive = wrapper.find(
        "div.flex div:first-child span:nth-child(3)"
      );
      const date = wrapper.find("i");
      const link = wrapper.find("a");

      expect(version.text()).toBe("VERSIÓN " + file.version);
      expect(archive.text()).toBe(file.title + "." + file.extension);
      expect(date.text()).toBe(wrapper.vm.date);
      expect(link.attributes().href).toBe(file.link);
    });
  });
});
