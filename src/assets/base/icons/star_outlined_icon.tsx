import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  readOnly?: boolean;
};

export const StarOutlinedIcon: React.FC<Props> = ({ readOnly }) => (
  <Svg width={readOnly ? 16 : 48} height={readOnly ? 16 : 48} viewBox="0 0 16 16" fill="none">
    <Path
      d="M7.99999 1.33334L10.06 5.50668L14.6667 6.18001L11.3333 9.42668L12.12 14.0133L7.99999 11.8467L3.87999 14.0133L4.66666 9.42668L1.33333 6.18001L5.93999 5.50668L7.99999 1.33334Z"
      stroke="#BABABA"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
