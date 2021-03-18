import React from 'react';
import {
  Inner,
  Container,
  SubTitle,
  Title,
  Pane,
  Image,
} from './styles/jumbotron';

export const Jumbotron = ({ children, direction = 'row', ...restProps }) => {
  return <Inner direction={direction}>{children}</Inner>;
};

const JumbotronContainer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};
const JumbotronPane = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};
const JumbotronTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
const JumbotronSubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
const JumbotronImage = ({ ...restProps }) => {
  return <Image {...restProps} />;
};

Jumbotron.Container = JumbotronContainer;
Jumbotron.Pane = JumbotronPane;
Jumbotron.Title = JumbotronTitle;
Jumbotron.SubTitle = JumbotronSubTitle;
Jumbotron.Image = JumbotronImage;
