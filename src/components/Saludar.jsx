import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default function Saludar( { nombre } ) {

    // const { nombre } = props;

    return (
        <View>
            <Text> Hola: {nombre} </Text>
        </View>
    )
}

Saludar.defaultProps = {
    nombre: 'vacio',
};

Saludar.propTypes = {
    nombre: PropTypes.string.isRequired,
}