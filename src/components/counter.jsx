import React, { Component } from 'react';
class Counter extends Component {
    
    state = { 
        value: this.props.value 
     }; 

     checkTags(){
         if (this.state.tags.length===0) return <h4>There are no tags</h4>;
         return (
             <React.Fragment>
                <ul className='list-unstyled'>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
             </React.Fragment>
            
         );
     }

    classStyles(){
        let styles = 'btn  m-2 btn-'
        styles += (this.state.value===0) ? 'warning' : 'primary'
        return styles;
    } 

    handleIncrement = () => {
        this.setState({value :this.state.value += 1});
    }

    render() { 
        return (
            <div>
                <span className={this.classStyles()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }

    formatCount(){
        const {value: count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;