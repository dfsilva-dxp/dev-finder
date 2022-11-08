import { Card, Loading, Message, SearchForm } from "components";

import useGithubUser from "hooks/useGithubUser";

export default function Home() {
  const { storedUser, loading, message } = useGithubUser();
  return (
    <>
      <SearchForm />
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
