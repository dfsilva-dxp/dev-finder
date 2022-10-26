import { Container } from "./styles";
import { IAvatarProps } from "./types";

export default function Avatar({ url_img }: IAvatarProps) {
  return (
    <Container>
      <img src={url_img} alt="User Avatar" title="User Avatar" />
    </Container>
  );
}
