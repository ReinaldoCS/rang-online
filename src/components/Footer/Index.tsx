import { Container, Content, ImgContainer, Text } from './styles';

export function Footer() {
  return (
    <Container>
      <Content>
        <ImgContainer>
          <img src="/icon.svg" alt="Rango" />
        </ImgContainer>

        <Text className="text-gray-400 text-xs mt-4 sm:mt-0">
          © 2022 RANGONLINE. Todos os direitos reservados.
        </Text>
      </Content>
    </Container>
  );
}
