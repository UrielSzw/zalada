import React, { useRef, useState } from 'react';
import { Dimensions, ScrollView, ScrollViewComponent, View } from 'react-native';
import { Avatar, Banner, Button, Rating, StyledText, DropdownModal } from '../../components';
import ProductListItem from '../../components/ProductListItem/ProductListItem.component';
import ProductCardItem from '../../components/ProductCardItem/ProductCardItem.component';
import { avatarImage } from '../../assets';
import { useProducts } from '../../hooks/useProducts';

type Props = {
  navigation: any;
};

export const DemoComponents: React.FC<Props> = ({ navigation }) => {
  const { width } = Dimensions.get('window');

  // BEGIN DROPDOWN MODAL
  const [visible, setVisible] = useState<boolean>(false);
  const [value, setValue] = useState<string>('3 units');
  //END DROPDOWN MODAL

  const { productsList } = useProducts();

  const scrollRef = useRef<any>();

  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return productsList ? (
    <ScrollView
      ref={scrollRef}
      contentContainerStyle={{ alignItems: 'center', gap: 10, padding: 10 }}
    >
      <View style={{ width: 326, gap: 10 }}>
        {productsList.map((item, index) => (
          <Banner key={index} product={item} navigation={navigation} />
        ))}
      </View>
      <Avatar img={avatarImage} />
      <StyledText>ScrollView</StyledText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {productsList.map((item, index) => (
          <Banner
            key={index}
            product={item}
            style={{ marginRight: 20, maxWidth: width * 0.8 }}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <StyledText>ScrollView small</StyledText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {productsList.map((item, index) => (
          <Banner
            key={index}
            small
            product={item}
            style={{ marginRight: 20, maxWidth: width * 0.8 }}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <StyledText children="Rating display only" h3 />
      <Rating rating={5} readOnly />
      <Rating rating={4} readOnly />
      <Rating rating={0} readOnly />
      <StyledText children="Rating input" h3 />
      <Rating />
      <Rating rating={3} />
      <StyledText children="Buttons" h3 />
      <Button text="Apply Filter" primary big />
      <Button text="Popularity" primary />
      <Button text="Newest" secondary />
      <Button text="Headphone" primary rounded />
      <Button text="Headband" rounded />
      <Button text="Proceed to Checkout" primary big arrowIcon />
      <Button text="Proceed to Checkout" secondary big arrowIcon />
      <Button text="Proceed to Checkout" secondary arrowIcon />
      <Button text="Filter" secondary filterIcon />
      <Button onPress={onPressTouch} text="Shop Now" bannerIcon />

      {productsList.map((item, index) => (
        <ProductListItem key={index} product={item} navigation={navigation} />
      ))}
      <Button text="Text with underline" tapbar underline />
      <Button text="Text without underline" tapbar />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 10,
        }}
      >
        {productsList.map((item, index) => (
          <ProductCardItem key={index} product={item} navigation={navigation} />
        ))}
      </View>
      <Button text="Abrir Modal" onPress={() => setVisible(true)} />
      <DropdownModal
        title="Quantity"
        stock={15}
        visible={visible}
        setVisible={setVisible}
        dropdownValue={value}
        setDropdownValue={setValue}
      />
    </ScrollView>
  ) : (
    <></>
  );
};
