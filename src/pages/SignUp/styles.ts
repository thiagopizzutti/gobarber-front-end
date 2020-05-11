import styled from 'styled-components';
import SignUpBackgroundImg from '../../assets/bgimage.jpg';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 550px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #f4ede8;

    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, 'grey')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
