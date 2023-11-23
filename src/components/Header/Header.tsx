import React from 'react';
import { PATHS } from '../../routes/paths';
import { resetCart } from '../../redux/cart.slice';
import { useDispatch } from 'react-redux';
import { SafeAreaView, StatusBar, TouchableOpacity, View } from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import {
  TrashIcon,
  CartIcon,
  ChevronLeft,
  avatarImage,
  DipCoreLogo,
  NriWhiteLogo,
} from '../../assets';
import { StyledText } from '../UI/StyledText/StyledText';
import { useCart } from '../../hooks/useCart';
import { theme } from '../../theme';
import { Avatar } from '../UI/Avatar/Avatar.component';
import { styles } from './Header.style';

const Header: React.FC<any> = ({ navigation, route, options }) => {
  const dispatch = useDispatch();

  const { totalItems } = useCart();

  const TrashBtn: React.FC = () => (
    <TouchableOpacity onPress={() => dispatch(resetCart())}>
      <TrashIcon white />
    </TouchableOpacity>
  );

  const CartBtn: React.FC = () => (
    <TouchableOpacity onPress={() => navigation.navigate(PATHS.CART)}>
      <CartIcon />
      {totalItems > 0 ? (
        <View style={styles.badge}>
          <StyledText white style={{ fontFamily: theme.fontFamily.primaryBold }}>
            {totalItems}
          </StyledText>
        </View>
      ) : null}
    </TouchableOpacity>
  );

  const BackBtn: React.FC = () => (
    <TouchableOpacity onPress={navigation.goBack}>
      <ChevronLeft />
    </TouchableOpacity>
  );

  const AvatarBtn: React.FC = () => (
    <TouchableOpacity onPress={() => navigation.navigate(PATHS.PROFILE)}>
      <Avatar img={avatarImage} />
    </TouchableOpacity>
  );

  const LogoContainer: React.FC = () => (
    <View style={styles.logoContainer}>
      <DipCoreLogo width={74} height={17} />
      <View style={styles.rectangle} />
      <NriWhiteLogo width={74} height={17} />
    </View>
  );

  const title = getHeaderTitle(options, route.name);

  const setHeader = () => {
    switch (title) {
      case PATHS.CART:
        return {
          center: (
            <StyledText white h4>
              Shopping Cart
            </StyledText>
          ),
          rightIcon: <TrashBtn />,
        };
      case PATHS.CHECKOUT:
        return {
          center: (
            <StyledText white h4>
              Checkout Page
            </StyledText>
          ),
          rightIcon: <TrashBtn />,
        };
      case PATHS.PDP:
      case PATHS.PLP:
      case PATHS.HOME:
        return {
          center: <LogoContainer />,
          rightIcon: <CartBtn />,
        };
      case PATHS.PROFILE:
        return {
          center: (
            <StyledText white h4>
              Profile
            </StyledText>
          ),
        };
      default:
        return {};
    }
  };

  const { center, rightIcon } = setHeader();

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
        translucent={true}
      />
      <View style={styles.header}>
        {title === PATHS.HOME ? <AvatarBtn /> : <BackBtn />}
        {center ? center : <View style={styles.placeholder} />}
        {rightIcon ? rightIcon : <View style={styles.placeholder} />}
      </View>
    </SafeAreaView>
  );
};

export default Header;
