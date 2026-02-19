import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cantidad } = useContext(CartContext)

    return (
        <Button variant="success">
            🛒Mi Carrito <Badge bg="primary">{cantidad()}</Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
    );
};

export default CartWidget;