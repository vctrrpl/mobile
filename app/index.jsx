import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import ShopInfoCard from '../components/ShopInfo';

export default function Index() {
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

        {/* Business Card Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Business Card</Text>
            <Text style={styles.sectionDate}>Updated 02/09/2024</Text>
          </View>

          <Text style={styles.sectionDescription}>
            Lorem ipsum dolor sit amet consectetur. Gravida euismod a posuere
            lacinia semper. Adipiscing leo risus aliquam arcu diam varius eget
            amet commodo. Integer nulla nulla sed gravida...
          </Text>

          {/* Business Card Images */}
          <View style={styles.businessCardContainer}>
            <Image
              source={require('../assets/images/business-card.jpg')}
              style={styles.businessCardImage}
              resizeMode="cover"
            />
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="thumbs-up-outline" size={20} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="link-outline" size={20} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="share-outline" size={20} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="bookmark-outline" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Loose Sheet Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Loose Sheet</Text>
          <View style={styles.looseSheetContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=200&fit=crop',
              }}
              style={styles.looseSheetImage}
              resizeMode="cover"
            />
          </View>
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
  sectionContainer: {
    margin: 20,
    marginTop: 0,
  },
  sectionHeader: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  sectionDate: {
    fontSize: 12,
    color: '#999',
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginVertical: 10,
  },
  businessCardContainer: {
    marginBottom: 20,
  },
  businessCardImage: {
    width: '100%',
    height: 300,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  actionButton: {
    padding: 10,
  },
  looseSheetContainer: {
    position: 'relative',
    marginTop: 15,
  },
  looseSheetImage: {
    width: '100%',
    height: 200,
  },
});
