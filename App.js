import React from 'react';
import { View } from 'react-native';
import Login from './screens/login'; // Chemin relatif vers le fichier Login.js

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Login />
    </View>
  );
}