import React from 'react';
import styled from 'styled-components/native';
import {COLORS, VerticalSpacer} from '../theme';

interface EmptyComponentProps {
  title: string;
}

export const EmptyComponent: React.FC<EmptyComponentProps> = ({title}) => {
  return (
    <Wrapper>
      <VerticalSpacer height={12} />
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 18px;
  font-family: 'Raleway-Bold';
  color: ${COLORS.white};
`;
