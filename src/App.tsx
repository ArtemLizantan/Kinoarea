import { Route, Routes, useLocation } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Footer from "./components/footer/Footer";
import { ROUTES } from "./routes";
import Spinner from "./components/spinner/Spinner";

// Использование React.lazy для ленивой загрузки компонентов
const Home = React.lazy(() => import("./screens/home/Home"));
const Login = React.lazy(() => import("./screens/login/Login"));
const Register = React.lazy(() => import("./screens/register/Register"));
const InfoCard = React.lazy(() => import("./screens/moviePage/MoviePage"));
const Cabinet = React.lazy(() => import("./screens/cabinet/Cabinet"));
const Search = React.lazy(() => import("./screens/search/Search"));

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="wrapper">
      <Header />
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.REGISTER} element={<Register />} />
            <Route path={`${ROUTES.MOVIE}/:id`} element={<InfoCard />} />
            <Route path={ROUTES.CABINET} element={<Cabinet />} />
            <Route path={ROUTES.SEARCH} element={<Search />} />
          </Routes>
        </Suspense>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
