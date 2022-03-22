import HelloWorld from "../components/HelloWorld.vue";

export default {
  title: "Example/HelloWorld",
  component: HelloWorld,
  argTypes: {},
};

const Template = (args: string) => ({
  components: { HelloWorld },
  setup() {
    return { args };
  },
  template: "<hello-world />",
});

export const Primary = Template.bind({});
