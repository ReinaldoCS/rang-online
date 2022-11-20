import { DialogTrigger } from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const Container = styled(DialogTrigger)`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    padding: 0.5rem /* 8px */;
    margin-top: 1.75rem /* 28px */;

    border-radius: 0.5rem /* 8px */;

    background-color: var(--green-500);
  }
`;

export const Text = styled.span`
  display: none;
  color: var(--white);

  @media (min-width: 768px) {
    display: block;
    width: 100%;

    text-align: center;
    font-weight: 600;

    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;

  padding: 0.25rem /* 4px */;

  border-radius: 0.25rem /* 4px */;

  font-size: 1rem /* 16px */;
  line-height: 1.5rem /* 24px */;

  color: var(--white);
  background-color: var(--green-500);

  @media (min-width: 768px) {
    background-color: #3cc73c;
  }
`;
