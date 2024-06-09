import { memo } from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'
import HomePage from '../../manager/home/home';

function getCookie(cookie) {
    let value = cookie.split(';');
    console.log('cookie : ', value);
    return value[0] == "" || value[0] == "NaN" || value[0] == undefined || value == "undefined" ? null : value[0];

}

function clearCookie() {
    debugger
    document.cookie.split(";").forEach(function (c) {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    localStorage.clear();
}


const Header = () => {
    const token = getCookie(document.cookie);

    const navigate = useNavigate();

    const handleClick = () => {
        debugger
        navigate('/login');
        // document.navigate('/login')
    };

    function handleSubmit(e) {
        handleClick();
    }
    function handleSubmitLogout(e) {
        document.cookie = clearCookie();
        debugger

        navigate('');
    }
    if (window.location.pathname.startsWith("/login") == false) {
        return (

            <div className="Header">
                <header className="Header-content">
                    <div class="container">
                        <div class="header-group">
                            {
                                window.location.pathname.startsWith("/home") == false && token == null && token == undefined ?
                                    <div class="">
                                        
                                        <button class="button type1" onClick={handleSubmit}> 
                                            <span class="btn-txt">Login
                                                <i class="margin-l-5 fa fa-key" ></i>
                                            </span>
                                        </button>
                                        <button class="button type2">
                                            <span class="btn-txt">Sign Up</span>
                                        </button>
                                    </div> :
                                    <div class="">
                                        <button class="button type1" onClick={handleSubmitLogout}>
                                            <span class="btn-txt">Logout
                                                <i class="margin-l-5 fa fa-key" ></i>
                                            </span>
                                        </button>
                                    </div>
                            }
                        </div>
                    </div>
                </header>
            </div>
    
        );
    }

}

export default memo(Header);