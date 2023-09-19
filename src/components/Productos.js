import { Component  } from "react";
import Producto from './Producto'
const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props
        return (
            <div style={styles.productos}>
                {productos.map(producto =>
                //importamos el componente en lugar de definirlo cada vez
                    <Producto
                        agregarAlCarro = {agregarAlCarro}
                        key = {producto.name}
                        producto={producto}
                    />)}
            </div>
        )
    }
}

export default Productos