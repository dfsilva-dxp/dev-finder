import { Buildings, LinkSimple, MapPinLine, TwitterLogo } from "phosphor-react";

import Avatar from "components/Avatar";

import {
  Bio,
  Content,
  CountDisplay,
  Counters,
  Footer,
  UserInfo,
  Username
} from "./styles";

export default function Card() {
  return (
    <Content>
      <Avatar url_img="https://avatars.githubusercontent.com/u/16245261?v=4" />

      <UserInfo>
        <Username>
          <div>
            <h1>Daniel Silva</h1>
            <a href="/link">dfsilva-dxp</a>
          </div>
          <p>Joined 2 Fev 2020</p>
        </Username>

        <Bio role="dialog" aria-labelledby="user-bio">
          <p id="user-bio">Lorem ipsum dolor sit amet, consectetur adipis</p>
        </Bio>

        <Counters>
          <CountDisplay>
            <strong>Repos</strong>
            <span>9</span>
          </CountDisplay>
          <CountDisplay>
            <strong>Followers</strong>
            <span>59</span>
          </CountDisplay>
          <CountDisplay>
            <strong>Following</strong>
            <span>43</span>
          </CountDisplay>
        </Counters>

        <Footer>
          <div>
            <span>
              <MapPinLine size={18} /> Suzano - SP
            </span>
            <span>
              <LinkSimple size={18} /> www.dfsilva.dev
            </span>
          </div>
          <div>
            <span>
              <TwitterLogo size={18} /> dfsilva.dxp
            </span>
            <span>
              <Buildings size={18} /> GWCloud
            </span>
          </div>
        </Footer>
      </UserInfo>
    </Content>
  );
}
