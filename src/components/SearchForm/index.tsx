import { MagnifyingGlass } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

import useGithubUser from "hooks/useGithubUser";

import { Form } from "./styles";

export default function SearchForm() {
  const [value, setValue] = useState("");

  const { searchGithubUser } = useGithubUser();

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  const handleSearchUser = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    searchGithubUser(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSearchUser} aria-label="Search a GitHub username">
      <MagnifyingGlass size={20} />
      <input
        type="search"
        placeholder="Search GitHub username..."
        onChange={onChange}
        value={value}
      />
      <button type="submit">Search</button>
    </Form>
  );
}
