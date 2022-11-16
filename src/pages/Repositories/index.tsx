// import { useParams } from "react-router-dom";

import { Breadcrumbs, Head, RepositoriesList } from "components";

export default function Repositories() {
  // const { id } = useParams();
  const pageName = document.title;

  return (
    <>
      <Head title="Repositories" description="Repositories list" />
      <Breadcrumbs pageName={pageName} />
      <RepositoriesList />
    </>
  );
}
