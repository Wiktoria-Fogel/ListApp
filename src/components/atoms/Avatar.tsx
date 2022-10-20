import React from 'react';
import styled from 'styled-components/native';

type AvatarProps = {
  source: string;
};

export const Avatar: React.FC<AvatarProps> = ({source}) => {
  return (
    <Wrapper>
      <AvatarImage source={{uri: source}} />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: 60px;
  width: 60px;
  margin-top: 8px;
`;

const AvatarImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 30px;
`;
