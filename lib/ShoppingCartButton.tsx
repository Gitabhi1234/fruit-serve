import { IconButton } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import "../components/shared/Header/menu.css";

const ShoppingCartButton = () => (
  <IconButton
    aria-label="Shopping Cart"
    variant="outline"
    size="lg"
    
    className="cart-button"
  >
    <FaShoppingCart  />
    </IconButton>
);

export default ShoppingCartButton;
