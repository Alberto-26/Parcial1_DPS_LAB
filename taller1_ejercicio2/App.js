/**
* @format* @flow strict-local
*/
import React,{useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Forms';
import Footer from './src/components/Footer';
import Result from './src/components/Result';


export default function App(){
  const [cafe, setcafe] = useState(null);
  const [tipo, setTipo] = useState(null);
  const [pago, setPago] = useState(null);
  const [cantidad, setCantidad] = useState(null);
  const [total, setTotal] = useState(null);
  const [descuentos, setDescuentos] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (cafe && tipo && pago && cantidad) calculate();
    else reset();
  },[cafe, tipo, pago, cantidad]);
  
  const calculate = () => {
    reset();
    if (!cafe) {
 setErrorMessage('Selecciona el tamaño del café');
 } else if (!tipo) {
 setErrorMessage('Selecciona el tipo de café');
 } else if (!pago) {
 setErrorMessage('Selecciona el tipo de pago');
 } else if (!cantidad) {
 setErrorMessage('Ingrese la cantidad que desea ordenar');
 } else {

  const sum = (cafe + tipo) * cantidad;
  const desc = pago + 1;
  if (desc == 2){
      const descuento = sum * 0.15;
      setTotal({
      totalPayable: (sum - descuento).toFixed(2).replace('.', ','),
      });
      setDescuentos({
      descu: (descuento).toFixed(2).replace('.', ','),
      });
  } else if (desc == 3){
      const descuento = sum * 0.05;
      setTotal({
      totalPayable: (sum - descuento).toFixed(2).replace('.', ','),
      });
      setDescuentos({
      descu: (descuento).toFixed(2).replace('.', ','),
      });
  }
  }
 };
  
  const reset = () => {
 setErrorMessage('');
 setTotal(null);
 };


 return(
 <>
 <StatusBar barStyle="light-content"/>
 <SafeAreaView style={styles.Header}>
   <Text style={styles.HeadApp}>StarBosco App</Text>
     <Form 
       setcafe={setcafe}
       setTipo={setTipo}
       setPago={setPago}
       setCantidad={setCantidad}
       setDescuentos={setDescuentos}
      />
 </SafeAreaView>
 <Result
 cafe={cafe}
 tipo={tipo}
 pago={pago}
 cantidad={cantidad}
 total={total}
 descuentos={descuentos}
 errorMessage={errorMessage}
 />
  <Footer calculate={calculate}/>
 </>
 );
}
const styles = StyleSheet.create({
 Header:{
    backgroundColor:colors.PRIMARY_COLOR,
    height:300,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems:'center',
    marginTop: StatusBar.currentHeight || 0,
 },
 HeadApp:{
   fontSize:25,
   fontWeight:'bold',
   color:'#fff',
   marginTop:15,
 },
})