import { NavLink, Outlet } from 'react-router-dom';
import './Menu.css';

const MenuPublico = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand custom-navbar-brand" aria-current="page" exact="true" to="/">Estuda Fácil 📚</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" exact="true" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" exact="true" to="/login">Login</NavLink>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
};

export default MenuPublico;