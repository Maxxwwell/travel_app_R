/* eslint-disable prettier/prettier */

import React from 'react';
import { CardImage, PlacesList } from '../style/Places-component-styles';
import places from './places';

const Card = ({ place }) => {
    return <CardImage source={place.image} />;
};

const PlacesCard = () => {
    return (
        <PlacesList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({ item }) => <Card place={item} />}
        />
    );
};

export default PlacesCard;
