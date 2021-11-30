/* eslint-disable prettier/prettier */
import { View } from 'react-native';
import styled from 'styled-components';


export const CategoriesContainer = styled(View)`
    margin-top: 40px;
    margin-horizontal: 30px;
    flex-direction: row;
    justify-content: space-between;
`;

export const IconsList = styled(View)`
height: 60px;
width: 60px;
background-color: ${(props) => props.theme.COLORS.secondary};
justify-content: center;
align-items: center;
border-radius: 10px;
elevation: 5
`;
