/* eslint-disable prettier/prettier */
import { FlatList, Image, View, Text, ImageBackground } from 'react-native';
import styled from 'styled-components';

export const PlacesList = styled(FlatList)`
`;

export const CardImage = styled(ImageBackground)`
    height: 220px
    width: 190px;
    margin-right: 10px;
`;

export const PlaceText = styled(Text)`
    font-size: ${(props) => props.theme.FONTSIZES.body};
    font-weight: 600;
    margin-bottom: 5px
    margin-left: 2px;
    margin-right: 5px;
    color: ${(props) => props.theme.COLORS.white};
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
