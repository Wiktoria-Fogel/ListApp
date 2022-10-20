import {FlatList, SafeAreaView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {COLORS, VerticalSpacer} from '../components/theme';
import {SearchInput} from '../components/atoms/SearchInput';
import {useEventsState} from '../containers/events';
import {STYLES} from '../components/theme/styles';
import {PublicEvent} from '../api/models/PublicEvent';
import {EmptyComponent} from '../components/atoms/EmptyComponent';
import {strings} from '../assets/strings/strings';
import {ItemList} from '../components/atoms/ItemList';

export const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const {
    publicEvents,
    setPublicEvents,
    controlPage,
    fetchPublicEvents,
    isLoading,
  } = useEventsState();
  const [filteredList, setFilteredList] = useState<Array<PublicEvent>>();
  const [page, setPage] = useState<number>(2);

  useEffect(() => {
    if (publicEvents) {
      if (searchValue !== '') {
        const filterResult = publicEvents.filter(item => {
          const re = new RegExp(`^${searchValue}`, 'i');
          return item.actor.display_login.match(re) || item.repo.name.match(re);
        });
        setFilteredList(filterResult);
      } else {
        setFilteredList(publicEvents);
      }
    }
  }, [publicEvents, searchValue]);

  const loadMoreItems = () => {
    if (controlPage.length === 20) {
      setPublicEvents(publicEvents?.concat(controlPage));
      setPage(page + 1);
      fetchPublicEvents(page + 1);
    } else {
      setPublicEvents(publicEvents?.concat(controlPage));
    }
  };

  return (
    <SafeAreaView style={STYLES.safeArea}>
      <MainWrapper>
        <SearchInput
          placeholder={strings.HomeScreen.search}
          value={searchValue}
          onChangeText={text => setSearchValue(text)}
          onClear={() => setSearchValue('')}
        />
        <VerticalSpacer height={12} />
        <FlatList
          data={filteredList}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <VerticalSpacer height={10} />}
          onEndReached={loadMoreItems}
          keyExtractor={(item, index) => item.id + index}
          ListEmptyComponent={() => (
            <EmptyComponent title={strings.HomeScreen.emptyList} />
          )}
          renderItem={({item}) => {
            return <ItemList item={item} />;
          }}
        />
        {isLoading && (
          <LoadingWrap>
            <VerticalSpacer height={16} />
            <ActivityIndicator size="large" color={COLORS.white} />
          </LoadingWrap>
        )}
      </MainWrapper>
    </SafeAreaView>
  );
};

const MainWrapper = styled.View`
  padding: 16px 16px 0px 16px;
  height: 100%;
  width: 100%;
  flex: 1;
  justify-content: center;
  margin-bottom: auto;
  background-color: ${COLORS.blue300};
`;

const LoadingWrap = styled.View`
  width: 100%;
  bottom: 0px;
  right: 16px;
  position: absolute;
  padding: 12px 0px;
`;
