import "./App.css";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";

function App() {
  return (
    <div className="min-h-screen max-w-screen flex flex-col bg-background ">
      <div className="border-b">
        <Header />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
