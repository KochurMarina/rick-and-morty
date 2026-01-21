import Header from "./components/Header"
import Main from "./components/Main"
import Characters from "./pages/Characters"
import Locations from "./pages/Locations"
import Episodes from "./pages/Episodes"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/episodes" element={<Episodes />} />
          </Routes>
        </Main>
      </Router>


    </>
  )

}

export default App
