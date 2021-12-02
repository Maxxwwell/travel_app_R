/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar, Text } from 'react-native';
import { SafeArea } from '../components/style/onBoarding-component-styles';

const recommended_details = ({ navigation, route }) => {
    const recommend = route.params;
    return (
        <SafeArea>
            <StatusBar translucent
        backgroundColor="rgba(0,0,0,0)" />
        </SafeArea>

    );
};

export default recommended_details;
