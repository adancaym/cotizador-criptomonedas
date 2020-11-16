import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    ActivityIndicator,
    Text
} from 'react-native';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import axios from 'axios';

const App = () => {

    const [moneda, setMoneda] = useState('');
    const [criptoMoneda, setCriptoMoneda] = useState('');
    const [consultarApi, setConsultarApi] = useState(false);
    const [resultado, setResultado] = useState({});
    const [working, setWorking] = useState(false)

    useEffect( () => {
        const cotizarCriptoMoneda = async () => {
            if (consultarApi) {
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
                setWorking(true)
                const resultado = await axios.get(url).then(r => r.data);
                setResultado(resultado.DISPLAY[criptoMoneda][moneda]);
                setConsultarApi(false)
                setWorking(false);

            }
        };
        cotizarCriptoMoneda();

    }, [consultarApi]);

    const component  = working  ? <ActivityIndicator  size='large' color= '#5E49E2' />  :   <Cotizacion resultado={resultado} />
    return (
        <ScrollView>
            <Header />
            <View style={styles.contenido}>
                <Formulario
                    moneda={moneda}
                    criptoMoneda={criptoMoneda}
                    setMoneda={setMoneda}
                    setCriptoMoneda={setCriptoMoneda}
                    setConsultarApi={setConsultarApi}
                 />
            </View>
            <View style={styles.footer}>
                {component}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contenido: {
        marginHorizontal: '2.5%',
    },
    footer: {
        marginTop: 20
    }
});

export default App;
