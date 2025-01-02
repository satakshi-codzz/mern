import React from "react";
import PlaceList from "../components/PlaceList";
const UserPlaces = () =>{
    const Dummy_places = [
        {
            id: 'p1',
            title: 'Taj Mahal',
            description: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.',
            imageUrl: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            address: 'No.1, Taj Mahal Hotel, South Block, Man Singh Road Area, New Delhi, Delhi 110011',
            location: {
                lat: 28.6047281,
                lmg: 77.2209206
            },
            creator: 'u1'
        },
        {
            id: 'p1',
            title: 'Taj Mahal',
            description: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.',
            imageUrl: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            address: 'No.1, Taj Mahal Hotel, South Block, Man Singh Road Area, New Delhi, Delhi 110011',
            location: {
                lat: 28.6047281,
                lmg: 77.2209206
            },
            creator: 'u2'
        }
    ]
    return <PlaceList items={Dummy_places}/>
}

export default UserPlaces;