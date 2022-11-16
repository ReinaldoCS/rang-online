import { Link } from 'react-router-dom';

import { Bag } from '../Bag';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Link to="/" className="w-5/12 max-w-[168px]">
          <img src="/logo.svg" alt="Rango" />
        </Link>
        <Bag />
      </Content>
    </Container>
  );
}
