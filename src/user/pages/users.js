import React from "react";
import UsersList from "../components/UserList";

const Users = () =>{
    const USERS = [
        {
            id: 'u1',
            name: 'Satakshi Bhadwal',
            image:
            'https://images.pexels.com/photos/28336666/pexels-photo-28336666/free-photo-of-a-woman-sitting-on-a-tree-branch-reading-a-book.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            places: 3
        }
    ]
    return (
        <div>
            <UsersList items={USERS}/>
        </div>
    )
};

export default Users;