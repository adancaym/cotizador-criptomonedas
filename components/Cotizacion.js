import React from 'react';
import {Text, StyleSheet, View} from 'react-native';


const Cotizacion = ({resultado}) => {
    if (Object.keys(resultado).length === 0) {
        return null;
    }
    return (
        <View style={styles.resultado}>
            <Text style={[styles.text,styles.precio]}>
                <Text style={styles.span}>{resultado.PRICE}</Text>
            </Text>
            <Text style={styles.text}>
                Precio más alto del día: {' '}
                <Text style={styles.span}>{resultado.HIGHDAY}</Text>
            </Text>
            <Text style={styles.text}>
                Precio más bajo del día: {' '}
                <Text style={styles.span}>{resultado.LOWDAY}</Text>
            </Text>
            <Text style={styles.text}>
                Variación ultimas 24 horas: {' '}
                <Text style={styles.span}>{resultado.CHANGEPCT24HOUR} %</Text>
            </Text>
            <Text style={styles.text}>
                Última actualización: {' '}
                <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({

    resultado: {
        backgroundColor: "#5E49E2",
        padding: 20
    },
    text: {
        color: '#FFF',
        fontSize: 18,
        marginBottom: 10,
    },
    precio: {
        textAlign: 'center',
        fontSize: 38
    },
    span: {
        fontWeight: 'bold'
    },
});

export default Cotizacion;
