import React from 'react';
import './UserList.css';
import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';

const UsersList = props =>{
    if(props.items.length === 0){
        return 
        (
            <div className='center'>
                <Card>
                    <h2>No User Data Found</h2>
                </Card>
            </div>
        
        )
    };
    return(
        <ul>
        {
            props.items.map(user =>{
                return <UserItem 
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places}
                />
            })
        }
        </ul>
    );
};

export default UsersList;