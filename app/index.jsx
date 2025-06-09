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
        <View style={styles.shopInfoCard}>
          <View style={styles.shopHeader}>
            <View style={styles.shopLogoContainer}>
              <View style={styles.shopLogo}>
                <Image
                  source={require('../assets/images/logo.png')}
                  style={styles.logoImage}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.shopDetails}>
                <Text style={styles.shopName}>Name of Shop</Text>
                <View style={styles.locationContainer}>
                  <Ionicons name="location" size={16} color="#666" />
                  <Text style={styles.locationText}>
                    Blk 998 Toa Payoh north#01-09, more...
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.shareButton}>
              <Ionicons name="share-outline" size={20} color="#333" />
            </TouchableOpacity>
          </View>

          {/* Rating Section */}
          <View style={styles.ratingContainer}>
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4].map((star) => (
                <Ionicons key={star} name="star" size={16} color="#545454" />
              ))}
              <Ionicons name="star-outline" size={16} color="#ddd" />
            </View>
            <Text style={styles.ratingText}>Rating 4.8 (2 Reviews)</Text>
            <View style={styles.actionButtons}>
              <View style={styles.likeButton}>
                <Ionicons name="thumbs-up-outline" size={16} color="#333" />
                <Text style={styles.actionText}>5.3k</Text>
              </View>
              <View style={styles.dislikeButton}>
                <Ionicons name="thumbs-down-outline" size={16} color="#333" />
                <Text style={styles.actionText}>5.3k</Text>
              </View>
            </View>
          </View>

          {/* Navigation Tabs */}
          <View style={styles.tabsContainer}>
            <TouchableOpacity style={[styles.tab, styles.activeTab]}>
              <Ionicons name="home" size={20} color="#545454" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Ionicons name="grid-outline" size={20} color="#999" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Ionicons name="search-outline" size={20} color="#999" />
            </TouchableOpacity>
          </View>
        </View>

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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  menuButton: {
    padding: 5,
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
  shopInfoCard: {
    backgroundColor: '#fff',
    marginBottom: 40,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  shopLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  logoImage: {
    width: 60,
    height: 60,
  },
  shopHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  shopLogoContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  shopDetails: {
    flex: 1,
  },
  shopName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
    flex: 1,
  },
  shareButton: {
    padding: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  actionButtons: {
    flexDirection: 'row',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  dislikeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 15,
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 4,
    borderBottomColor: '#545454',
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
