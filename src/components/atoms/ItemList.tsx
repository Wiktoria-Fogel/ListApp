import React, {memo} from 'react';
import styled from 'styled-components/native';
import {PublicEvent} from '../../api/models/PublicEvent';
import {COLORS, VerticalSpacer} from '../theme';
import {Avatar} from './Avatar';

interface ItemListProps {
  item: PublicEvent;
}

export const ItemList: React.FC<ItemListProps> = memo(({item}) => {
  return (
    <ItemWrapper key={item.id}>
      <Row>
        <Avatar source={item.actor.avatar_url} />
        <InformationWrapper>
          <Title>{item.actor.display_login}</Title>
          <VerticalSpacer height={4} />
          <Description>{item.repo.name}</Description>
        </InformationWrapper>
      </Row>
    </ItemWrapper>
  );
});

const Row = styled.View`
  flex-direction: row;
  height: 100%;
`;

const ItemWrapper = styled.View`
  padding: 4px 12px;
  height: 86px;
  flex: auto;
  width: 100%;
  border-radius: 12px;
  background-color: ${COLORS.grey800};
`;

const Title = styled.Text`
  font-size: 14px;
  font-family: 'Raleway-Bold';
  color: ${COLORS.white};
`;

const Description = styled.Text`
  font-size: 12px;
  font-family: 'Raleway-Medium';
  color: ${COLORS.white};
`;

const InformationWrapper = styled.View`
  padding: 8px 12px;
  flex: 1;
`;
