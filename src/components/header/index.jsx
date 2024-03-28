import { useState } from "react";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const {currentUser} = useSelector((rootReducer) => rootReducer.userReducer);

  const dispacth = useDispatch();

  console.log(currentUser)

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispacth({
      type:"user/login",
      payload:{name:"João"}
    })
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        <div onClick={handleLoginClick}>Login</div>
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
