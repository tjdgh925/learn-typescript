import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginFooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
`;

const CheckBoxBlock = styled.div`
  display: flex;
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  border-radius: 5px;
  color: red;
  & + span {
    padding-left: 0.5rem;
  }
`;

const FindBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  & + & {
    padding-left: 1rem;
  }
`;

const LoginFooter = () => {
  const [check, setCheck] = useState<boolean>(false);
  return (
    <LoginFooterBlock>
      <CheckBoxBlock>
        <Checkbox
          checked={check}
          onClick={() => {
            setCheck((check) => !check);
          }}
        />
        <span>아이디 저장</span>
      </CheckBoxBlock>
      <FindBlock>
        <StyledLink to="/">아이디 찾기</StyledLink>
        <StyledLink to="/">비밀번호 찾기</StyledLink>
      </FindBlock>
    </LoginFooterBlock>
  );
};

export default LoginFooter;
