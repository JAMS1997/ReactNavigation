import { useState,useEffect } from 'react';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, StatusBar, Button} from 'react-native';
import Form from './cotizador/Form'
import Footer from './cotizador/Footer';
import ResultCalculation from './cotizador/ResultCalculation';
import colors from '../utils/colors';

export default function RenderizarPrestamo() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(()=>{
    if(capital && interest && months)calculate();
    else reset();
  },[capital,months,interest])//Cuando algun estado se actualice

  const calculate = ()=> {
    if(capital==null) {
      setErrorMessage("Añade el capital que quieres solicitar")
  }else if(interest==null) {
      setErrorMessage("Añade el interes del prestamo");
  }else if(months==null) {
      setErrorMessage("Añade la cantidad de meses");
  }else{
    const i = interest / 100;
    const fee = capital / ((1 - Math.pow(i+1,-months))/i);
    setTotal({
      monthlyFee: fee.toFixed(2).replace('.',','),
      totalPayable: (fee*months).toFixed(2).replace('.',',')
    });
  }
}
  const reset = ()=>{
    setErrorMessage("");
    setTotal(null);
  }
  return (
    <>
    <StatusBar bardStyle="light-content"/>
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titleApp}>Cotizador de prestamos</Text>
      <Form setCapital={setCapital} setInterest={setInterest} setMonths={setMonths} />
    </SafeAreaView>
    <ResultCalculation    
    total={total}
    months={months}
    interest={interest}
    capital={capital}
    errorMessage={errorMessage}/>
    <Footer calculate={calculate}/>

   
    </>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor:colors.PRYMARY_COLOR_DARK ,
    height:200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:"center"
  },
  titleApp:{
    fontSize:25,
    fontWeight:"bold",
    color:'#FFFFFF',
    marginTop:15
  }
});
