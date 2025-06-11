import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';

export default function CustomHeader() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuPress = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleMenuItemPress = (item) => {
    console.log(`${item} pressed`);
    setIsMenuVisible(false); // Close menu when item is pressed

    // Add navigation logic
    switch (item) {
      case 'Home':
        router.push('/');
        break;
      case 'Shop':
        router.push('/shoppage');
        break;
      case 'Contact us':
        router.push('/contactuspage'); // Changed from '/contact' to '/contactuspage'
        break;
      case 'Login':
        router.push('/login'); // Uncommented and enabled login navigation
        break;
      case 'English':
        // Handle language change
        break;
      case 'German':
        // Handle language change
        break;
      default:
        break;
    }
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome To Shop Name</Text>
        <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
          <Ionicons name="menu" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Menu Overlay */}
      {isMenuVisible && (
        <View style={styles.menuOverlay}>
          <BlurView intensity={0} style={styles.blurContainer}>
            <TouchableOpacity
              style={styles.overlayBackground}
              onPress={() => setIsMenuVisible(false)}
              activeOpacity={1}
            />
            <View style={styles.menuContainer}>
              {/* Home */}
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => handleMenuItemPress('Home')}
              >
                <Ionicons name="home-outline" size={24} color="#333" />
                <Text style={styles.menuItemText}>Home</Text>
              </TouchableOpacity>

              {/* Shop */}
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => handleMenuItemPress('Shop')}
              >
                <Ionicons name="storefront-outline" size={24} color="#333" />
                <Text style={styles.menuItemText}>Shop</Text>
              </TouchableOpacity>

              {/* Contact us */}
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => handleMenuItemPress('Contact us')}
              >
                <Ionicons name="call" size={24} color="#333" />
                <Text style={styles.menuItemText}>Contact us</Text>
              </TouchableOpacity>

              {/* Login */}
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => handleMenuItemPress('Login')}
              >
                <Ionicons name="log-in-outline" size={24} color="#333" />
                <Text style={styles.menuItemText}>Login</Text>
              </TouchableOpacity>

              {/* Language Flags */}
              <View style={styles.languageContainer}>
                <TouchableOpacity
                  style={styles.flagButton}
                  onPress={() => handleMenuItemPress('English')}
                >
                  <Text style={styles.flagText}>🇬🇧</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.flagButton}
                  onPress={() => handleMenuItemPress('German')}
                >
                  <Text style={styles.flagText}>🇩🇪</Text>
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    zIndex: 1000,
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
  menuOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
  blurContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 70, // Position below header
    paddingRight: 20,
  },
  overlayBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  menuContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.73)',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingVertical: 15,
    marginTop: 50, // Adjust to position below header
    paddingHorizontal: 20,
    minWidth: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  menuItemText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 15,
    fontWeight: '500',
  },
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  flagButton: {
    marginRight: 15,
    padding: 5,
  },
  flagText: {
    fontSize: 24,
  },
});
