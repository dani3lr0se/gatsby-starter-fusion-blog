import React from "react";
import styled from "styled-components";
import Image, { FixedObject } from "gatsby-image";

import { SiteSiteMetadataAuthor } from "graphql-types";
import { rhythm } from "../../utils/typography";
import { device } from "../../styles/constants";
import { useAvatar } from "../../hooks";

interface AboutProps {
  author: SiteSiteMetadataAuthor;
}

const About: React.FunctionComponent<AboutProps> = ({
  author,
}): React.ReactElement => {
  const avatar = useAvatar({ width: 200, height: 200 });

  return (
    <Root>
      <Avatar fixed={avatar.childImageSharp.fixed as FixedObject} />

      <Description>
        {/*<h4>Hey there my friend!</h4>*/}
        <p>
          My name is {author.firstname}. I'm a husband, stepdad, Navy veteran. I have experience in healthcare, law enforcement, and have been in IT for many years now. I decided to create this blog to share my story and experiences as I transition into information security. Information security is what I've always truly enjoyed and what I wish to pursue as a career and work in for many years to come. You'll see that I spend most of my free time lately trying to level up with new skills, etc., on sites like TryHackMe, HackTheBox, RangeForce, Cyberdefenders, etc.
        </p>

        <p>
          When I'm not learning new skills or studying for a certification, I enjoy collecting baseball cards, watching hockey, baseball, and Formula 1 racing with my family.
        </p>

        <p>
          If you want to connect with me, feel free to reach out on social media.
        </p>

        <p>
          You can also see what I'm up to on:
          <ul>
            <li>
            <a href="https://tryhackme.com/p/dani3lsan">TryHackMe</a>
            </li>
            <li>
            <a href="https://www.hackthebox.eu/profile/294702">HackTheBox</a>
            </li>
            <li>
            <a href="https://www.codecademy.com/profiles/Dani3lR0se">Codecademy</a>
            </li>
            <li>
            <a href="https://github.com/dani3lr0se">GitHub</a>
            </li>
          </ul>
        </p>
      </Description>
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-gap: ${rhythm(2)};
  margin-top: ${rhythm(0.5)};

  @media ${device.tablet} {
    grid-template-columns: minmax(20%, 200px) 70%;
  }
`;

const Avatar = styled(Image)`
  align-self: center;

  border-radius: 50%;
  width: 150px;
  height: 150px;
  justify-self: center;
  align-self: flex-start;

  @media ${device.tablet} {
    width: auto;
    height: auto;
    justify-self: start;
  }
`;

const Description = styled.section`
  h4 {
    margin-top: ${rhythm(0.5)};
  }
`;

export default About;
