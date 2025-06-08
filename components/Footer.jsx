import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Linking,
  Image,
} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { customFooterStyles } from '../assets/styles/customfooter.styles';

const WhatsAppIcon = ({ size = 60 }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G>
      <Path
        d="m500 1000c-276.1 0-500-223.9-500-500 0-276.1 223.9-500 500-500 276.1 0 500 223.9 500 500 0 276.1-223.9 500-500 500z"
        fill="#25d366"
      />
      <G>
        <G>
          <G>
            <Path
              clipRule="evenodd"
              d="m733.9 267.2c-62-62.1-144.6-96.3-232.5-96.4-181.1 0-328.6 147.4-328.6 328.6 0 57.9 15.1 114.5 43.9 164.3l-46.6 170.3 174.2-45.7c48 26.2 102 40 157 40h.1c181.1 0 328.5-147.4 328.6-328.6.1-87.8-34-170.4-96.1-232.5zm-232.4 505.6h-.1c-49 0-97.1-13.2-139-38.1l-10-5.9-103.4 27.1 27.6-100.8-6.5-10.3c-27.3-43.5-41.8-93.7-41.8-145.4.1-150.6 122.6-273.1 273.3-273.1 73 0 141.5 28.5 193.1 80.1s80 120.3 79.9 193.2c0 150.7-122.6 273.2-273.1 273.2zm149.8-204.6c-8.2-4.1-48.6-24-56.1-26.7s-13-4.1-18.5 4.1-21.2 26.7-26 32.2-9.6 6.2-17.8 2.1-34.7-12.8-66-40.8c-24.4-21.8-40.9-48.7-45.7-56.9s-.5-12.7 3.6-16.8c3.7-3.7 8.2-9.6 12.3-14.4s5.5-8.2 8.2-13.7 1.4-10.3-.7-14.4-18.5-44.5-25.3-61c-6.7-16-13.4-13.8-18.5-14.1-4.8-.2-10.3-.3-15.7-.3-5.5 0-14.4 2.1-21.9 10.3s-28.7 28.1-28.7 68.5 29.4 79.5 33.5 84.9c4.1 5.5 57.9 88.4 140.3 124 19.6 8.5 34.9 13.5 46.8 17.3 19.7 6.3 37.6 5.4 51.7 3.3 15.8-2.4 48.6-19.9 55.4-39 6.8-19.2 6.8-35.6 4.8-39s-7.5-5.4-15.7-9.6z"
              fill="#fff"
              fillRule="evenodd"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default function Footer() {
  const handleWhatsAppPress = () => {
    const phoneNumber = '+1234567890'; // Replace with your WhatsApp number
    const message = 'Hello! I need help with PriceCal.';
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
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
      .catch((err) => console.error('An error occurred', err));
  };

  return (
    <View style={customFooterStyles.footerContainer}>
      {/* Footer */}
      <View style={customFooterStyles.footer}>
        <View style={customFooterStyles.sponsorContainer}>
          <Image
            source={require('../assets/images/sponsor.png')}
            style={customFooterStyles.sponsorImage}
          />
          <Text style={customFooterStyles.poweredByText}>
            Powered by PriceCal
          </Text>
        </View>
      </View>

      {/* Floating WhatsApp Button */}
      <TouchableOpacity
        style={customFooterStyles.whatsappButton}
        onPress={handleWhatsAppPress}
        activeOpacity={0.8}
      >
        <WhatsAppIcon size={60} />
      </TouchableOpacity>
    </View>
  );
}
