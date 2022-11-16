import { Link } from "react-router-dom";
import { CaretRight } from "phosphor-react";

import { BreadcrumbsWrapper, Disabled } from "./styles";

import { IBreadcrumbsProps } from "./type";

export default function Breadcrumbs({ pageName }: IBreadcrumbsProps) {
  return (
    <BreadcrumbsWrapper>
      <Link to="/">
        <span>Home</span>
      </Link>

      {pageName && (
        <>
          <CaretRight size={16} />
          <Disabled>{pageName}</Disabled>
        </>
      )}
    </BreadcrumbsWrapper>
  );
}
