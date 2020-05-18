
counter
import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: this.props.value
    };
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    };
    render() {
        return (
            <div>
                <span className={this.getBatchClasses()}> {this.formatCount()} </span>
                <button className="btn btn-secondary btn-sm"
                    onClick={this.handleIncrement}
                > Increment</button>
            </div>
        );
    }
    getBatchClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ?
            "warning" : "primary";
        return classes;
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? "zero" : count;
    }
}

export default Counter;
counters
import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };
    render() {
        return (
            <div>
                {this.state.counters.map(counter => (
                    <Counter key=
                        {counter.id} value={counter.value}

                    />
                ))}
            </div>

        );
    }
}

export default Counters;