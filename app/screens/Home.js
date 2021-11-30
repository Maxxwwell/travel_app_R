/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AppBar, Icons, Iconx, InputText, SafeArea, SmalllContainer, TextField, Title } from '../components/style/Home-component-style';
import { COLORS } from '../components/theme/colors';

const Home = () => {
    return (
        <SafeArea>

            <StatusBar
                animated={true}
                backgroundColor={COLORS.primary} />
            <AppBar>
                <Iconx name="menu" size={25} color={COLORS.white} />
                <Iconx name="notifications" size={25} color={COLORS.white} />
            </AppBar>

            <ScrollView showsVerticalScrollIndicator={false}>
                <SmalllContainer>

                    <Title>Explore the</Title>
                    <Title>beautiful places</Title>

                    <TextField>
                        <Iconx name="search-circle" size={35} color={COLORS.black} />
                        <InputText placeholder="Search place" />
                    </TextField>

                </SmalllContainer>
            </ScrollView>
        </SafeArea>
    );
};

export default Home;
