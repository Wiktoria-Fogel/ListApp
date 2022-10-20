import {TextInputProps, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {CancelIcon, MagnifierIcon} from '../../assets/svg/Icons';
import {COLORS} from '../theme';

type SearchInputProps = {
  onClear: () => void;
};

export const SearchInput: React.FC<SearchInputProps & TextInputProps> = ({
  onClear,
  ...other
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Wrap isFocused={isFocused || !!other.value}>
      <MagnifierIcon fill={isFocused ? COLORS.borderFocus : COLORS.border} />
      <StyledTextInput
        returnKeyType="done"
        textAlignVertical="center"
        placeholderTextColor={COLORS.grey600}
        {...other}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {other.value ? (
        <TouchableOpacity onPress={onClear}>
          <CancelIcon />
        </TouchableOpacity>
      ) : null}
    </Wrap>
  );
};

const Wrap = styled.View<{
  isFocused: boolean;
}>`
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid
    ${({isFocused}) => (isFocused ? COLORS.borderFocus : COLORS.border)};
  border-radius: 8px;
  width: 100%;

  height: 44px;
  padding-left: 12px;
  padding-right: 12px;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

const StyledTextInput = styled.TextInput`
  font-weight: 400;
  color: ${COLORS.grey900};
  padding: 0;
  margin-left: 10px;
  flex: 1;
`;
