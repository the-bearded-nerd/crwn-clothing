import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/signin/signin.component";
import Register from "./routes/register/register.component";
import Reset from "./routes/reset-password/reset.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import Autentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="register" element={<Register />} />
        <Route path="reset" element={<Reset />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="auth" element={<Autentication />} />
      </Route>
    </Routes>
  );
};

export default App;
