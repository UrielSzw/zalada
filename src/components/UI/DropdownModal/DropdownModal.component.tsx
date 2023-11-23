import React, { useEffect, useState } from 'react';
import {
  Modal,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import { StyledText } from '../StyledText/StyledText';
import { styles } from './DropdownModal.styles';

type Props = {
  setDropdownValue: (option: string) => void;
  dropdownValue: string;
  stock?: number;
  options?: string[];
  title: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  handleClick?: any;
};

const stockArray = ['1 unit', '2 units', '3 units', '4 units', '5 units', '6 units'];

export const DropdownModal: React.FC<Props> = ({
  setDropdownValue,
  dropdownValue,
  stock,
  options,
  title,
  visible,
  setVisible,
  handleClick,
}) => {
  const [showOptions, setShowOptions] = useState<string[]>();
  const slideAnimationValue = new Animated.Value(0);

  const handleOnPress = (option?: string) => {
    if (option) {
      setDropdownValue(option);
      handleClick && handleClick();
    }
    setVisible(false);
  };

  useEffect(() => {
    if (stock) {
      setShowOptions(stockArray.slice(0, stock));
    } else if (options) {
      setShowOptions(options);
    }
  }, [stock]);

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnimationValue, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const slideAnimationStyle = {
    transform: [
      {
        translateY: slideAnimationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [300, 0],
        }),
      },
    ],
  };

  return (
    <Modal visible={visible} transparent>
      <TouchableOpacity style={styles.background} onPress={() => handleOnPress()}>
        <Animated.View style={[styles.container, slideAnimationStyle]}>
          <TouchableWithoutFeedback>
            <StyledText h4 children={title} style={styles.title} />
          </TouchableWithoutFeedback>
          <ScrollView contentContainerStyle={styles.options}>
            {showOptions?.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={dropdownValue === option ? styles.optionSelected : styles.option}
                onPress={() => handleOnPress(option)}
              >
                <StyledText children={option} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};
