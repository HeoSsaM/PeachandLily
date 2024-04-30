import React from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-regular-svg-icons"; */

import { FaRegUser } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { Container } from 'react-bootstrap';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';


export const Navbar = () => {
    const { user } = useAuthContext();
    const {logout}=useLogout();

    const menuList = [
        'Shop All',
        'Peach & Lily',
        'Peach Slices',
        'Bestsellers',
        'Brands',
        'Glass Skin Serum',
        'Peach Perks'
    ]

    const navigate = useNavigate();

    const search = (event) => {
        //console.log('key down')
        //event.key=키보드 이벤트에서 키의 이름
        if (event.key === "Enter") {
            //console.log('we click this key', event.key)
            //입력한 검색어를 읽어와서
            let keyword = event.target.value; //리엑트에서 input의 값을 읽어올 때는 event.target.value
            //console.log('keyword', keyword)
            // url을 바꿔준다.
            navigate(`/?q=${keyword}`)

        }
    }
    return (
        <Container>
            {/* <div className="login_section" onClick={ gotoLogin }>
            <FontAwesomeIcon icon={faUser} />
            <FaRegUser /><span>로그인</span>
        </div> */}
            <div className="login_section">
                {/* 로그인이 되어있지 않은 경우 */}
                {
                    !user && (
                        <ul className='login_area'>
                            <li><Link to='/login'><FaRegUser /> SIGN IN</Link></li>
                            <li><Link to='/signup'><BiLogInCircle /> SIGN UP</Link></li>
                        </ul>
                    )
                }

                {/* 로그인이 되어있는 경우 */}

                {
                    user && (
                        <ul className='login_area'>
                            <li><strong>WELCOME!. {user.displayName}
                            </strong></li>
                            <li>
                                <button type="button" className="btn_logout" onClick={logout}>LOGOUT</button>
                            </li>
                        </ul>
                    )
                }
            </div>

            <div className="logo_section">
                <h1 className='logo'>
                    <Link to="/">
                        <img src="https://www.peachandlily.com/images/PeachLily_logo_416x60.png" alt="로고" />
                    </Link>
                </h1>
            </div>

            <div className="gnb_section">
                <ul className='gnb'>
                    {menuList.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
                <div className="search_area">
                    <label htmlFor="search" className='search_box'>
                        <FiSearch size="20" />
                        <input type="text" id="search" placeholder='제품검색'
                            onKeyDown={(event) => search(event)} />
                    </label>
                </div>
            </div>
        </Container>
    )
}
