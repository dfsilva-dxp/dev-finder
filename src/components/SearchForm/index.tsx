import { MagnifyingGlass } from "phosphor-react";
import { ChangeEvent, useState } from "react";

import { Form } from "./styles";

export default function SearchForm() {
  const [value, setValue] = useState("");

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return (
    <Form>
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
