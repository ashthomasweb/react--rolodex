import React from 'react'

import './card.styles.css'

export const Card = (props) => (
    <div className="card-backing">
        <img alt="monster" src={`https://robohash.org/${props.monster.id + 20}?set=set2&size=180x180`}/>
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
        <p> {props.monster.company.catchPhrase} </p>

    </div>
)