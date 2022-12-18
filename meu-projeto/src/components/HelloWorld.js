
import React, { Component } from 'react';
class HelloWorld extends Component {
    render() {
        let nome = 'Antonio Carlos'
            return(
                <div>
                    <h1>Meu primeiro componente</h1>
                    <p>Eu sou {nome} em breve um programador </p>
                </div>
            )
        
    }
  }
export default HelloWorld;