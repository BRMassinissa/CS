import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, Button } from 'react-native';

const LoginPage = () => {
  const [expanded, setExpanded] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleProfile = () => {
    setExpanded(!expanded);
  };

  const handleLogin = () => {
    // Logique de connexion avec les identifiants (username, password)
    // À adapter en fonction de votre backend ou de la logique de connexion requise
    console.log('Tentative de connexion avec :', username, password);
    // Réinitialisation des champs
    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Se connecter" onPress={handleLogin} />
      <TouchableOpacity onPress={toggleProfile} style={styles.button}>
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.profileContainer}>
          {/* Contenu de la barre de profil */}
          <Text style={styles.profileText}>Nom d'utilisateur</Text>
          <Text style={styles.profileText}>Email@example.com</Text>
          {/* ... Autres éléments de profil */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    position: 'absolute',
    top: 50,
    right: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    zIndex: 1000,
  },
  profileText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default LoginPage;