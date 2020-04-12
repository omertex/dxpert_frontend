import React from "react";
import * as Styled from "./styled";

export const OpenedContainer = ({ name, children }) => (
  <Styled.Section>
    <Styled.SectionName>{name}</Styled.SectionName>
    {children}
  </Styled.Section>
);

export const OpenedInfo = ({ title, description, children }) => (
  <Styled.Info>
    <Styled.Title>{title}</Styled.Title>
    <Styled.Description>{description}</Styled.Description>
    {children}
  </Styled.Info>
);

export const OpenedAboutMe = ({ description }) => (
  <Styled.Info>
    <Styled.AboutMe>{description}</Styled.AboutMe>
  </Styled.Info>
);

export const OpenedTags = ({ description }) => (
  <Styled.Info>
    {description.length ? (
      description.map((tag) => <Styled.Tag key={tag}>{tag}</Styled.Tag>)
    ) : (
      <Styled.Tag>Is empty</Styled.Tag>
    )}
  </Styled.Info>
);

export const OpenedEducation = ({ children }) => (
  <Styled.EducationInfo>{children}</Styled.EducationInfo>
);
