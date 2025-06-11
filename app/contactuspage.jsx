import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import ShopInfoCard from '../components/ShopInfo';

const ChevronDownIcon = ({ size = 24, color = '#666' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="m7 10 5 5 5-5z" fill={color} />
  </Svg>
);

const ChevronRightIcon = ({ size = 24, color = '#666' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="m10 17 5-5-5-5v10z" fill={color} />
  </Svg>
);

export default function ContactPage() {
  const [expandedLocation, setExpandedLocation] = useState('toa-payoh');

  const locations = [
    {
      id: 'marina-bay',
      name: 'Expressprint @ Marina Bay Sands',
      address: 'Marina Bay Sands, Singapore 018956',
      phone: '+65978945612',
      email: 'marinabay@yourname.com',
      website: 'www.yourname.com',
      operatingHours: {
        monday: '09:30 - 18:00',
        tuesday: '09:30 - 18:00',
        wednesday: '09:30 - 18:00',
        thursday: '09:30 - 18:00',
        friday: '09:30 - 18:00',
        saturday: '10:00 - 16:00',
        sunday: 'Closed',
      },
    },
    {
      id: 'toa-payoh',
      name: 'Expressprint @ Toa Payoh',
      address: 'Blk 998 Toa Payoh North #01-09, Singapore 318993',
      phone: '+65978945612',
      email: 'sales@yourname.com',
      website: 'www.yourname.com',
      operatingHours: {
        monday: '09:30 - 18:00',
        tuesday: '09:30 - 18:00',
        wednesday: '09:30 - 18:00',
        thursday: '09:30 - 18:00',
        friday: '09:30 - 18:00',
        saturday: '10:00 - 16:00',
        sunday: 'Closed',
      },
    },
  ];

  const handleLocationToggle = (locationId) => {
    setExpandedLocation(expandedLocation === locationId ? null : locationId);
  };

  const handlePhonePress = (phoneNumber) => {
    const url = `tel:${phoneNumber}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          Alert.alert('Error', 'Phone app is not available');
        }
      })
      .catch((err) => console.error('Phone call error:', err));
  };

  const handleWhatsAppPress = (phoneNumber) => {
    const cleanPhone = phoneNumber.replace(/[+\s-]/g, '');
    const message = 'Hello! I need help with printing services.';
    const url = `whatsapp://send?phone=${cleanPhone}&text=${encodeURIComponent(
      message
    )}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          Alert.alert(
            'WhatsApp not installed',
            'Please install WhatsApp to use this feature.'
          );
        }
      })
      .catch((err) => console.error('WhatsApp error:', err));
  };

  const handleEmailPress = (email) => {
    const url = `mailto:${email}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          Alert.alert('Error', 'Email app is not available');
        }
      })
      .catch((err) => console.error('Email error:', err));
  };

  const handleWebsitePress = (website) => {
    const url = website.startsWith('http') ? website : `https://${website}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          Alert.alert('Error', 'Cannot open website');
        }
      })
      .catch((err) => console.error('Website error:', err));
  };

  const renderLocationCard = (location) => {
    const isExpanded = expandedLocation === location.id;

    return (
      <View key={location.id} style={styles.locationCard}>
        <TouchableOpacity
          style={styles.locationHeader}
          onPress={() => handleLocationToggle(location.id)}
        >
          <Text style={styles.locationName}>{location.name}</Text>
          {isExpanded ? (
            <ChevronDownIcon size={24} color="#666" />
          ) : (
            <ChevronRightIcon size={24} color="#666" />
          )}
        </TouchableOpacity>

        {isExpanded && (
          <View style={styles.locationDetails}>
            {/* Map Placeholder */}
            <View style={styles.mapContainer}>
              <View style={styles.mapPlaceholder}>
                <Ionicons name="location" size={40} color="#666" />
                <Text style={styles.mapText}>Map View</Text>
              </View>
            </View>

            {/* Contact Information */}
            <View style={styles.contactInfo}>
              {/* Address */}
              <View style={styles.contactItem}>
                <Ionicons name="location-outline" size={24} color="#000" />
                <Text style={styles.contactText}>{location.address}</Text>
              </View>

              {/* Phone */}
              <TouchableOpacity
                style={styles.contactItem}
                onPress={() => handlePhonePress(location.phone)}
              >
                <Ionicons name="call-outline" size={24} color="#000" />
                <Text style={styles.contactText}>{location.phone}</Text>
              </TouchableOpacity>

              {/* WhatsApp */}
              <TouchableOpacity
                style={styles.contactItem}
                onPress={() => handleWhatsAppPress(location.phone)}
              >
                <Ionicons name="logo-whatsapp" size={24} color="#000" />
                <Text style={styles.contactText}>{location.phone}</Text>
              </TouchableOpacity>

              {/* Email */}
              <TouchableOpacity
                style={styles.contactItem}
                onPress={() => handleEmailPress(location.email)}
              >
                <Ionicons name="mail-outline" size={24} color="#000" />
                <Text style={styles.contactText}>{location.email}</Text>
              </TouchableOpacity>

              {/* Website */}
              <TouchableOpacity
                style={styles.contactItem}
                onPress={() => handleWebsitePress(location.website)}
              >
                <Ionicons name="globe-outline" size={24} color="#000" />
                <Text style={styles.contactText}>{location.website}</Text>
              </TouchableOpacity>

              {/* Operating Hours */}
              <View style={styles.operatingHoursContainer}>
                <View style={styles.operatingHoursHeader}>
                  <Ionicons name="time-outline" size={20} color="#333" />
                  <Text style={styles.operatingHoursTitle}>
                    Operating Hours
                  </Text>
                </View>
                <View style={styles.hoursGrid}>
                  {Object.entries(location.operatingHours).map(
                    ([day, hours]) => (
                      <View key={day} style={styles.hoursRow}>
                        <Text style={styles.dayText}>
                          {day.charAt(0).toUpperCase() + day.slice(1)}
                        </Text>
                        <Text style={styles.hoursText}>{hours}</Text>
                      </View>
                    )
                  )}
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <Image
            source={require('../assets/images/banner.jpg')}
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>

        {/* Shop Info Card */}
        <ShopInfoCard />

        {/* Contact Us Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.pageTitle}>Contact Us</Text>
        </View>

        {/* Location Cards */}
        <View style={styles.content}>
          {locations.map((location) => renderLocationCard(location))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  heroContainer: {
    width: '100%',
    height: 250,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  locationCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  locationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  locationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  locationDetails: {
    padding: 20,
  },
  mapContainer: {
    marginBottom: 20,
  },
  mapPlaceholder: {
    height: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
  contactInfo: {
    gap: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  contactText: {
    fontSize: 16,
    color: '#1F1F1F',
    marginLeft: 15,
    flex: 1,
  },
  linkText: {
    color: '#1F1F1F',
    textDecorationLine: 'underline',
  },
  operatingHoursContainer: {
    marginTop: 10,
  },
  operatingHoursHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  operatingHoursTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F1F1F',
    marginLeft: 15,
  },
  hoursGrid: {
    marginLeft: 35,
    gap: 5,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  dayText: {
    fontSize: 16,
    color: '#1F1F1F',
    textTransform: 'capitalize',
    minWidth: 80,
  },
  hoursText: {
    fontSize: 16,
    color: '#1F1F1F',
    fontWeight: '500',
  },
});
