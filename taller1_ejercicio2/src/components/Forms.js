import React from 'react';
import {StyleSheet, TextInput, View, StatusBar} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';
export default function Form(props) {
 const {setcafe, setTipo, setPago, setCantidad} = props;
 return (
 <View style={styles.viewForm}>
  <View style={styles.viewInputs}>
  <RNPickerSelect
    style={picketSelectStyles}
    onValueChange={(value) => setcafe(value)}
    placeholder={{
    label: 'Seleccione tamaño de café',
    value: null,
    }}
    items={[
    {label: 'Short 8 onz - $1.00', value: 1},
    {label: 'Tall 12onz -  $1.50', value: 1.50},
    {label: 'Grande 16 onz - $2.00', value: 2},
    ]}
  />
  </View>
  <View style={styles.viewInputs}>
  <RNPickerSelect
    style={picketSelectStyles1}
    onValueChange={(value) => setTipo(value)}
    placeholder={{
    label: 'Seleccione tipo de café',
    value: null,
    }}
    items={[
    {label: 'Mocha - $2.00', value: 2},
    {label: 'Te chai - $2.50', value: 2.50},
    {label: 'Americano - $1.50', value: 1.50},
    {label: 'Frapper - $3.00', value: 3},
    ]}
  />
  </View>
 <View style={styles.viewInputs}>
  <RNPickerSelect
    style={picketSelectStyles2}
    onValueChange={(value) => setPago(value)}
    placeholder={{ label: 'Pago', value: null,}}
    items={[
    {label: 'Efectivo', value: 1},
    {label: 'Tarjeta', value: 2},
    ]}
  />
  <TextInput
 placeholder="Cantidad"
 keyboardType="numeric"
 style={[styles.input, styles.inputPercentage]}
 onChange={(e) => setCantidad(e.nativeEvent.text)}
 />
 </View>

 </View>
 );
}
const styles = StyleSheet.create({
 viewForm: {
 position: 'absolute',
 bottom: 30,
 width: '100%',
 paddingHorizontal: 50,
 backgroundColor: colors.PRIMARY_COLOR_DARK,
 borderRadius: 30,
 height: 180,
 justifyContent: 'center',
 },

 viewInputs: {
 flexDirection: 'row',
 },

 input: {
 fontSize: 16,
 height: 60,
 backgroundColor: '#fff',
 borderWidth: 1,
 borderColor: colors.PRIMARY_COLOR,
 borderRadius: 5,
 width: '60%',
 marginRight: 5,
 marginLeft: -5,
 marginBottom: 10,
 color: 'black',
 paddingHorizontal: 15,
 },

 inputPercentage: {
 width: '50%',
 marginLeft: 5,
 },

 
});
const picketSelectStyles = StyleSheet.create({
 inputIOS: {
  fontSize: 16,
  paddingVertical: 12,
  paddingHorizontal: 10,
  borderWidth: 1,
  borderColor: 'grey',
  borderRadius: 4,
  color: 'black',
  paddingRight: 30,
  backgroundColor: '#fff',
  marginLeft: -5,
  marginRight: -5,
 },
 inputAndroid: {
  height: 60,
  fontSize: 16,
  width: '100%',
  paddingHorizontal: 10,
  paddingVertical: 12,
  borderWidth: 1,
  borderColor: colors.PRIMARY_COLOR,
  borderRadius: 5,
  color: 'black',
  paddingRight: 294,
  backgroundColor: '#fff', 
  marginBottom: 10,
  marginLeft: 5,
 },
 
 inputWeb: {
    height: 60,
    fontSize: 16,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    color: 'black',
    backgroundColor: '#fff', 
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
 },

});

const picketSelectStyles1 = StyleSheet.create({
 inputIOS: {
  fontSize: 16,
  paddingVertical: 12,
  paddingHorizontal: 10,
  borderWidth: 1,
  borderColor: 'grey',
  borderRadius: 4,
  color: 'black',
  paddingRight: 30,
  backgroundColor: '#fff',
  marginLeft: -5,
  marginRight: -5,
 },
 inputAndroid: {
  height: 60,
  fontSize: 16,
  width: '80%',
  paddingHorizontal: 10,
  paddingVertical: 12,
  borderWidth: 1,
  borderColor: colors.PRIMARY_COLOR,
  borderRadius: 5,
  color: 'black',
  paddingRight: 298,
  backgroundColor: '#fff', 
  marginBottom: 10,
  marginLeft: 5,
 },
 inputWeb: {
    height: 60,
    fontSize: 16,
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    color: 'black',
    backgroundColor: '#fff', 
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 25,
    paddingRight: 38,
 },
});

const picketSelectStyles2 = StyleSheet.create({
 inputIOS: {
  fontSize: 16,
  paddingVertical: 12,
  paddingHorizontal: 10,
  borderWidth: 1,
  borderColor: 'grey',
  borderRadius: 4,
  color: 'black',
  paddingRight: 30,
  backgroundColor: '#fff',
  marginLeft: -5,
  marginRight: -5,
 },
 inputAndroid: {
  height: 60,
  fontSize: 16,
  width: '80%',
  paddingHorizontal: 10,
  paddingVertical: 12,
  borderWidth: 1,
  borderColor: colors.PRIMARY_COLOR,
  borderRadius: 5,
  color: 'black',
  paddingRight: 140,
  backgroundColor: '#fff', 
  marginBottom: 10,
  marginLeft: 5,
 },
 inputWeb: {
    height: 60,
    fontSize: 16,
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    color: 'black',
    backgroundColor: '#fff', 
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
 },
});