import styled from 'styled-components';

export const Container = styled.footer`
  position: relative;

  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 1rem /* 16px */;
  padding-bottom: 1rem /* 16px */;

  background-color: var(--gray-500);

  @media (min-width: 640px) {
    padding-top: 2rem /* 32px */;
    padding-bottom: 2rem /* 32px */;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90%;

  max-width: 64rem /* 1024px */;

  @media (min-width: 640px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const ImgContainer = styled.div`
  width: 2.75rem /* 44px */;

  @media (min-width: 640px) {
    width: 3.5rem /* 56px */;
  }
`;

export const Text = styled.span`
  margin-top: 1rem /* 16px */;

  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16px */;

  color: var(--gray-400);

  @media (min-width: 640px) {
    margin-top: 0px;
  }
`;
