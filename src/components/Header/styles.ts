import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--gray-500);
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 90%;
  max-width: 64rem /* 1024px */;

  padding-top: 2rem /* 32px */;
  padding-bottom: 4rem /* 64px */;

  @media (min-width: 640px) {
    align-items: center;
  }

  @media (min-width: 768px) {
    padding-bottom: 2rem /* 32px */;
  }
`;

export const Logo = styled(Link)`
  width: 41%;

  max-width: 168px;
`;
