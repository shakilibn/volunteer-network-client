import React from 'react';

const Event = ({event}) => {
    const handleDelete = id => {
        
    }
    return (
        <div className="col-md-3">
            <img style={{height:'300px'}} src={event.imageURL} alt=""/>
            <h3>{event.name}</h3>
            <button onClick={() => handleDelete(event._id)}>Delete</button>
        </div>
    );
};

export default Event;