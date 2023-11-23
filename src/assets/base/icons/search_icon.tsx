import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SearchIcon = () => (
  <Svg width={20} height={21} viewBox="0 0 20 21" fill="none">
    <Path
      d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48478 3 2.50001 5.98477 2.50001 9.66667C2.50001 13.3486 5.48478 16.3333 9.16667 16.3333Z"
      stroke="#BABABA"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.5 18L13.875 14.375"
      stroke="#BABABA"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SearchIcon;
