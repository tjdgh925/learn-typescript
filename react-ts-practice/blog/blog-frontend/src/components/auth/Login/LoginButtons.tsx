import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface LoginButtonsProps {
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const buttonStyle = css<{ color?: string }>`
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  outline: none;
  cursor: pointer;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  width: 100%;
  font-size: 1.125rem;
  background: ${(props) => (props.color ? props.color : 'gray')};
  &:hover {
    background: black;
  }
`;

const ButtonsBlock = styled.div``;

const StyledButton = styled.button`
  ${buttonStyle}
  margin-bottom: .8rem;
`;

const LoginButtons = ({ onSubmit }: LoginButtonsProps) => {
  return (
    <ButtonsBlock>
      <StyledButton color={'green'} onClick={onSubmit}>
        로그인
      </StyledButton>
      <Link to="/register">
        <StyledButton>회원가입</StyledButton>
      </Link>
    </ButtonsBlock>
  );
};

export default LoginButtons;
