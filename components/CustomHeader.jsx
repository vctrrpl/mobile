import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomHeader() {
  const handleMenuPress = () => {
    // Add menu functionality here
    console.log('Menu pressed');
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Welcome To Shop Name</Text>
      <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
        <Ionicons name="menu" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50, // Adjust for status bar
    paddingBottom: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
  menuButton: {
    padding: 5,
  },
});
