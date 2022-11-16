import { Tote } from 'phosphor-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  strong {
    color: var(--orange-500);
    display: none;

    font-weight: bold;

    @media (min-width: 640px) {
      display: block;
    }
  }

  span {
    color: var(--gray-400);
    font-size: 0.75rem /* 12px */;
    line-height: 1rem /* 16px */;

    @media (min-width: 640px) {
      font-size: 0.875rem /* 14px */;
      line-height: 1.25rem /* 20px */;
    }
  }

  @media (min-width: 640px) {
    text-align: right;
  }
`;

export const BagIcon = styled(Tote)`
  color: var(--orange-500);

  width: 2rem;
  height: 2rem;

  @media (min-width: 640px) {
    order: 2;
    padding-left: 0.5rem /* 8px */;
    width: 3.5rem /* 56px */;
    height: 3.5rem /* 56px */;
  }
`;
