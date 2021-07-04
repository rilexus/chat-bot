import React, { FC } from "react";
import { Board, BoardComponentType, COMPONENT_TYPES } from "./components";
import { BoardInput } from "./components/board-input/BoardInput";
import { useChatState } from "./state/hooks/use-chart-state";
import { withMessageClient } from "../../clients/message-client/HOCs/with-message-client/withMessageClient";

enum MESSAGE_ACTION_TYPES {
  SEND_MESSAGE = "[MESSAGE_ACTION_TYPES]:SEND_MESSAGE",
}

type Action = {
  type: string;
  payload: {
    [key: string]: any;
  };
};

const dispatchSendMessageAction = (
  dispatch: (action: Action) => void,
  message: string
) => {
  return dispatch({
    type: MESSAGE_ACTION_TYPES.SEND_MESSAGE,
    payload: {
      message: message,
    },
  });
};

const Chat_: FC<{
  components: BoardComponentType[];
  dispatch: (action: Action) => void;
}> = ({ components, dispatch }) => {
  return (
    <div>
      <div>
        <Board boardComponents={components} />
      </div>
      <div>
        <BoardInput
          onSend={(message) => {
            dispatchSendMessageAction(dispatch, message);
          }}
        />
      </div>
    </div>
  );
};

const Chat = withMessageClient(
  ({ sendMessage }: { sendMessage: (message: string) => Promise<any> }) => {
    const state = useChatState();

    const dispatch = (action: {
      type: string;
      payload: { [key: string]: any };
    }) => {
      const { type, payload } = action;

      if (type === MESSAGE_ACTION_TYPES.SEND_MESSAGE) {
        sendMessage(payload.message)
          .then((res) => res.json())
          .then((data) => {
            state.components = [
              ...state.components,
              {
                own: false,
                props: { id: "22", value: data.message },
                type: COMPONENT_TYPES.TEXT_MESSAGE,
              },
            ];
          });
      }
    };

    return <Chat_ components={state.components} dispatch={dispatch} />;
  }
);

export { Chat };
