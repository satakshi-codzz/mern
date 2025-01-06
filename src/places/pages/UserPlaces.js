import React from "react";
import { useParams                                                                                                                                     } from 'react-router-dom';
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
            id: 'p2',
            title: 'Statue Of Unity',
            description: 'The Statue of Unity is the world tallest statue, with a height of 182 metres, near Kevadia in the state of Gujarat, India. It depicts Indian politician and independence activist Vallabhbhai Patel, who was the first deputy prime minister and home minister of independent India and an adherent of Mahatma Gandhi.',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNj1ZN0O-2oDw2AP5saKcJZzQyxayA32ahUrjj0=w408-h279-k-no',
            address: 'Statue of Unity Rd, Kevadia, Gujarat 393155',
            location: {
                lat: 21.8449531,
                lmg: 73.7097611
            },
            creator: 'u2'
        }
    ]
    const userId = useParams().userId; //output u1, u2 from the url 
    const loadedPlaces = Dummy_places.filter(place => place.creator === userId); // Output: it filters the place information according user id
    console.log(loadedPlaces);
    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces;