import { Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Footer from "./components/footer/Footer";
import { ROUTES } from "./routes";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import InfoCard from "./screens/moviePage/MoviePage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={`${ROUTES.MOVIE}/:id`} element={<InfoCard />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
