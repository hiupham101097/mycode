import { memo } from 'react';
import './app.css';
import Header from './theme/header/header';
import Footer from './theme/footer/footer';
import HomePage from './manager/home/home';
// import './theme/footer/footer';
function getCookie(cookie) {
    let value = cookie.split(';');
    console.log('cookie : ', value);
    return value[0] == "" || value[0] == "NaN" || value[0] == undefined || value == "undefined" ? null : value[0];

}

const App = ({ children, ...props }) => {
    var token = getCookie(document.cookie);
    return (
        <div {...props}>
            <Header />
            {token != null ? <HomePage /> : children}
            <Footer />
        </div>
    );
}

export default memo(App);