import * as React from 'react';
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';

type Props = {
  secondary?: boolean;
};

export const CartIcon: React.FC<Props> = () => (
  <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <G clip-path="url(#clip0_251_948)">
      <Path
        d="M9.49997 22.5C10.0523 22.5 10.5 22.0523 10.5 21.5C10.5 20.9477 10.0523 20.5 9.49997 20.5C8.94768 20.5 8.49997 20.9477 8.49997 21.5C8.49997 22.0523 8.94768 22.5 9.49997 22.5Z"
        stroke="white"
        strokeWidth="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M20.5 22.5C21.0523 22.5 21.5 22.0523 21.5 21.5C21.5 20.9477 21.0523 20.5 20.5 20.5C19.9477 20.5 19.5 20.9477 19.5 21.5C19.5 22.0523 19.9477 22.5 20.5 22.5Z"
        stroke="white"
        strokeWidth="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1.49997 1.5H5.49997L8.17997 14.89C8.27141 15.3504 8.52188 15.764 8.88751 16.0583C9.25315 16.3526 9.71067 16.509 10.18 16.5H19.9C20.3693 16.509 20.8268 16.3526 21.1924 16.0583C21.5581 15.764 21.8085 15.3504 21.9 14.89L23.5 6.5H6.49997"
        stroke="white"
        strokeWidth="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_251_948">
        <Rect width="24" height="24" fill="black" transform="translate(0.5 0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CartIcon;
