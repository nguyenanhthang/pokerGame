import Login from "../pages/auth/Login";
import Home from "../pages/Home/Home";
import config from "../config/config";
const PublishRouter=[
    {path:config.routes.login,component:Login},
    {path:config.routes.home,component:Home}
]
const privateRoutes:[] = [];
export {PublishRouter,privateRoutes}