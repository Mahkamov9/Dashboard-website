import Home from "../Lib/Svgs/Home";
import Logo from "../Lib/Svgs/Logo";
import "./Sidebar.scss"
import {Link} from "react-router-dom"; 

//images


const Sidebar = ()=>{
  return(
    <div className="sidebar">
      <a className="logo" href="#">
        <Logo/> 
      </a>

      <ul className="sidebar__list">
        <li className="sidebar__item">
          <Link to="/"  activeClassName="sidebar__link-active" className="sidebar__link" >
            <span className="sidebar__link-item">
              <Home/>
            </span>
            </Link>
        </li>

        <li className="sidebar__item">
          <Link to="/discount"  activeClassName="sidebar__link-active" className="sidebar__link" >
            <span className="sidebar__link-item">
              <Home/>
            </span>
            </Link>
        </li>

        <li className="sidebar__item">
          <Link to="/graph"  activeClassName="sidebar__link-active" className="sidebar__link" >
            <span className="sidebar__link-item">
              <Home/>
            </span>
            </Link>
        </li>

        <li className="sidebar__item">
          <Link to="/order"  activeClassName="sidebar__link-active" className="sidebar__link" >
            <span className="sidebar__link-item">
              <Home/>
            </span>
            </Link>
        </li>

        <li className="sidebar__item">
          <Link to="/notification"  activeClassName="sidebar__link-active" className="sidebar__link" >
            <span className="sidebar__link-item">
              <Home/>
            </span>
            </Link>
        </li>

        <li className="sidebar__item">
          <Link to="/settings"  activeClassName="sidebar__link-active" className="sidebar__link" >
            <span className="sidebar__link-item">
              <Home/>
            </span>
            </Link>
        </li> 
        
      </ul>

      <button className="sidebar__btn">
        <Home/>
      </button>

    </div>
  )
}


export default Sidebar;