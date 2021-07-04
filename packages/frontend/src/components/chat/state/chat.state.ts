import { proxy } from "../../../libs/proxy";
import { COMPONENT_TYPES } from "@chat-bot/types";

const chatState = proxy({
  components: [
    {
      own: true,
      props: {
        id: "42",
        value:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur autem, deleniti excepturi facere hic maiores optio placeat quisquam quos rerum saepe ut, voluptatibus. Ea facere iure quisquam rerum sed!",
      },
      type: COMPONENT_TYPES.TEXT_MESSAGE,
    },
    {
      own: false,
      props: { id: "1", value: "some" },
      type: COMPONENT_TYPES.TEXT_MESSAGE,
    },
    {
      own: true,
      props: { id: "42", value: "some" },
      type: COMPONENT_TYPES.TEXT_MESSAGE,
    },
  ],
});

export { chatState };
