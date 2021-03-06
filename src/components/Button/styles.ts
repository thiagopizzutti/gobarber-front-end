import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  border-radius: 10px;
  height: 56px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  font-weight: 500;
  width: 100%;

  margin-top: 20px;
  transition: linear 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
