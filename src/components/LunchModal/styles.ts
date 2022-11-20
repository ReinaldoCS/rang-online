import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const Container = styled(Dialog.Overlay)`
  position: fixed;

  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  background-color: rgb(0 0 0 / 0.6);
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  /* bottom: 0; */

  width: 100%;
  max-width: 48rem /* 768px */;

  height: 90%;

  display: flex;
  justify-content: center;

  border-top-left-radius: 1.5rem /* 24px */;
  border-top-right-radius: 1.5rem /* 24px */;

  padding-top: 2rem /* 32px */;
  padding-bottom: 2rem /* 32px */;

  color: var(--gray-text);

  background-color: var(--white);

  @media (min-width: 640px) {
    top: 50%;
    left: 50%;

    /* transform: translateX(-50%); */
    /* transform: translateY(-50%); */
  }
`;
