import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const BannerIcon = (props: any) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4.16669 10H15.8334"
      stroke="#022D83"
      strokeWidth={1.4375}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.99997 4.16668L15.8333 10L9.99997 15.8333"
      stroke="#022D83"
      strokeWidth={1.4375}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
