import React from "react";
import * as St from "./styles";
import {
  TTheme,
  TPropertiesCSS,
  ICompPrivateFlexProps,
  EWhiteSpace,
} from "../../doman";
import themeLocal from "../../theme";

export interface FlexProps {
  theme?: TTheme;
  children?: string | React.FC | any;
  label?: string | React.FC | any;
  color?: string | string[] | any;
  width?: string | number | string[] | number[] | any;
  height?: string | number | string[] | number[] | any;
  alignItems?: string | string[] | any;
  background?: string | string[] | any;
  backgroundColor?: string | string[] | any;
  borderBottomStyle?: string | string[] | any;
  borderBottomColor?: string | string[] | any;
  borderBottomWidth?: string | number[] | string[] | any;
  backgroundRepeat?: string | number | number[] | string[] | any;
  backgroundPosition?: string | string[] | any;
  backgroundSize?: string | number | number[] | string[] | any;
  backgroundImage?: string | number | number[] | string[] | any;
  cursor?: string | string[] | any;
  display?: string | string[] | any;
  flexDirection?: string | string[] | any;
  fontSize?: string | number | number[] | string[] | any;
  fontFamily?: string | string[] | any;
  letterSpacing?: string | number | number[] | string[] | any;
  position?: string | string[] | any;
  justifyContent?: string | string[] | any;
  transition?: string | string[] | any;
  textAlign?: string | string[] | any;
  textShadow?: string | string[] | any;
  px?: string | string[] | number | number[] | any;
  py?: string | string[] | number | number[] | any;
  p?: string | string[] | number | number[] | any;
  padding?: string | string[] | number | number[] | any;
  pt?: string | string[] | number | number[] | any;
  pr?: string | string[] | number | number[] | any;
  pb?: string | string[] | number | number[] | any;
  pl?: string | string[] | number | number[] | any;
  mx?: string | string[] | number | number[] | any;
  my?: string | string[] | number | number[] | any;
  margin?: string | string[] | number | number[] | any;
  m?: string | string[] | number | number[] | any;
  mt?: string | string[] | number | number[] | any;
  mr?: string | string[] | number | number[] | any;
  mb?: string | string[] | number | number[] | any;
  ml?: string | string[] | number | number[] | any;
  borderRadius?: string | string[] | any;
  border?: string | string[] | any;
  whiteSpace?: EWhiteSpace | EWhiteSpace[] | any;

  onHover?: TPropertiesCSS | TPropertiesCSS[] | any;
  onActive?: TPropertiesCSS | TPropertiesCSS[] | any;
}

const CompPrivate = (p: ICompPrivateFlexProps) => {
  return <St.Container {...p}>{p?.children || p?.label}</St.Container>;
};

const Flex = (props: FlexProps) => {
  const theme: TTheme = props?.theme || themeLocal;
  const component = <CompPrivate {...props} theme={theme} />;
  return component;
};

export default Flex;
