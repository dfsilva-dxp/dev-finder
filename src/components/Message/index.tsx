import { Wrapper } from "./styles";
import { IMessageProps } from "./types";

export default function Message({ text }: IMessageProps) {
  return <Wrapper>{text}</Wrapper>;
}
