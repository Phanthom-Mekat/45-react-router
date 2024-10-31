import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const UserDetails= useLoaderData()
    const {name, email} = UserDetails
    return (
        <div>
            <h3>User Details: {name}</h3>
            <p>{email}</p>
        </div>
    );
};

export default UserDetails;