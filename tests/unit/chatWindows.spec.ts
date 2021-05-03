import { shallowMount } from "@vue/test-utils";
import ChatWindow from "@/components/ChatWindow.vue";
import ChatLog from "@/components/ChatLog.vue";
import MessageInput from "@/components/MessageInput.vue";
import { MessageModel } from "@/types/Message.model";
import { nextTick } from "@vue/runtime-core";

const msg: MessageModel = {
  id: "afcda6f8-1960-4344-9d33-3fd73ee997f3",
  author: "Tú",
  timestamp: 1620030643,
  msg: "Esto es un mensaje de prueba, procedente del alumno.",
};

describe("ChatWindow component", () => {
  it("should have title, log and input", () => {
    const wrapper = shallowMount(ChatWindow);
    const log = wrapper.findComponent(ChatLog);
    const input = wrapper.findComponent(MessageInput);

    expect(wrapper.find("h1").text()).toContain("Conversación con");
    expect(log).toBeTruthy();
    expect(input).toBeTruthy();
  });

  it("should add a message when receive addMsg custom event", () => {
    const wrapper = shallowMount(ChatWindow);

    wrapper.findComponent(MessageInput).vm.$emit("addMsg", msg);

    expect(wrapper.vm.messages).toHaveLength(8);
  });
});
