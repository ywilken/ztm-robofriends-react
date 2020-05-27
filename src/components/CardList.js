import React, {Fragment} from 'react';
import Card from './Card';


function CardList({robots}) {
    // This code is used to test an error
    // if (true) {
    //     throw new Error('NOOOOOOO');
    // }

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