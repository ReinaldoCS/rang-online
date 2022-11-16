import { useCart } from '../../hook/useCart';
import { BagIcon, Container, Content } from './styles';

export function Bag() {
  const { cart } = useCart();

  const totalItens = cart.length;

  return (
    <Container to="/carrinho">
      <BagIcon />
      <Content>
        <strong>Meu carrinho</strong>
        <span>{totalItens > 1 ? `${totalItens} itens` : `${totalItens} item`}</span>
      </Content>
    </Container>
  );
}
