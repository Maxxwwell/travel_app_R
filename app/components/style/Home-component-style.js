/* eslint-disable prettier/prettier */
import { SafeAreaView, View, Text, TextInput } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';


export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  position: relative;
`;

export const AppBar = styled(View)`
    padding-vertical: 20px;
    padding-horizontal: 15px;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({theme}) => theme.COLORS.primary};
`;

export const Iconx = styled(Icon)`
    margin-horizontal: 5px; 
`;

export const SmalllContainer = styled(View)`
    background-color: ${({theme}) => theme.COLORS.primary};
    padding-horizontal: 15px;
    height: 15%
`;

export const Title = styled(Text)`
    font-size: ${({theme}) => theme.FONTSIZES.h5};
    color: ${({theme}) => theme.COLORS.white};
    font-weight: 500;
`;


export const BodyText = styled(Text)`
    font-size: ${({theme}) => theme.FONTSIZES.body};
    color: ${({theme}) => theme.COLORS.black};
    font-weight: bold;
    padding-bottom: 10px;
    margin-top: 5px
`;

export const InputText = styled(TextInput)`
    flex: 1;
`;

export const TextField = styled(View)`
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    border-radius: 8px;
    background-color: white;
    margin-vertical: 10px;
    elevation: 10;
`;

export const BodyContainer = styled(View)`
    padding-horizontal: 15px;
    padding-vertical: 20px;
`;
