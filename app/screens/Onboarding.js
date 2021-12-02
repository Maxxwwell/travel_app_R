/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar } from 'react-native';
import { Button, ButtonText, CustomButton, DecoratedImage, Description, GetStarted, SafeArea, TitleContainer, TitleText } from '../components/style/onBoarding-component-styles';

const Onboarding = ({ navigation }) => {
    return (
        <SafeArea>
            <StatusBar
                translucent
                backgroundColor="rgba(0,0,0,0)" />

            <DecoratedImage
                source={require('../assets/images/onboardImage1.jpg')} />
            <TitleContainer>

                <TitleText>Discover</TitleText>
                <TitleText>World with us</TitleText>

                <Description>
                    “We take photos as a return
                    ticket to a moment otherwise gone” – Katie Thurmes
                </Description>

                <GetStarted
                    onPress={() => navigation.reset({
                        index: 0,
                        routes: [{
                            name: 'Home',
                        }],
                    })}
                    activeOpacity={0.7}>
                    <ButtonText>
                        Get Started
                    </ButtonText>
                </GetStarted>
            </TitleContainer>


        </SafeArea >
    );
};

export default Onboarding;
