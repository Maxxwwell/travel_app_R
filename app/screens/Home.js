/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListCat from '../components/List_Cat';
import PlacesCard from '../components/Place_Card';
import Recommended_Card from '../components/Recommended_Card';
import { AppBar, BodyContainer, BodyText, Iconx, InputText, SafeArea, SmalllContainer, TextField, Title } from '../components/style/Home-component-style';
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

            

                <SmalllContainer>
                    <Title>Explore the</Title>
                    <Title>beautiful places</Title>

                    <TextField>
                        <Iconx name="search-circle" size={35} color={COLORS.black} />
                        <InputText placeholder="Search place" />
                    </TextField>
                </SmalllContainer>

                <ListCat />

                <ScrollView>
                <BodyContainer>
                    <BodyText>Places</BodyText>
                    <PlacesCard />

                    <BodyText>Recommended</BodyText>
                    <Recommended_Card />

                </BodyContainer>
                </ScrollView>
            
        </SafeArea>
    );
};

export default Home;
