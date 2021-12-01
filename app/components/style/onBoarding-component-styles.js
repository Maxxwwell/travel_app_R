/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { SafeAreaView, ImageBackground, Text, View, TouchableOpacity } from 'react-native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  position: relative;
`;

export const DecoratedImage = styled(ImageBackground)`
    flex: 1;
`;

export const TitleContainer = styled(View)`
height: 60%;
bottom: 0px;
position: absolute;
padding-horizontal: 20px;
`;

export const TitleText = styled(Text)`
    font-size: ${(props) => props.theme.FONTSIZES.h3};
    color: ${(props) => props.theme.COLORS.white};
    font-weight: bold;
`;

export const Description = styled(Text)`
    font-size: ${({theme}) => theme.FONTSIZES.body};
    color: ${(props) => props.theme.COLORS.white};
    font-weight: 400;
    width: 50%
    opacity: 0.8
`;

export const ButtonText = styled(Text)`
    font-size: ${({theme}) => theme.FONTSIZES.button};
    font-weight: 700;
    width: 50%;
    color: ${({theme}) => theme.COLORS.black};
`;

export const GetStarted = styled(TouchableOpacity)`
    height: 55px;
    width: 28%
    background-color: ${(props) => props.theme.COLORS.white};
    align-items: center;
    justify-content: center;
    elevation: 5;
    border-radius:10px;
    marginTop: 40px
    
`;
