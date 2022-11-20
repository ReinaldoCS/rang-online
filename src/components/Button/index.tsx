import { Container, IconContainer, Text } from './styles';

interface ButtonProps {
  text: string;
  icon: JSX.Element;
}

export function Button({ text, icon }: ButtonProps) {
  return (
    <Container>
      <Text>{text}</Text>
      <IconContainer>{icon}</IconContainer>
    </Container>
  );
}
