import React, {Fragment} from 'react';
import Card from './Card';


function CardList({robots}) {
    const cardsArray = robots.map( robot => {
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
    })

    return (
        <Fragment>
            { cardsArray }
        </Fragment>
    );
}

export default CardList;