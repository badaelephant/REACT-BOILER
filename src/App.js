import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import Nav from "./nav/Nav";
import "./App.css";
function App() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <nav>
        <Nav />
      </nav>
      <section>
        <Main />
        <Footer />
      </section>
    </div>
  );
}

export default App;
