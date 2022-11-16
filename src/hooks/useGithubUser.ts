import { useContext } from "react";

import { UserContext } from "context/userContext";

const useGithubUser = () => useContext(UserContext);

export default useGithubUser;
