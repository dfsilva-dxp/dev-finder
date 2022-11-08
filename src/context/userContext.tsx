import usePersistedState from "hooks/usePersistedState";
import { createContext, ReactNode, useCallback, useState } from "react";

import api from "services/api";

export interface IUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

interface IUserProviderProps {
  children: ReactNode;
}

interface IUSerCOntextData {
  searchGithubUser: (username: string) => Promise<void>;
  clearUser: () => void;
  storedUser: IUser | null;
  loading: boolean;
  hasUser: boolean;
  message: string;
}

export const UserContext = createContext({} as IUSerCOntextData);

export function UserProvider({ children }: IUserProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Pesquise por um usuário!");
  const hasUser = !!user;

  const [storedUser, setStoredUser] = usePersistedState<IUser | null>(
    "user",
    user
  );

  const searchGithubUser = useCallback(
    async (username: string) => {
      try {
        setLoading(true);
        const response = await api.get(username).then(({ data }) => data);

        if (response) {
          setUser(response);
          setStoredUser(response);
        }
      } catch {
        setMessage(
          "Ops... Não encontramos o username pesquisado. Tente fazer uma nova pesquisa :)"
        );
        setUser(null);
      } finally {
        setLoading(false);
      }
    },
    [setStoredUser]
  );

  const clearUser = useCallback(() => {
    setUser(null);
    setStoredUser(null);
    setMessage("Pesquise por um usuário!");
  }, [setStoredUser]);

  return (
    <UserContext.Provider
      value={{
        searchGithubUser,
        clearUser,
        storedUser,
        loading,
        hasUser,
        message
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
