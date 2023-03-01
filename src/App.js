import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewNavbar from "./components/NewNavbar/NewNavbar";
import Footer from "./components/Footer/footer";
import Router from "./router";

function App() {
  return (
    <div className="App">
      <div className="mainbox">
        <NewNavbar />
      </div>
      <div className="welcome">
        <Router />
      </div>
      <div className="wrap">
        <Footer />
      </div>
    </div>
  );
}

export default App;
