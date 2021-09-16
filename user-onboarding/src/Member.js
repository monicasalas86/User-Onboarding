import React from 'react'

function Member({details}) {
    if(!details){
        return <h3>fetching members</h3>
    }
    return(
        <div className='member-container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
        </div>
    )
}

export default Member;