import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const CartWidget = () => {
    return (
        <Button variant="success">
            🛒Mi Carrito <Badge bg="primary">9</Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
    );
};

export default CartWidget;