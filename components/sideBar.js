import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ProfileBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleProfile = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleProfile} style={styles.button}>
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.profileContainer}>
          <Text style={styles.profileText}>Nom d'utilisateur</Text>
          <Text style={styles.profileText}>Email@example.com</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  button: {
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    position: 'absolute',
    top: 50,
    left: 10,
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

export default ProfileBar;