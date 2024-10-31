import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>navbar</h1>
            <nav>
                
                <Link to="/">    Home    </Link>
                <Link to="/users"> users </Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;