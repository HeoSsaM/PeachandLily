import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-regular-svg-icons"; */
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Container } from 'react-bootstrap';


export const Navbar = ({ authenticate, setAuthenticate }) => {
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
    const gotoLogin = () => {
        navigate('/login');
    }
    
<<<<<<< HEAD
    const onCheckEnter = (event) => {
        if (event.key === "Enter") {
          navigate(`?q=${event.target.value}`);
        }
      };
    /* const search = (event) => {
=======
    const search = (event) => {
>>>>>>> 389333e16ef76a58ad5d0a7dae121f1ca057e4a8
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
<<<<<<< HEAD
    } */
=======
    }
>>>>>>> 389333e16ef76a58ad5d0a7dae121f1ca057e4a8
    return (    
    <Container>
        {/* <div className="login_section" onClick={ gotoLogin }>
            <FontAwesomeIcon icon={faUser} />
            <FaRegUser /><span>로그인</span>
        </div> */}
        <div className="login_section">
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FaRegUser />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FaRegUser />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}

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
                {menuList.map((menu, index)=>(
                    <li key={ index }>{ menu }</li>
                ))}
            </ul>
            <div className="search_area">
                <label htmlFor="search" className='search_box'>
                    <FiSearch size="20" />
<<<<<<< HEAD
                    <input type="text" placeholder="제품검색" onKeyPress={onCheckEnter} />
=======
                    <input type="text" id="search" placeholder='제품검색' 
                    onKeyDown={(event)=> search(event) } />
>>>>>>> 389333e16ef76a58ad5d0a7dae121f1ca057e4a8
                </label>
            </div>
        </div> 
    </Container>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> 389333e16ef76a58ad5d0a7dae121f1ca057e4a8
