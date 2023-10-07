import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Button } from 'react-bootstrap'; // Importa un componente de botón de Bootstrap u otra librería que utilices para la web

const StackScreen = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  const selectImage = () => {
    // En el entorno web, puedes utilizar un cuadro de diálogo de selección de archivos HTML
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*"; // Acepta solo archivos de imagen
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setBackgroundImage({ uri: event.target.result });
        };
        reader.readAsDataURL(file);
      }
    };
    fileInput.click();
  };

  return (
    <View>
      <ImageBackground
        source={backgroundImage || require('../assets/defaultImage.jpg')} // Cambia "defaultImage.jpg" por la imagen predeterminada
        style={styles.backgroundImage}
      >
        <TouchableOpacity
          onPress={selectImage}
          style={styles.selectButton}
        >
          <Text style={styles.buttonText}>Seleccionar Imagen</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  selectButton: {
    backgroundColor: "purple",
    padding: 10,
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: "20%",
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
});

export default StackScreen;
