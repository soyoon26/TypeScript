import React, { ReactElement, useState } from "react";

interface Props {
  onClickAdd: (text: string) => void; // 반환하지 않는 함수
  children: ReactElement;
}

export default function Editor(props: Props) {
  // 받는 props 설정
  const [text, setText] = useState(""); // 초기값으로 뭐라도 전달하는게 낫다.
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onClickAddButton = () => {
    props.onClickAdd(text);
    setText("");
  };
  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickAddButton}>추가</button>
    </div>
  );
}
