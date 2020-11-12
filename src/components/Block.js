import React, { Component } from 'react';

class Block extends Component {
    render() {
        const { ListOfObjects, next, prev, reset } = this.props;
        const displayItem = ListOfObjects.elements[0].filter(element => {
            return ListOfObjects.currentpage === element.id;
        });
        return (
            <div className="container block white">
                <button className="btn left prev hide-on-small-only" onClick={() => { prev() }}>
                    <i className="material-icons">arrow_back</i> Prev</button>
                <button className="btn center reset hide-on-small-only" onClick={() => { reset() }}>Reset</button>
                <button className="btn right next hide-on-small-only" onClick={() => { next() }}>
                    Next<i className="material-icons">arrow_forward</i></button>
                <div className="text-content z-depth-3 left">
                    <h1 className="text red-text">{displayItem[0].title.slice(0,10)}</h1>
                   <p className="text flow-text">{displayItem[0].body.slice(0,150)}</p>
                </div>

            </div>
        )
    }
}

export default Block;