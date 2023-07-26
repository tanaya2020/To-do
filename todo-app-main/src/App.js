import "./App.css";
import Quotes from "./Modules/Quotes";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import AuthorQuote from "./Modules/AuthorQuote";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quotes />}></Route>
          <Route path="/author/:authorName" element={<AuthorQuote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
