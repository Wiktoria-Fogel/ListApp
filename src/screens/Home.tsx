import {FlatList, SafeAreaView, Text} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {COLORS, VerticalSpacer} from '../components/theme';
import {SearchInput} from '../components/atoms/SearchInput';

export const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const list = [
    {
      id: '1',
      name: 'Argentyna',
    },
    {
      id: '2',
      name: 'Grecja',
    },
    {
      id: '3',
      name: 'Chiny',
    },
    {
      id: '4',
      name: 'Kongo',
    },
    {
      id: '5',
      name: 'Meksyk',
    },
    {
      id: '6',
      name: 'Hiszpania',
    },
    {
      id: '7',
      name: 'Finlandia',
    },
    {
      id: '8',
      name: 'Rosja',
    },
    {
      id: '9',
      name: 'Australia',
    },
  ];

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
        <FlatList
          data={list}
          ItemSeparatorComponent={() => <VerticalSpacer height={12} />}
          //style={styles.flatList}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => <Text>{'Lista jest pusta'}</Text>}
          renderItem={({item}) => (
            <>
              <ItemWrapper key={item.id}>
                <Text>{item.name}</Text>
              </ItemWrapper>
              <VerticalSpacer height={8} />
            </>
          )}
        />
      </MainWrapper>
    </SafeAreaView>
  );
};

const MainWrapper = styled.View`
  padding: 16px;
  height: 100%;
  width: 100%;
  background-color: ${COLORS.grey800};
`;

const ItemWrapper = styled.View`
  padding: 8px;
  height: 64px;
  width: 100%;
  border-radius: 8px;
  background-color: ${COLORS.purple400};
`;
