import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';

const Header = () => {
    return (
        <>
            <Text style={styles.encabezado}>Criptomonedas</Text>
            <Image style={styles.imageEncabezado}  source={require('../assets/bg.jpg')}/>
        </>
    );
};

const styles = StyleSheet.create({
    encabezado: {
        textAlign: 'center',
        paddingVertical: 10,
        fontWeight: 'bold',
        backgroundColor: '#5e49e2',
        textTransform: 'uppercase',
        marginBottom: 10,
        fontSize: 20,
        color: '#FFF'
    },
    imageEncabezado: {
        width: 393,
        height: 150,
        marginHorizontal: '2.5%'
    }
});

export default Header;
