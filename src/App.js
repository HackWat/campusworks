// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Joblistings from "./components/joblistings/Joblistings";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/jobs">
            <Joblistings />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
