import React, { Component } from 'react';

class MyApp extends Component {
  state = {
    inputDescifrado: {
      value: '',
      result: 'hashtag navidad'
    },
    regalo: {
      mostrar: false,
      url: '/Estrellas.pdf',
      mensaje: 'HAS ENCONTRADO EL REGALO!'
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {value, result} = this.state.inputDescifrado;

    if(value.toLowerCase() === result.toLowerCase()) {
      this.setState(prev => {
        prev.regalo.mostrar = true;

        return prev;
      })
    }
  }

  onChange = (e) => {
    e.preventDefault();

    const value = e.target.value;
    console.log(value);
    this.setState(prevState => {
      prevState.inputDescifrado.value = value;

      return prevState;
    })
  }
  render = () => {
    return (
      <div>
        <h1>Encuentra el código para desbloquear el regalo</h1>

        <h3>lewlxek rezmheh</h3>

        <small>Pista: Cesar, clave 4(D)</small>
        <hr/>

        {
          this.state.regalo.mostrar ? (
            <div>
              <h2>HAS ENCONTRADO EL REGALO!</h2>

              imprime este pdf: <a href="/Estrellas.pdf">CLICK AQUI</a>
            </div>
          ) : (
            <form onSubmit={this.onSubmit}>
              Escribe el código de regalo:
              <input onChange={this.onChange} value={this.state.inputDescifrado.value}/>
              <button>Enviar</button>
            </form>
          )
        }

      </div>
    )
  }
}

export default MyApp;
