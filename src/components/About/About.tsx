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
          My name is {author.firstname}. I'm a Navy veteran, husband, and stepdad.
          I'm a former law enforcement officer, computer tech, and web developer.
          My passion is in cybersecurity. It's what I've always truly enjoyed and
          I'm always using my free time to learn.
        </p>

        <p>
          When I'm not hacking on TryHackMe or HackTheBox I enjoy collecting sports cards,
          getting in a good workout, or just spending time with my family watching good 
          shows or movies.
        </p>

        <p>
          If you want to find out more about me feel free to reach out on social
          media.
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
