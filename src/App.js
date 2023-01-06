import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Autentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { handleAuthStateChange } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.slice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = handleAuthStateChange((user) => {
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Autentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
