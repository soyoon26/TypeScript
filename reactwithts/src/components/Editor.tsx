import React, { ReactElement, useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

interface Props {
  children: ReactElement;
}

export default function Editor(props: Props) {
  const dispatch = useTodoDispatch();
  const [text, setText] = useState(""); // 초기값으로 뭐라도 전달하는게 낫다.
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onClickAddButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };
  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickAddButton}>추가</button>
    </div>
  );
}
