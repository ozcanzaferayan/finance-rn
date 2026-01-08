import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMaster = (props: SvgProps) => <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 29" {...props}><Path fill="#fff" d="M32.881 28.72c8.072 0 14.616-6.43 14.616-14.36S40.953 0 32.88 0 18.266 6.43 18.266 14.36s6.543 14.36 14.615 14.36" opacity={0.6} /><Path fill="#fff" d="M14.616 28.723c8.071 0 14.615-6.429 14.615-14.36S22.687.003 14.616.003 0 6.433 0 14.363c0 7.931 6.544 14.36 14.616 14.36" /></Svg>;
export default SvgMaster;