import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, ScrollView, ScrollViewComponent, View } from 'react-native';
import { Avatar, Banner, Button, Rating, StyledText, DropdownModal } from '../../components';
import ProductListItem from '../../components/ProductListItem/ProductListItem.component';
import ProductCardItem from '../../components/ProductCardItem/ProductCardItem.component';
import { ArrowIcon, BannerIcon, FilterIcon, avatarImage } from '../../assets';
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
      {/* <View style={{ width: 326, gap: 10 }}>
        {productsList.map((item, index) => (
          <Banner key={index} product={item} navigation={navigation} />
        ))}
      </View> */}
      <Avatar img={avatarImage} />
      <StyledText>ScrollView</StyledText>
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {productsList.map((item, index) => (
          <Banner
            key={index}
            product={item}
            style={{ marginRight: 20, maxWidth: width * 0.8 }}
            navigation={navigation}
          />
        ))}
      </ScrollView> */}
      <StyledText>ScrollView small</StyledText>
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {productsList.map((item, index) => (
          <Banner
            key={index}
            small
            product={item}
            style={{ marginRight: 20, maxWidth: width * 0.8 }}
            navigation={navigation}
          />
        ))}
      </ScrollView> */}
      <StyledText children="Rating display only" variant="h3" />
      <Rating rating={5} readOnly />
      <Rating rating={4} readOnly />
      <Rating rating={0} readOnly />
      <StyledText children="Rating input" variant="h3" />
      <Rating />
      <Rating rating={3} />
      <StyledText children="Buttons" variant="h3" />
      <Button text="Apply Filter" big />
      <Button text="Popularity" />
      <Button text="Newest" variant="secondary" />
      <View style={{ gap: 10, flexDirection: 'row' }}>
        <Button text="Headphone" variant="rounded" />
        <Button text="Headband" variant="rounded" selected />
      </View>
      <Button text="Proceed to Checkout" big iconRight={<ArrowIcon />} />
      <Button
        text="Proceed to Checkout"
        variant="secondary"
        big
        iconRight={<ArrowIcon secondary />}
      />
      <Button text="Proceed to Checkout" variant="secondary" iconRight={<ArrowIcon secondary />} />
      <Button text="Filter" variant="secondary" iconRight={<FilterIcon />} />
      <Button onPress={onPressTouch} text="Shop Now" iconRight={<BannerIcon secondary />} />

      {/* {productsList.map((item, index) => (
        <ProductListItem key={index} product={item} navigation={navigation} />
      ))} */}
      <Button text="Text with underline" variant="tapbar" selected />
      <Button text="Text without underline" variant="tapbar" />
      {/* <View
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
      </View> */}
      <Button text="Abrir Modal" onPress={() => setVisible(true)} />
      <DropdownModal
        title="Quantity"
        stock={15}
        visible={visible}
        setVisible={setVisible}
        dropdownValue={value}
        setDropdownValue={setValue}
      />
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{ alignItems: 'center', gap: 10, padding: 10 }}
      >
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
        <StyledText children="Rating display only" variant="h3" />
        <Rating rating={5} readOnly />
        <Rating rating={4} readOnly />
        <Rating rating={0} readOnly />
        <StyledText children="Rating input" variant="h3" />
        <Rating />
        <Rating rating={3} />
        <StyledText children="Buttons" variant="h3" />
        <Button text="Apply Filter" big />
        <Button text="Popularity" />
        <Button text="Newest" variant="secondary" />
        <View style={{ gap: 10, flexDirection: 'row' }}>
          <Button text="Headphone" variant="rounded" />
          <Button text="Headband" variant="rounded" selected />
        </View>
        <Button text="Proceed to Checkout" big iconRight={<ArrowIcon />} />
        <Button text="Proceed to Checkout" variant="secondary" big iconRight={<ArrowIcon />} />
        <Button text="Proceed to Checkout" variant="secondary" iconRight={<ArrowIcon />} />
        <Button text="Filter" variant="secondary" iconLeft={<FilterIcon />} />
        <Button onPress={onPressTouch} text="Shop Now" iconLeft={<BannerIcon secondary />} />

        {productsList.map((item, index) => (
          <ProductListItem key={index} product={item} navigation={navigation} />
        ))}
        <Button text="Text with underline" variant="tapbar" selected />
        <Button text="Text without underline" variant="tapbar" />
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
    </ScrollView>
  ) : (
    <></>
  );
};
