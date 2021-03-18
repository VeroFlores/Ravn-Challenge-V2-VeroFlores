import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Header, LoadingDiv } from './style';

const Loading = () => (
  <>
    <Header> People of Star Wars </Header>
    <LoadingDiv>
      <FaSpinner />
      <p>Loading</p>
    </LoadingDiv>
  </>
);
export default Loading;
