/* eslint-disable prettier/prettier */
import React from 'react';
import { CardImage, IconsContainer, Icon_Text, RecommendedList, RecommendedText } from './style/Recommended-component-style';
import recommended from './model/Recommended';
import { Text, TouchableOpacity } from 'react-native';
import { Iconx } from './style/Home-component-style';
import { COLORS } from './theme/colors';


const Card = ({ recommend, navigation }) => {
    return <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('recommended_Details', recommend)}
    >

        <CardImage
            // eslint-disable-next-line react-native/no-inline-styles
            imageStyle={{
                borderRadius: 6, resizeMode: 'cover' }}
            source = {{ uri: recommend.image[0] }}>
        <RecommendedText>{recommend.name}</RecommendedText>

        <IconsContainer>

            <Icon_Text>
                <Iconx name="location" size={25} color={COLORS.black} />
                <RecommendedText>{recommend.location}</RecommendedText>
            </Icon_Text>

            <Icon_Text>
                <Iconx name="star" size={20} color={COLORS.yellow} />
                <RecommendedText>{recommend.ratings}</RecommendedText>
            </Icon_Text>

        </IconsContainer>
    </CardImage>
    </TouchableOpacity >
        ;
};

const Recommended_Card = ({ navigation }) => {
    return <RecommendedList
        showsVerticalScrollIndicator={false}
        data={recommended}
        renderItem={({ item }) => <Card navigation={navigation} recommend={item} />}
    />;
};

export default Recommended_Card;
