import Login from "../pages/auth/Login";
import Home from "../pages/Home/Home";
import ListPage from "../pages/List/ListPage";
import BoardPage from "../pages/board/BoardPage";
import config from "../config/config";
const PublishRouter=[
    {path:config.routes.login,component:Login,layout:null},
    {path:config.routes.home,component:Home},
    {path:config.routes.list,component:ListPage},
    {path:config.routes.board,component:BoardPage}
]
const privateRoutes:[] = [];
export {PublishRouter,privateRoutes}