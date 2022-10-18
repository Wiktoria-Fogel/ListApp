import styled from 'styled-components/native';

interface VerticalSpacerProps {
  height: number;
}

export const VerticalSpacer = styled.View<VerticalSpacerProps>`
  height: ${({height}) => height}px;
`;
