import React from 'react';
import { House } from './House';
import { housesApi } from '../rest/HouseApi';

export class HousesList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount() {
        this.fetchHouses();
    }

    fetchHouses = async () => {
        const houses = await housesApi.get(); //using the get method from houses api
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };

    //read
    render() {
        return (
            <div className="house-list">
                {this.state.houses.map((house) => ( //gonna map each house from state's houses
                    <House
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                    />
                ))}
            </div>
        )
    }
}