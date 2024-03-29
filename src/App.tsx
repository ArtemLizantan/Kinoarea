import { Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
