
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>

        <Header />
        <GlobalProvider>

        </GlobalProvider>
        <Footer />

    </>
  );
}

export default App;
