import { Card, Loading, Message, SearchForm } from "components";

import useGithubUser from "hooks/useGithubUser";

export default function Home() {
  const { user, loading, message } = useGithubUser();
  return (
    <>
      <SearchForm />
      {loading ? (
        <Loading />
      ) : user ? (
        <Card user={user} />
      ) : (
        <Message text={message} />
      )}
    </>
  );
}
