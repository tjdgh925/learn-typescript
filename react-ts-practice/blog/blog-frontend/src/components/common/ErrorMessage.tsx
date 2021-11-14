import React from 'react';
import styled from 'styled-components';

const ErrorMessageText = styled.h2`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

interface Props {
  children: React.ReactChild;
}

const ErrorMessage = ({ children }: Props) => {
  return <ErrorMessageText>{children}</ErrorMessageText>;
};

export default ErrorMessage;
