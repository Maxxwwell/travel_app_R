/* eslint-disable prettier/prettier */

import React from 'react';
import { Iconx } from './style/Home-component-style';
import { COLORS } from './theme/colors';
import { CardImage, IconsContainer, Icon_Text, PlacesList, PlaceText } from './style/Places-component-styles';
import places from './model/places';
import { Text, TouchableOpacity } from 'react-native';

const Card = ({ place, navigation }) => {
    return <TouchableOpacity
    activeOpacity={0.8}
    onPress={()=> navigation.navigate('Details', place)}
    >

        <CardImage
            // eslint-disable-next-line react-native/no-inline-styles
            imageStyle={{ borderRadius: 6 }} source={place.image}>
            <PlaceText>{place.name}</PlaceText>

            <IconsContainer>
                <Icon_Text>
                    <Iconx name="location" size={25} color={COLORS.black} />
                    <PlaceText>{place.location}</PlaceText>
                </Icon_Text>

                <Icon_Text>
                    <Iconx name="star" size={20} color={COLORS.yellow} />
                    <PlaceText>{place.ratings}</PlaceText>
                </Icon_Text>

            </IconsContainer>
        </CardImage>

    </TouchableOpacity>;

};

const PlacesCard = ({navigation}) => {
    return (
        <PlacesList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({ item }) => <Card navigation={navigation} place={item} />}
        />
    );
};

export default PlacesCard;
