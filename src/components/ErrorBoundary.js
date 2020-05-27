import React from 'react';

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
        // Error Information:
        console.log('Error:')
        console.log(error)
        console.log('Error location:')
        console.log(info)
    }


    render() {
        if (this.state.hasError) {
            return <h1>Ooooops. There was an error.</h1>
        }
        return this.props.children
    }
}


export default ErrorBoundary;