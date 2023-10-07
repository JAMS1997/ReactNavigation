import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import colors from "../../utils/colors";

export default function Form(props) {
  const { setInterest, setCapital, setMonths } = props;
  const [selectedMonth, setSelectedMonth] = useState("null");

  return (
    <View style={styles.ViewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Cantidad a pider"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setCapital(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Interes %"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]}
          onChange={(e) => setInterest(e.nativeEvent.text)}
        />
      </View>
      <Picker
        style={pickerSelectStyles.inputAndroid}
        selectedValue={selectedMonth}
        onValueChange={(value) => {
          setSelectedMonth(value);
          setMonths(value);
        }}
      >
        <Picker.Item style={{ color: "white" }} label="Selecciona meses..." value="null" />
        <Picker.Item label="3 meses" value="3" />
        <Picker.Item label="6 meses" value="6" />
        <Picker.Item label="12 meses" value="12" />
        <Picker.Item label="24 meses" value="24" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  ViewForm: {
    position: "absolute",
    bottom: -60,
    width: "85%",
    paddingHorizontal: 50,
    backgroundColor: colors.PRYMARY_COLOR,
    borderRadius: 30,
    height: 200,
    justifyContent: "center",
  },
  viewInputs: {
    flexDirection: "row",
  },
  input: {
    height: 50,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: colors.PRYMARY_COLOR,
    borderRadius: 5,
    width: "60%",
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: "40%",
    marginLeft: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    color: "#000",
    paddingRight: 30,
    backgroundColor: "#fff",
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 8,
    color: "#000",
    paddingRight: 30,
    backgroundColor: "#fff",
  },
});