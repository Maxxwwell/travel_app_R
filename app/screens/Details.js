/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';
import { AppBar, A_Day, BodyText1, BookNow, Book_Button, Cost_a_Day, DetaiImage, DetailsContainer, Footer, FooterItems, IconContainer, Icon_Text, TitleText, Title_Icon_Container, TripText } from '../components/style/detail_style/place-details-component';
import { Iconx } from '../components/style/Home-component-style';
import { SafeArea } from '../components/style/onBoarding-component-styles';
import { COLORS } from '../components/theme/colors';

const Details = ({ navigation, route }) => {
  const [like, setLike] = useState(false);
  const place = route.params;
  return (
    <>
      <SafeArea >
        <StatusBar translucent
          backgroundColor="rgba(0,0,0,0)" />
        <DetaiImage source={place.image}>

          <AppBar>
            <Iconx name="chevron-back-outline"
              size={30}
              color={COLORS.white}
              onPress={navigation.goBack}
            />
            <Iconx name="ellipsis-vertical"
              size={28}
              color={COLORS.white} />
          </AppBar>

          <Title_Icon_Container>
            <TitleText>{place.name}</TitleText>
            <StarRating
              maxStars={5}
              disabled={true}
              rating={place.ratings}
              fullStarColor={'gold'}
              starSize={18}
            />
          </Title_Icon_Container>

        </DetaiImage>

        <DetailsContainer>
          <IconContainer>
            <Icon_Text>
              <Iconx name="location" size={25} color={COLORS.primary} />
              <BodyText1>{place.location}</BodyText1>
            </Icon_Text>

            <TouchableOpacity onPress={() => { setLike(!like); }}>
              {like ?
                <Iconx name="heart" size={35} color={COLORS.red} />
                :
                <Iconx name="heart-outline" size={35} color={COLORS.red} />
              }
            </TouchableOpacity>

          </IconContainer>

          <TripText>About Trip</TripText>
          <TripText>{place.details}</TripText>
          <Footer>
            <FooterItems>
              <Cost_a_Day>
                <TitleText>$100</TitleText>
                <A_Day>/day</A_Day>
              </Cost_a_Day>
              
              <Book_Button onPress={()=>{console.log('booked')}}>
                <BookNow>Book now</BookNow>
              </Book_Button>
            </FooterItems>
          </Footer>

        </DetailsContainer>

      </SafeArea>

    </>
  );
};

export default Details;
