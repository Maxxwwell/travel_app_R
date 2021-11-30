/* eslint-disable prettier/prettier */
import React from 'react';
import { CategoriesContainer } from '../style/List-component-style';
import { Iconx } from '../style/Home-component-style';
import { COLORS } from '../theme/colors';
import { IconsList } from '../style/List-component-style';

const CategoryIcons = [
    <Iconx name="airplane" size={35} color={COLORS.black} />,
    <Iconx name="umbrella" size={35} color={COLORS.black} />,
    <Iconx name="navigate" size={35} color={COLORS.black} />,
    <Iconx name="location" size={35} color={COLORS.black} />,
];

const ListCat = () => {
    return <CategoriesContainer>
        {CategoryIcons.map((icon, index) => (
            <IconsList
                key={index}>
                {icon}
            </IconsList>
        ))}
    </CategoriesContainer>;
};

export default ListCat;
