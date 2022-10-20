import {FlatList, SafeAreaView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {COLORS, VerticalSpacer} from '../components/theme';
import {SearchInput} from '../components/atoms/SearchInput';
import {useEventsState} from '../containers/events';
import {Avatar} from '../components/atoms/Avatar';
import {STYLES} from '../components/theme/styles';
import {PublicEvent} from '../api/models/PublicEvent';
import {EmptyComponent} from '../components/atoms/EmptyComponent';
import {strings} from '../assets/strings/strings';

export const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const {
    publicEvents,
    setPublicEvents,
    controlPage,
    refetchPublicEvents,
    isLoading,
  } = useEventsState();
  const [isLoadingVisible, setIsLoadingVisible] = useState<boolean>(isLoading);
  const [filteredList, setFilteredList] = useState<Array<PublicEvent>>();
  const [page, setPage] = useState<number>(2);

  useEffect(() => {
    if (publicEvents) {
      console.log('STRZAŁ_DO_API');
      refetchPublicEvents(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, publicEvents]);

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
    console.log(controlPage?.length, 'CONTROL');
    if (controlPage && publicEvents) {
      if (controlPage.length === 10) {
        setIsLoadingVisible(true);
        setPublicEvents(publicEvents?.concat(controlPage));
        setPage(page + 1);
        setIsLoadingVisible(false);
      } else {
        setIsLoadingVisible(false);
        setPublicEvents(publicEvents?.concat(controlPage));
      }
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
        {isLoadingVisible ||
          (isLoading && (
            <LoadingWrap>
              <VerticalSpacer height={16} />
              <ActivityIndicator size="large" color={COLORS.white} />
            </LoadingWrap>
          ))}
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

const Row = styled.View`
  flex-direction: row;
  height: 100%;
`;

const LoadingWrap = styled.View`
  width: 100%;
  bottom: 0px;
  right: 16px;
  position: absolute;
  padding: 12px 0px;
`;

const InformationWrapper = styled.View`
  padding: 8px 12px;
  flex: 1;
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
