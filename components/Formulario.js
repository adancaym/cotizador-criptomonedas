import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import axios from  'axios';

import {
    Text,
    StyleSheet,
    Alert,
    View,
    TouchableHighlight
} from 'react-native';

const Formulario = ({moneda, criptoMoneda, setMoneda, setCriptoMoneda, setConsultarApi}) => {

    const [criptoMonedas, setCriptoMonedas] = useState([])


    useEffect( () => {
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url).then(r => r.data.Data)
            setConsultarApi(false)
            setCriptoMonedas(resultado)
        }
        consultarApi();
    }, [])
    const obtenerMoneda = monedaSeleccionada => {
        setMoneda(monedaSeleccionada)
    }
    const obtenerCriptoMoneda = criptoMonedaSeleccionado => {
        setCriptoMoneda(criptoMonedaSeleccionado)
    }

    const cotizarPrecio = () => {
        if (moneda.trim() === '' || criptoMoneda.trim() === ''){
            mostrarAlerta();
            return ;
        }
        // pasa validación
        setConsultarApi(true)
    }

    const mostrarAlerta = ()  => {
        Alert.alert('Error', 'Ambos campos son obligatorios', [{text: 'ok'}])
    }
    return (
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker
                selectedValue={moneda}
                onValueChange={ moneda => obtenerMoneda(moneda)}
            >
                <Picker.Item   label ="Seleccione" value='' />
                <Picker.Item   label ="Dolar" value='USD' />
                <Picker.Item   label ="Peso Méxicano" value='MXN' />
                <Picker.Item   label ="Euro" value='EUR' />
                <Picker.Item   label ="Libra esterlina" value='GBP' />
            </Picker>
            <Text style={styles.label}>Criptomoneda</Text>
            <Picker
                selectedValue={criptoMoneda}
                onValueChange={ criptoMoneda  => obtenerCriptoMoneda(criptoMoneda)}
            >
                <Picker.Item   label ="Seleccione" value='' />
                {criptoMonedas.map( cripto => (
                    <Picker.Item key={cripto.CoinInfo.Id}   label ={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} />
                ))}
            </Picker>
            <TouchableHighlight
                onPress={ () => cotizarPrecio()}
                style={styles.btnCotizar}
            >
                <Text style={styles.textBtnCotizar}>Cotizar</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 22,
        marginVertical: 20,
        textTransform: 'uppercase',
    },
    btnCotizar: {
        backgroundColor: '#5E49E2',
        paddingVertical: 10,
        marginTop: 20
    },
    textBtnCotizar: {
        color: '#FFF',
        fontSize: 18,
        textTransform: 'uppercase',
        textAlign: 'center'
    }

});

export default Formulario;
