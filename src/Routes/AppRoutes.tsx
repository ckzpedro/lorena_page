import { Route, Routes } from "react-router"
import About from "../Components/pages/About"
import Home from "../Components/pages/Home"

const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sobre" element={<About />}/>
            </Routes>
    )
}

export default AppRoutes