// import React, { Fragment } from 'react';
import React from 'react';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import SearchBox from './components/SearchBox';
import ErrorBoundary from './components/ErrorBoundary';
import 'tachyons';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState( {robots: users}));
    }

    onSearchChange = (e) => {
        this.setState( {searchField: e.target.value})
    }
    
    render() {
        const { robots, searchField } = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())}
            );
        // The following code is used in case our fetch request takes more time
        if (!robots.length) {
            return <h1>Loading...</h1>
        } else {
            return(
                <div className='tc'>
                    <h1 className='f1' style={{color: '#0ccac4', fontFamily: 'monospace', fontSize: '5em'}}>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;

// onSearchChange = (e) => {
//     // console.log(e.target.value);
//     const filteredRobots = this.state.robots.filter(robot => {
//         return robot.name.toLowerCase().includes(e.target.value.toLowerCase()) ? robot : ''
//     }
//         );
//     e.target.value ? this.setState({robots: filteredRobots}) : this.setState({robots: robots});
// }