import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  secondary?: boolean;
};

export const ArrowIcon: React.FC<Props> = ({ secondary, ...rest }) => (
  <Svg width={25} height={26} fill="none" {...rest}>
    <Path
      stroke={secondary ? '#000' : '#fff'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.375 19.25 6.25-6.25-6.25-6.25"
    />
  </Svg>
);
