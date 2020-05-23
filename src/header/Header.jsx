import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
         <div >
            
             <header id="header">
			    <Link class="logo" to={'/'}>Gyrfa Job Board</Link>
				<nav>
                
                    <Link to={'/'}>Home</Link>
					<Link to={'/user'}>Sign up </Link>
					<Link to={'/add'}>Create Job</Link>
				
				</nav>
			</header>
        </div>
    )
};

export default Header;