import styled, { css } from 'styled-components';
type onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => void;
type onClick = () => void;

type functionType = onSubmit | onClick;

interface ButtonProps {
  children?: React.ReactChild;
  color?: string;
  onClick?: functionType;
  fullWidth?: boolean;
  fontColor?: string;
}

const buttonStyle = css<{
  color?: string;
  fullWidth?: boolean;
  fontColor?: string;
}>`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: gray;
  &:hover {
    background: black;
  }
  ${(props) =>
    props.fullWidth
      ? css`
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          width: 100%;
          font-size: 1.125rem;
        `
      : css`
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          width: 20%;
          font-size: 1.125rem;
        `}
  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
      &:hover {
        background: black;
      }
    `}
    ${(props) =>
    props.fontColor &&
    css`
      color: ${props.color};
    `}
  &:disabled {
    background: white;
    color: gray;
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const Button = ({
  children,
  color,
  onClick,
  fullWidth,
  fontColor,
}: ButtonProps) => {
  console.log(children);
  return (
    <StyledButton
      color={color}
      onClick={onClick}
      fontColor={fontColor}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
