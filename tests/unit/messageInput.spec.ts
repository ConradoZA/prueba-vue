import { shallowMount } from "@vue/test-utils";
import MessageInput from "@/components/MessageInput.vue";

describe("MessageInput component", () => {
  it("should render textarea and button", () => {
    const wrapper = shallowMount(MessageInput);
    const textArea = wrapper.find("textarea");
    const button = wrapper.find("button");

    expect(textArea.exists()).toBe(true);
    expect(button.exists()).toBe(true);
  });

  it("should emit custom event with a new message when button clicked", async () => {
    const msg: string = "Esto es un mensaje de prueba, procedente del alumno.";
    const wrapper = shallowMount(MessageInput);
    const textArea = wrapper.find("textarea");
    const button = wrapper.find("button");

    await textArea.setValue(msg);
    await button.trigger("submit");

    expect(wrapper.emitted()).toHaveProperty("addMsg");
    expect(wrapper.emitted().addMsg[0]).toEqual([
      expect.objectContaining({ msg: msg }),
    ]);
  });

  it("should emit custom event with a new message when pressed enter", async () => {
    const msg: string = "Esto es un mensaje de prueba, procedente del alumno.";
    const wrapper = shallowMount(MessageInput);
    const textArea = wrapper.find("textarea");

    await textArea.setValue(msg);
    await textArea.trigger("keydown.enter");

    expect(wrapper.emitted()).toHaveProperty("addMsg");
    expect(wrapper.emitted().addMsg[0]).toEqual([
      expect.objectContaining({ msg: msg }),
    ]);
  });

  it("should emit custom event with new FILE when file button clicked", async () => {
    const msg: string = "nombre_archivo";
    const wrapper = shallowMount(MessageInput);
    const button = wrapper.find('[data-test="upload"]');
    const textArea = wrapper.find("textarea");

    await textArea.setValue(msg);
    await button.trigger("click");

    expect(wrapper.emitted()).toHaveProperty("addMsg");
    expect(wrapper.emitted().addMsg[0]).toEqual([
      expect.objectContaining({ title: msg }),
    ]);
  });
});
