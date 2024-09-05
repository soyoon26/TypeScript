import { Todo } from "../types";
interface Props extends Todo {
  onClickDelete: (id: number) => void;
} // 기본적으로 Todo의 props를 받게 됨
export default function TodoItem(props: Props) {
  const onClickButton = () => {
    props.onClickDelete(props.id);
  };
  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}
