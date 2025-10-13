import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <Header />
      <TopBar />
      <AppRoutes />
    </>
  );
}

export default App;
