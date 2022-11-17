import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '637308177653ba5d89cb02e6',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668476733478-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '637308177653ba5d89cb02e7'
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1668481707671-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '637308177653ba5d89cb02e8'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}

