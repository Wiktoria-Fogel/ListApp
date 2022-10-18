/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import Svg, {SvgProps, Path} from 'react-native-svg';

export function MagnifierIcon({fill = '#ADB5BD', size = 20, ...props}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.655 12.06h.659l3.533 3.55a.88.88 0 010 1.241.88.88 0 01-1.242 0l-3.541-3.541v-.659l-.225-.233a5.417 5.417 0 01-4.45 1.233c-2.317-.391-4.167-2.325-4.45-4.658a5.42 5.42 0 016.058-6.058c2.334.283 4.267 2.133 4.659 4.45a5.417 5.417 0 01-1.234 4.45l.233.225zM4.565 8.31a3.745 3.745 0 003.75 3.75 3.745 3.745 0 003.75-3.75 3.745 3.745 0 00-3.75-3.75 3.745 3.745 0 00-3.75 3.75z"
        fill={fill}
      />
    </Svg>
  );
}

export function CancelIcon(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.667 10A8.326 8.326 0 0110 1.667 8.326 8.326 0 0118.333 10 8.326 8.326 0 0110 18.333 8.326 8.326 0 011.667 10zm10.741 3.583a.83.83 0 001.175 0 .845.845 0 000-1.175L11.175 10l2.408-2.408a.83.83 0 10-1.175-1.175L10 8.825 7.592 6.417a.83.83 0 10-1.175 1.175L8.825 10l-2.408 2.408a.83.83 0 101.175 1.175L10 11.175l2.408 2.408z"
        fill="#585F66"
      />
    </Svg>
  );
}
