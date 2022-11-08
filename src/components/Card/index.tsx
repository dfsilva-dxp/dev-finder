import { NavLink } from "react-router-dom";
import {
  Buildings,
  LinkSimple,
  MapPinLine,
  TwitterLogo,
  X
} from "phosphor-react";

import useGithubUser from "hooks/useGithubUser";

import Avatar from "components/Avatar";

import {
  Bio,
  Content,
  CountDisplay,
  Counters,
  Footer,
  Cover,
  UserInfo,
  CloseButton,
  Body
} from "./styles";
import { ICardProps } from "./types";

export default function Card({ user }: ICardProps) {
  const { clearUser } = useGithubUser();

  function handleClearUser() {
    clearUser();
  }

  return (
    <Content>
      <Cover>
        <CloseButton onClick={handleClearUser}>
          <X size={18} />
        </CloseButton>

        <Avatar url_img={user?.avatar_url} />

        <UserInfo>
          <h1>{user?.name}</h1>
          <a href={user?.html_url}>{user?.login}</a>
          <small>Joined 2 Fev 2020</small>
        </UserInfo>

        <Counters>
          <CountDisplay>
            <NavLink to={`/${user?.login}`}>
              <span>Repos</span>
              <span>{user?.public_repos}</span>
            </NavLink>
          </CountDisplay>
          <CountDisplay>
            <span>Followers</span>
            <span>{user?.followers}</span>
          </CountDisplay>
          <CountDisplay>
            <span>Following</span>
            <span>{user?.following}</span>
          </CountDisplay>
        </Counters>
      </Cover>

      <Body>
        <Bio role="dialog" aria-labelledby="user-bio">
          <h4>Bio</h4>
          <p id="user-bio">{user?.bio}</p>
        </Bio>

        <Footer>
          <div>
            <span>
              <MapPinLine size={18} /> {user?.location}
            </span>
            <span>
              <LinkSimple size={18} /> {user?.blog}
            </span>
          </div>
          <div>
            <span>
              <TwitterLogo size={18} /> {user?.twitter_username}
            </span>
            <span>
              <Buildings size={18} /> {user?.company}
            </span>
          </div>
        </Footer>
      </Body>
    </Content>
  );
}
