import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import ArticlesList from "./pages/ArticlesList";

//Component
import Appbar from "./components/Appbar"
function App() {

  return (
    <Router>
      <Appbar/>
      <Routes path="*">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles/:name" element={<Articles />} /> 
        <Route path="/articles-list" element={<ArticlesList />} />
      </Routes>
    </Router>
  )
}

export default App
