/* eslint-disable prettier/prettier */
import React from 'react';
import { CardImage, RecommendedList } from './style/Recommended-component-style';
import recommended from './model/Recommended';
import { Text } from 'react-native';


const Card = ({ recommend }) => {
    return <CardImage
    imageStyle={{ borderRadius: 6 }}
    source={{ uri: recommend.image[0] }}>

</CardImage>
};

const Recommended_Card = () => {
    return <RecommendedList
        showsVerticalScrollIndicator={false}
        data={recommended}
        renderItem={({ item }) => <Card recommend={item} />}
    />;
};

export default Recommended_Card;
