import React, { Component } from 'react';

import Button from '../../components/button';
import Input from '../../components/input';
import List from '../../components/list';


class App extends Component {

    state  = {
        input: ''
    };

    handleOnClick = () => {
        console.log('Clicou, óia!');
    }

    handleOnChange = (event) => {
        console.log('Inputu mudou!', event.target.value);
    }


    render() {
        return(
            <div>
                <List todoList ={[]} />
                <Input onChange={(event)=>this.handleOnChange(event)}></Input>
                <Button onClick={()=>this.handleOnClick()}> Adicionar</Button>
            </div>
        );
    }


}


export default App;