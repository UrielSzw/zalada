import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface Props extends SvgProps {
  secondary?: boolean;
}

export const BannerIcon: React.FC<Props> = ({ secondary, ...rest }) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...rest}>
    <Path
      d="M4.16669 10H15.8334"
      stroke={secondary ? '#fff' : '#022D83'}
      strokeWidth={1.4375}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.99997 4.16668L15.8333 10L9.99997 15.8333"
      stroke={secondary ? '#fff' : '#022D83'}
      strokeWidth={1.4375}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
