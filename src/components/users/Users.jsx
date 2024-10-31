import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const user = useLoaderData()
    return (
        <div style={{ border: "1px solid red", padding: "10px", margin: "10px", display: "flex", flexWrap: "wrap" }}>
            <h3>users {user.length}</h3>
            {
                user.map(u => <User key={u.id} user={u} />)
            }
        </div>
    );
};

export default Users;