import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "../layout";
import Login from "../pages/login";
import Home from "../pages/home";
import { handleAlbumsAction } from "../actions/albums";

const RouterPaths = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route index Component={Login}/>
            <Route path="/home" Component={Home} loader={handleAlbumsAction}/>
        </Route>
    )
)
export default RouterPaths;