import React, { Component } from 'react';
class Counter extends Component {
    
    state = { 
        count: 0, 
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
        styles += (this.state.count===0) ? 'warning' : 'primary'
        return styles;
    } 

    handleIncrement = () => {
        this.setState({count :this.state.count += 1});
    }

    render() { 
        return (
            <React.Fragment>
                <span className={this.classStyles()}>{this.formatCount()}</span>
                <button onClick={()=>{this.handleIncrement}}>Increment</button>
            </React.Fragment>
        );
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;