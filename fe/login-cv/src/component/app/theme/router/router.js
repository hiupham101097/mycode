import { Route, Routes, useNavigate } from 'react-router-dom';
import { memo } from 'react';
import RouterCustom from '../../../../router';
import App from '../../app';
import { ROUTERS } from '../../../ultil/router';
import HomePage from '../../manager/home/home';
import Login from '../../../login/login';




function getCookie(cookie) {
    let value = cookie.split(';');
    console.log('cookie : ', value);
    return value[0] == "" || value[0] == undefined || value == "undefined" ? null : value[0];

}
function RouterOutlet() {

    const userRouter = [
        {
            path: ROUTERS.USER.LOGIN,
            component: <Login />
        },
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        }
        , {
            path: ROUTERS.USER.App,
            component: <HomePage />
        }
    ]

    const token = getCookie(document.cookie);
    const navigate = useNavigate();
    var test = window.location.pathname.startsWith("/");
    if (token != null && token != "NaN") {
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
    if (window.location.pathname.startsWith("/login")) {
        return navigate("/login");
    }


}
export default memo(RouterOutlet);