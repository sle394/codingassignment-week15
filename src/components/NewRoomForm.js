import React, { useState } from 'react';

export const NewRoomForm = (props) =>  {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    //for area
    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    //adding the rooms on submit
    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('Invalid input');
        }
    };

    //create
    return (//everytime text changes, this name value gets updated 
        <div className="py-3">
            <h4>ADD A NEW ROOM</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    className='form-control my-3'
                    placeholder='Name of the room'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type='text'
                    className='form-control my-3'
                    placeholder='Area of the room'
                    onChange={handleAreaInput}
                    value={area}
                />
                <br />
                <button className="btn btn-primary form-control" type='submit'>Add Room</button>
            </form>
        </div>
    )
};