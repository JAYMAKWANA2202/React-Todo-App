import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewNavbar from "./components/NewNavbar/NewNavbar";
import Footer from "./components/Footer/footer";
import MainRouter from "./router";

function App() {
  return (
    <div className="App">
      <div className="mainbox">
        <NewNavbar />
      </div>
      <MainRouter />
      <div className="wrap">
        <Footer />
      </div>
    </div>
  );
}

export default App;
