import { BrowserRouter, Route, Routes } from "react-router-dom"
import MenuBar from "./components/Menubar"
import NavBar from "./components/NavBar"
import "./index.css"
import Home from "./pages/Home"
import Video from "./pages/Video"
import Signup from "./pages/Signup"
import Login from "./pages/Login"


export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex">
            <MenuBar />
          <div className="flex-7 bg-[#202020ec]"  >
            <NavBar />
            <Routes >
              <Route path="/">
                <Route index element={<Home type="random"/>} />
                <Route path="trends" element={<Home type="trend"/>} />
                <Route path="subscriptions" element={<Home type="sub"/>} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
                <Route path="register" element={<Signup />} />
                <Route path="login" element = {<Login />} />
              </Route>
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </>
  )
}
