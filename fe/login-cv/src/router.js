import { Route, Routes } from "react-router-dom";
import HomePage from "./component/app/manager/home/home";
import Login from "./component/login/login";
import App from "./component/app/app"
import { ROUTERS } from "./component/ultil/router";


const renderRouter = () => {

    const userRouter = [
        {
            path: ROUTERS.USER.LOGIN,
            component: <Login />
        },
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        }
    ]

    return (
        <App>
            <Routes>
                {
                    userRouter.map((item, key) => (<Route key={key} path={item.path} element={item.component} />))
                }
            </Routes>
        </App>
    )
}

const RouterCustom = () => {
    return renderRouter();
}

export default RouterCustom;