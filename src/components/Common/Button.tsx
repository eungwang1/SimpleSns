import { MouseEventHandler } from 'react';
import styled, { css, CSSProperties, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

type Size = 'sm' | 'md' | 'lg';
type Variant = 'primary' | 'default';

const SIZES: { [key in Size]: FlattenInterpolation<ThemeProps<DefaultTheme>> } = {
  sm: css`
    height: 28px;
    font-size: 0.875rem;
  `,
  md: css`
    height: 38px;
    font-size: 0.875rem;
  `,
  lg: css`
    height: 52px;
    font-size: 1rem;
  `,
};

const VARIANTS: { [key in Variant]: FlattenInterpolation<ThemeProps<DefaultTheme>> } = {
  primary: css`
    background-color: ${(props) => props.theme.palette.Primary01};

    border: none;
    color: white;
  `,
  default: css`
    background-color: white;
    border: 1px solid ${(props) => props.theme.palette.Gray02};
    color: ${(props) => props.theme.palette.Gray04};
  `,
};

interface ButtonProps {
  size?: Size;
  variant?: Variant;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  radius?: string;
  position?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  type?: 'button' | 'submit';
}

interface IStyledButton {
  sizeStyle?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  variantStyle?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  width?: string;
  height?: string;
  radius?: string;
  position?: string;
}

const Button = ({
  onClick,
  type = 'button',
  size = 'md',
  variant = 'default',
  children,
  width,
  height,
  radius,
  position,
  style,
}: ButtonProps) => {
  const variantStyle = VARIANTS[variant];
  const sizeStyle = SIZES[size];
  return (
    <StyledButton
      className="custombutton"
      {...{ style, onClick, type, sizeStyle, variantStyle, children, width, height, radius, position }}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<IStyledButton>`
  ${(p) => p.variantStyle};
  ${(p) => p.sizeStyle};
  width: ${(p) => p.width};
  position: ${(p) => p.position};
  height: ${(p) => p.height};
  border-radius: ${(p) => p.radius};
  flex-shrink: 0;
  opacity: 1;
  padding: 10px 12px;
  transition: opacity 0.7s;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  + button {
    margin-left: 4px;
  }
  :hover {
    opacity: 0.8;
  }
`;

export default Button;
