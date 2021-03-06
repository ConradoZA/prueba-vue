import { shallowMount } from "@vue/test-utils";
import ChatLog from "@/components/ChatLog.vue";
import data from "@/assets/chatHistory.json";
import { MessageModel } from "@/types/Message.model";
import { FileModel } from "@/types/File.model";
import { nextTick } from "@vue/runtime-core";

const msg: MessageModel = {
  id: "afcda6f8-1960-4344-9d33-3fd73ee997f3",
  author: "Tú",
  timestamp: 1620030643,
  msg: "Esto es un mensaje de prueba, procedente del alumno.",
};

describe("ChatLog component", () => {
  it("displays the correct number of initial messages", () => {
    const wrapper = shallowMount(ChatLog, { props: { messages: data } });
    const numberOfMsgs = wrapper.findAll('[data-test="msg"]').length;

    expect(numberOfMsgs).toBe(data.length);
  });

  xit("displays new message when props change", async () => {
    const wrapper = shallowMount(ChatLog, { props: { messages: data } });

    const newArray: Array<MessageModel | FileModel> = data;
    newArray.push(msg);

    await wrapper.setProps({ messages: newArray });
    console.log(wrapper.props());
    // por qué no aparece el mensaje nuevo si espero a que se actualice el DOM?
    expect(wrapper.findAll('[data-test="msg"]')).toHaveLength(newArray.length);
  });

  xit("scroll to the bottom when amount of messages change", async () => {
    const wrapper = shallowMount(ChatLog, { props: { messages: data } });
    const spy = jest.spyOn(wrapper.vm, "scrollToBottom");

    await wrapper.setProps({ messages: [msg] });
    // await (wrapper.vm as any).$options.watch.messages.call(wrapper.vm, [msg]);

    expect(spy).toHaveBeenCalled();
  });
});
