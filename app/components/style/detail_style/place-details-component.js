/* eslint-disable prettier/prettier */
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';


export const DetaiImage = styled(ImageBackground)`
    flex: 0.63;
`;

export const AppBar = styled(View)`
    margin-top: 30px;
    padding-horizontal: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title_Icon_Container = styled(View)`
    flex-direction: row;
    padding-horizontal: 15px;
    justify-content: space-between;
    bottom: 30px;
    position: absolute;
    align-items: center;

`;
export const TitleText = styled(Text)`
    font-size: ${({ theme }) => theme.FONTSIZES.h5};
    color: ${({ theme }) => theme.COLORS.white};
    font-weight: bold;
    width: 70%;
`;
export const A_Day = styled(Text)`
    font-size: ${({ theme }) => theme.FONTSIZES.body};
    color: ${({ theme }) => theme.COLORS.white};
    font-weight: 400;
    width: 70%;
`;

export const DetailsContainer = styled(View)`
    top: -20px
    flex: 0.3;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-horizontal: 10px;
    background-color: ${({ theme }) => theme.COLORS.white};
`;

export const IconContainer = styled(View)`
flex-direction: row;
padding-top: 5px;
align-items: center;
justify-content: space-between;
`;

export const Icon_Text = styled(View)`
flex-direction: row;
padding-top: 5px;
align-items: center;
`;

export const BodyText1 = styled(Text)`
    font-size: ${({ theme }) => theme.FONTSIZES.button};
    color: ${({ theme }) => theme.COLORS.primary};
    font-weight: bold;
    padding-bottom: 10px;
    margin-top: 5px
`;


export const TripText = styled(Text)`
    font-size: ${({ theme }) => theme.FONTSIZES.body};
    color: ${({ theme }) => theme.COLORS.black};
    font-weight: bold;
    padding-bottom: 10px;
    margin-top: 5px
`;


export const Footer = styled(View)`
    flex-direction: row;
    background-color: ${({ theme }) => theme.COLORS.primary};
    align-items: center;
    justify-content: space-between;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 60px
`;


export const Cost_a_Day = styled(View)`
flex-direction: row;
padding-horizontal: 10px;
flex: 0.38
align-items: center;

`;

export const FooterItems = styled(View)`
flex-direction: row;
padding-top: 5px;
align-items: center;
padding-horizontal: 10px;
flex:1
justify-content: space-between;

`;

export const BookNow = styled(Text)`
    font-size: ${({theme}) => theme.FONTSIZES.body};
    color: ${({theme}) => theme.COLORS.primary};
    font-weight: bold;
    padding-bottom: 10px;
    margin-top: 5px
`;

export const Book_Button = styled(TouchableOpacity)`
    height: 40px;
    width: 28%
    background-color: ${({theme}) => theme.COLORS.white};
    align-items: center;
    justify-content: center;
    elevation: 20;
    border-radius:10px;    
`;
