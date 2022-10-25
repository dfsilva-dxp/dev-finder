import { Wrapper } from "./styles";
import { IButtonProps } from "./types";

export default function Button({
  icon,
  children = "Button",
  ...props
}: IButtonProps) {
  return (
    <Wrapper {...props}>
      {children}
      {!!icon && icon}
    </Wrapper>
  );
}
