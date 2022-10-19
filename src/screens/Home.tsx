import {FlatList, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {COLORS, VerticalSpacer} from '../components/theme';
import {SearchInput} from '../components/atoms/SearchInput';
import {useEventsState} from '../containers/events';
import {Avatar} from '../components/atoms/Avatar';

export const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const {publicEvents} = useEventsState();
  const loadMoreItems = () => {};

  return (
    <SafeAreaView>
      <MainWrapper>
        <SearchInput
          placeholder={'Search...'}
          value={searchValue}
          onChangeText={text => setSearchValue(text)}
          onClear={() => setSearchValue('')}
        />
        <VerticalSpacer height={12} />
        {/* {publicEvents.map(item => {
          const r = item.filter(item => item.name.startsWith(searchValue));
          console.log(r);
        })} */}
        <FlatList
          data={publicEvents}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <VerticalSpacer height={10} />}
          //style={styles.flatList}
          onEndReached={loadMoreItems}
          keyExtractor={item => item.id}
          //zrobić empty component i tłumaczenia
          ListEmptyComponent={() => <Title>{'Lista jest pusta'}</Title>}
          renderItem={({item}) => {
            return (
              <>
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
              </>
            );
          }}
        />
      </MainWrapper>
    </SafeAreaView>
  );
};

const MainWrapper = styled.View`
  padding: 16px;
  height: 100%;
  width: 100%;
  background-color: ${COLORS.blue300};
`;

const Row = styled.View`
  flex-direction: row;
  height: 100%;
`;

const InformationWrapper = styled.View`
  padding: 8px 12px;
  flex: 1;
`;

const ItemWrapper = styled.View`
  padding: 4px 12px;
  height: 5%;
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
