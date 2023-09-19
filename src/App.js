import { Component } from 'react'
import Productos from './components/Productos'
//lo creamos para que nuestra tienda no ocupe el 100% de la pantalla
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'

class App extends Component {
  // nuestro estado inicial va a contener los productos
  state = {
    productos: [
      { name: 'Tomate', price: '1500', img: '/productos/tomate.png' },
      { name: 'Arvejas', price: '2500', img: '/productos/arvejas.png' },
      { name: 'Lechuga', price: '500', img: '/productos/lechuga.png' },
    ],
    carro: [

    ],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if(carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x, //devuelvo el producto tal cual pero
          cantidad: x.cantidad + 1
        })
        : x)
        return this.setState({carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad:1,
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length) {
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible})
  }

  render() {
    const { esCarroVisible } = this.state
    return (
      <div>
        <Navbar 
          carro={this.state.carro} 
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro = {this.agregarAlCarro}
            productos = {this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
