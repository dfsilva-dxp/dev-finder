import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";

import { BreadcrumbWrapper, Disabled } from "./styles";

export default function Breadcrumb() {
  return (
    <BreadcrumbWrapper>
      <Link to="/">
        <span>Home</span>
      </Link>

      <CaretRight size={16} />

      <Disabled>Repositories</Disabled>
    </BreadcrumbWrapper>
  );
}
