import React, {Component} from 'react';



class AddPlayerForm extends Component{
    state = {
        value: '',
        
    }

    handleValueChange = (e) => {
        this.setState({value: e.target.value})
    }

    handleSubmit = (e) =>{
        var mainInput = document.querySelector('.mainInput');
        if (mainInput.value == "") {
            alert("enter a name");
            return;
        }
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({ value: ''});
    }

    render(){
        console.log(this.state.value);
        return (
            <form onSubmit = {this.handleSubmit}>
                <input 
                    type="text" 
                    className = "mainInput"
                    value={this.state.value}
                    onChange = {this.handleValueChange}
                    placeholder = "enter a name">
                </input>


                <input 
                    type="submit" 
                    value="add player">
                        
                </input>
            </form>
        );
    }
   
}
export default AddPlayerForm;

