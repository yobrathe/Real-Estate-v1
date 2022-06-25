import React from 'react';

const ErrorComponent = () => {
    <div>{props.ignore}</div>
}

export default class Counter extends React.Component {
    constructor (props) {
        console.log('Constructor')
        super(props)

        this.state = {
            counter: 0,
            seed: 0,
            initializing: true,
            width: window.innerWidth,
        }

        this.increment = () => this.setState({
            counter: this.state.counter + 1
        })
        
        this.decrement = () => this.setState({
            counter: this.state.counter - 1
        })
    }

    static getDerivedStateFromProps(props, state) {
        if(props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null
    }

    componentDidMount() {
        // An interesting place to do things like network requests
        // or handle the initial loading of the component
        console.log('Component Did Mount')
        setTimeout(() => {
            this.setState({
                initializing: false
            })
        }, 500);
        console.log("----------")
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.ignoreProp && 
            this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log("Should Component Update - DO NOT RENDER")
            console.log("----------")
            return false
        }

        console.log("Should Component Update - RENDER")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Get Snapshot Before Update")
        return null
    }

    render () {
        console.log('Render')

        if(this.state.initializing) {
            return <div>"Initializing..."</div>
        }

        if(this.props.showErrorComponent && this.state.error) {
        return <div>We have encountered an error! {this.state.error.message}</div>
        }

        return <div>
            <button onClick={this.increment}>Increment</button>
            <br />
            <br />
            <button onClick={this.decrement}>Decrement</button>
            <div className='counter'>
                <h2>Counter: {this.state.counter}</h2>
            </div>
            {this.props.showErrorComponent ? <ErrorComponent/> : null}

            <fieldset>
                <label value="Width">
                    {this.state.width}
                </label>
            </fieldset>
        </div>
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component Did Update")
        console.log("----------")
    }

    componentWillUnmount() {
        console.log("Component Will Unmount")
        console.log("----------")
    }

    componentDidCatch(error, info) {
        console.log("Component Did Catch")

        this.setState({error, info})
    }
}           