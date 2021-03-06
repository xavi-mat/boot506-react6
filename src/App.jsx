
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { GlobalProvider } from "./context/GlobalState";
import Home from "./components/Home/Home";
import NewsList from "./components/NewsList/NewsList";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="container">
          <GlobalProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news-list" element={<NewsList />} />
              <Route path="/form" element={<Form />} />
            </Routes>
          </GlobalProvider>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
