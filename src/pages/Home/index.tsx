import { Card, Head, Loading, Message, SearchBar } from "components";

import useGithubUser from "hooks/useGithubUser";

export default function Home() {
  const { storedUser, loading, message } = useGithubUser();

  return (
    <>
      <Head title="devFinder | Search" description="Search a github username" />
      <SearchBar />
      {loading ? (
        <Loading />
      ) : storedUser ? (
        <Card user={storedUser} />
      ) : (
        <Message text={message} />
      )}
    </>
  );
}
