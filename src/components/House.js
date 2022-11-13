import React from 'react';
import {NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomID) => { //find room and update house
        const updatedHouse = {
            ...house, //spread the house to find the room
            rooms: house.rooms.filter((x) => x._id !== roomID)
        };
        updateHouse(updatedHouse); //will call http request to update
    }

    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room]}); //new array that takes all the values from the old array and adding a new room to it
    
    const updateRoom = (roomID) => { //find room and update room name
        let currentRoom;
        let name = document.getElementById(roomID).value;
        for (let i = 0; i < house.rooms.length; i++) {
           currentRoom = house.rooms[i];
           if (currentRoom._id == roomID) {
                currentRoom.name = name
                break;
           }
        }
       

        updateHouse(house);
    }


    //delete
    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li className="my-3" key={index}>
                   
                    <label>
                        <input type='text' id={room._id} className='form-control my-3' placeholder='Name of the room' defaultValue={room.name}/>
                        {`Room Area: ${room.area}`}
                    </label>
                    <button className="btn btn-danger mx-2 btn-sm" onClick={(e) => deleteRoom(room._id)}>Delete</button>
                    <button className="btn btn-secondary mx-1 btn-sm" onClick={(e) => updateRoom(room._id)}>Edit</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <h2>{house.name}</h2>
            {
                rooms({ rooms, houseId: house._id, deleteRoom }) //rooms is a function and is taking the props of room and has houseId and can call deleteRoom itself
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );
};