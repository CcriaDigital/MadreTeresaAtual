import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Formulario from "./pages/Formulario";
import Home from "./pages/home";

const router =createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/campanha1",
        element:<Formulario/>
    }

])

export default router