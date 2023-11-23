import React, { useEffect, useState } from 'react';
import { Button, TouchableOpacity, View } from 'react-native';
import { StyledText } from '../StyledText/StyledText';
import { StarFilledIcon, StarOutlinedIcon } from '../../../assets';
import { styles } from './Rating.styles';

type Props = {
  rating?: number;
  readOnly?: boolean;
};

export const Rating: React.FC<Props> = ({ rating = 0, readOnly }) => {
  const emptyArray = Array(5).fill(0);
  const [ratingArray, setRatingArray] = useState<number[]>([]);

  const setRating = (count: number) => {
    Array(count)
      .fill(0)
      .forEach((number, index) => {
        emptyArray[index] = 1;
      });

    setRatingArray(emptyArray);
  };

  useEffect(() => {
    setRating(rating);
  }, []);

  if (readOnly) {
    return (
      <View style={styles.display}>
        {rating ? (
          ratingArray.map((rating, index) =>
            rating === 1 ? (
              <StarFilledIcon readOnly key={index} />
            ) : (
              <StarOutlinedIcon readOnly key={index} />
            )
          )
        ) : (
          <StyledText children="No rating" primary />
        )}
      </View>
    );
  }

  const handleStarSeleceted = (index: number) => {
    setRating(index + 1);
  };

  return (
    <View style={styles.touchable}>
      {ratingArray.map((rating, index) => (
        <TouchableOpacity key={index} onPress={(e: any) => handleStarSeleceted(index)}>
          {rating === 1 ? <StarFilledIcon /> : <StarOutlinedIcon />}
        </TouchableOpacity>
      ))}
    </View>
  );
};
