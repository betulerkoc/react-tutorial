import React, { Component } from 'react'
import {RoomContext} from '../context'
import Loading from './Loading';

export default class FeaturedRooms extends Component {
    
    static contextType = RoomContext;
    render() {
        //const value = this.context;
        const {featuredRooms: rooms} = this.context;
        console.log(rooms);
        return (
            <div>
                Featured Rooms
                <Loading/>
            </div>
        )
    }
}
 