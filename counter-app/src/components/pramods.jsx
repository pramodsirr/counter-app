import React, { Component } from 'react';
import Pramod from './pramod';
class Pramods extends Component {

    render() {
        const { onReset, counters, onDelete, onIncrement } = this.props;
        return (<div>
            <button
                onClick={onReset}
                className="btn btn-primary btn-sm m-2"
            >

                Reset
            </button>
            {counters.map(pramod =>
                <Pramod
                    key={pramod.id}
                    pramod={pramod}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                />

            )}
        </div>);
    }
}

export default Pramods;