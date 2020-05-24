import React, {
    Component
} from 'react';

class Pramod extends Component {

    render() {

        return (<div>

            <span className={
                this.getBatchClasses()
            } > {
                    this.formatCount()
                } {
                    this.style
                } </span>  <button className="btn btn-secondary btn-sm m-2"
                    onClick={() => this.props.onIncrement(this.props.pramod)} >
                Increment </button>
            <button className="btn btn-secondary  btn-sm btn-danger"
                onClick={() => this.props.onDelete(this.props.pramod.id)}
            >
                Delete </button>

        </div>
        );
    }

    getBatchClasses() {
        let classes = "badge m-3 badge-";
        classes += this.props.pramod.value === 0 ?
            "warning " : "primary";
        return classes;
    }
    formatCount() {

        const {
            value
        } = this.props.pramod;
        return value === 0 ? "zero" : value;
    }


}

export default Pramod;


/* renderTags() {
        let tags = this.state.tags.length === 0 ?

            < h1 > there no tag</h1> :
            <ul> {this.state.tags.map(tag => <li>{tag}</li>)}</ul>;
        return tags;
        // const { tags } = this.state;
        //return tags.length === 0 ? <h1>there no tag</h1> :
        //  <ul> {this.state.tags.map(tag => <li>{tag}</li>)}</ul>;

        // let classes = "badge m-2 badge-";
        //classes += this.state.count === 0 ?
        //  "warning " : "primary";

/*   <p>
                {this.state.tags.length === 0 && "please insert new tags"}
                {this.renderTags()}
            </p> */




//tags += this.state.tags.length === 0 ?
// "there are no tags" : <ul> {this.state.tags.map(tag => <li >{tag}</li>)}</ul>;
//return tags;
//this.state.tags.length === 0 ? "there are no tags" : tags;
// if (this.state.tags.length === 0) return <p> there are no tags</p>
// return <ul> {this.state.tags.map(tag => <li>{tag}</li>)}</ul> */
//"tag1", "tag2", "tag3"