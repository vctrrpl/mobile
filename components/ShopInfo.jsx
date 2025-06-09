import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ShopInfoCard = () => {
  const [likePressed, setLikePressed] = useState(false);
  const [dislikePressed, setDislikePressed] = useState(false);

  return (
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
          <TouchableOpacity
            style={styles.likeButton}
            onPress={() => {
              setLikePressed(!likePressed);
              if (dislikePressed) setDislikePressed(false);
            }}
          >
            <Ionicons
              name={likePressed ? 'thumbs-up' : 'thumbs-up-outline'}
              size={20}
              color={likePressed ? '#000' : '#333'}
            />
            <Text
              style={[
                styles.actionText,
                { color: likePressed ? '#000' : '#666' },
              ]}
            >
              5.3k
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dislikeButton}
            onPress={() => {
              setDislikePressed(!dislikePressed);
              if (likePressed) setLikePressed(false);
            }}
          >
            <Ionicons
              name={dislikePressed ? 'thumbs-down' : 'thumbs-down-outline'}
              size={20}
              color={dislikePressed ? '#000' : '#333'}
            />
            <Text
              style={[
                styles.actionText,
                { color: dislikePressed ? '#000' : '#666' },
              ]}
            >
              5.3k
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Navigation Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tab}>
          <Ionicons name="home" size={20} color="#545454" />
          <View style={styles.activeTabBorder} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Ionicons name="grid-outline" size={20} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Ionicons name="search-outline" size={20} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shopInfoCard: {
    backgroundColor: '#fff',
    marginBottom: 40,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 5,
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
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 5,
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
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  activeTabBorder: {
    position: 'absolute',
    bottom: -5,
    height: 5,
    width: 125,
    backgroundColor: '#545454',
    borderRadius: 2,
  },
});

export default ShopInfoCard;
