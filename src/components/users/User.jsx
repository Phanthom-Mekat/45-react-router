import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { name, email, username,id } = user
    return (
        <div style={
            {
                border: "1px solid red",
                padding: "10px",
                margin: "10px"
            }
        }>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{username}</p>
            <Link to={`/users/${id}`}>Details</Link>
        </div>
    );
};

export default User;