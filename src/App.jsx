import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Navigation Header */}
        <Header></Header>

        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/:id" element={<Home></Home>}></Route>
          {/* Video Upload Page */}
          <Route
            path="/videoupload"
            element={<VideoUpload></VideoUpload>}
          ></Route>
          {/* Page not found */}
          <Route path="*" element={<h1>No path found</h1>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
