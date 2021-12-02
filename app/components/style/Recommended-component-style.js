/* eslint-disable prettier/prettier */
import { ImageBackground, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components';

export const RecommendedList = styled(FlatList)`
`;

export const CardImage = styled(ImageBackground)`
    height: 220px;
    width: 99%
    margin-bottom: 10px;
`;

export const RecommendedText = styled(Text)`
    font-size: ${({ theme }) => theme.FONTSIZES.body};
    font-weight: 600;
    margin-bottom: 5px
    margin-left: 10px;
    margin-right: 10px;
    color: ${({ theme }) => theme.COLORS.white};
`;
export const Icon_Text = styled(View)`
    flex-direction: row;
    margin-bottom: 3px;
`;

export const IconsContainer = styled(View)`
    flex: 1;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: row;
`;
