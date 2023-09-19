import { Component } from "react";

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        //la manito que cambia el cursor
        cursor: 'pointer',
    }
}
class Button extends Component {
    render() {
        return(
            //le está pasando el onclick y todo lo que tiene cuando lo llamas
            <button style={styles.button} {...this.props}/>
        )
    }
}

export default Button