import './Header.css'
import { Link } from 'react-router-dom'
const Header = ({theme}) => {
  const[isdark , setIsdark] = theme
  // console.log(localStorage.getItem('isDarkMode'));

  // if(isdark){
  //   document.body.classList.add('dark')
  // }else{
  //   document.body.classList.remove('dark')
  // }

  return (
    <header className={`header-container ${isdark ? 'dark' : ''} `}>
      <div className='headerBox'>
        <h2 className='title'>
           <Link to="/">Where in the world?</Link>
        </h2>
        <p onClick={()=>{  
          setIsdark(!isdark);
          localStorage.setItem('isDarkMode', !isdark)
        }}>
          <span>
            <i className={`fa-solid fa-${isdark ? 'sun' : 'moon' }`}></i>
          </span>{" "}
          &nbsp;{isdark ? 'Light' : 'Dark'}Mode
        </p>
      </div>
    </header>
  );
};

export default Header;
