import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "../layout";
import Login from "../pages/login";
import Home from "../pages/home";
import { handleAlbumsAction } from "../actions/albums";
import PrivateRoute from "./privateRouter";
import { handleTokenApi } from "../actions/token";
import { handleLoader } from "../loader";

const RouterPaths = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index Component={Login} action={handleTokenApi}/>
            <Route element={<PrivateRoute />} loader={handleLoader}>
                <Route path="/home" Component={Home} loader={handleAlbumsAction}/>
            </Route>
        </Route>
    )
)
export default RouterPaths;