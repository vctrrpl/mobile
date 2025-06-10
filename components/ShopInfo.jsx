import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { G, Path } from 'react-native-svg';

const ShopInfoCard = ({ onTabChange }) => {
  const [likePressed, setLikePressed] = useState(false);
  const [dislikePressed, setDislikePressed] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (tabIndex) => {
    setActiveTab(tabIndex);
    onTabChange(tabIndex); // Pass tab change to parent
  };

  const HomeIcon = ({ size = 20, color = '#545454' }) => (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <G fill={color}>
        <Path d="m19 46c0-1.1046.8954-2 2-2h22c1.1046 0 2 .8954 2 2s-.8954 2-2 2h-22c-1.1046 0-2-.8954-2-2z" />
        <Path
          clipRule="evenodd"
          d="m40.6395 4.95032c-5.0727-3.93376-12.2063-3.93376-17.279 0l-15.99998 12.40768c-3.3793 2.6206-5.36052 6.6349-5.36052 10.8934v19.9049c0 7.6703 6.29282 13.8437 14 13.8437h32c7.7072 0 14-6.1734 14-13.8437v-19.9049c0-4.2585-1.9812-8.2728-5.3605-10.8934zm-14.8277 3.16092c3.63-2.81499 8.7464-2.81499 12.3764.00001l16 12.40765c2.4117 1.8702 3.8118 4.7222 3.8118 7.7325v19.9049c0 5.4119-4.4524 9.8437-10 9.8437h-32c-5.5476 0-10-4.4318-10-9.8437v-19.9049c0-3.0103 1.40009-5.8623 3.81176-7.7325z"
          fillRule="evenodd"
        />
      </G>
    </Svg>
  );

  const ShopIcon = ({ size = 20, color = '#545454' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <G>
        <Path
          d="m2.25 10.175c0-.414.336-.75.75-.75s.75.336.75.75v8.5c0 1.243 1.007 2.25 2.25 2.25h12c1.243 0 2.25-1.007 2.25-2.25v-8.5c0-.414.336-.75.75-.75s.75.336.75.75v8.5c0 2.071-1.679 3.75-3.75 3.75h-12c-2.071 0-3.75-1.679-3.75-3.75z"
          fill={color}
        />
        <Path
          d="m12 13.425c.995 0 1.948.395 2.652 1.098.703.704 1.098 1.657 1.098 2.652v4.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-4.5c0-.597-.237-1.169-.659-1.591s-.994-.659-1.591-.659-1.169.237-1.591.659-.659.994-.659 1.591v4.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-4.5c0-.995.395-1.948 1.098-2.652.704-.703 1.657-1.098 2.652-1.098z"
          fill={color}
        />
        <Path
          d="m8.944 2.325v5.625c0 2.112-1.714 3.825-3.826 3.825-1.191 0-2.316-.549-3.049-1.487-.733-.939-.992-2.162-.704-3.318l.795-3.179c.326-1.303 1.496-2.216 2.838-2.216h3.196c.414 0 .75.336.75.75zm-1.5.75h-2.446c-.654 0-1.224.445-1.382 1.079l-.795 3.18c-.177.707-.018 1.456.43 2.031.449.574 1.138.91 1.867.91 1.284 0 2.326-1.041 2.326-2.325z"
          fill={color}
        />
        <Path
          d="m15.806 1.575h3.196c1.342 0 2.512.913 2.838 2.216l.795 3.179c.288 1.156.029 2.379-.704 3.318-.733.938-1.858 1.487-3.049 1.487-2.112 0-3.826-1.713-3.826-3.825v-5.625c0-.414.336-.75.75-.75zm.75 1.5v4.875c0 1.284 1.042 2.325 2.326 2.325.729 0 1.418-.336 1.867-.91.448-.575.607-1.324.43-2.031l-.795-3.18c-.158-.634-.728-1.079-1.382-1.079z"
          fill={color}
        />
        <Path
          d="m8.186 1.575h7.62c.199 0 .39.079.531.22s.219.332.219.531l-.005 5.44c-.002 2.215-1.798 4.009-4.012 4.009h-1.09c-2.216 0-4.013-1.796-4.013-4.012v-5.438c0-.414.336-.75.75-.75zm.75 1.5v4.688c0 1.387 1.125 2.512 2.513 2.512h1.09c1.387 0 2.511-1.123 2.512-2.51l.005-4.69z"
          fill={color}
        />
      </G>
    </Svg>
  );

  const SearchIcon = ({ size = 20, color = '#545454' }) => (
    <Svg width={size} height={size} viewBox="0 0 6.3499999 6.3500002">
      <G transform="translate(0 -290.65)">
        <Path
          d="m2.8944091 291.16099c-1.3119941 0-2.38073328 1.06874-2.38073328 2.38074 0 1.31199 1.06873918 2.3828 2.38073328 2.3828.5603925 0 1.0757805-.19638 1.4831137-.52245l.9916707.99115a.26516505.26516505 0 0 0 .375171-.37465l-.9916708-.99167c.3263411-.40796.5229654-.92414.5229654-1.48518 0-1.312-1.0692559-2.38074-2.38125-2.38074zm0 .52917c1.0260113 0 1.8515666.82556 1.8515666 1.85157s-.8255553 1.85363-1.8515666 1.85363-1.8515666-.82762-1.8515666-1.85363.8255553-1.85157 1.8515666-1.85157z"
          fill={color}
        />
      </G>
    </Svg>
  );

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
              <Ionicons name="location" size={24} color="#666" />
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
        <TouchableOpacity style={styles.tab} onPress={() => handleTabPress(0)}>
          <View style={activeTab === 0 ? styles.iconShadow : null}>
            <HomeIcon
              size={28}
              color={activeTab === 0 ? '#545454' : '#7D7D7D'}
            />
          </View>
          {activeTab === 0 && <View style={styles.activeTabBorder} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => handleTabPress(1)}>
          <View style={activeTab === 1 ? styles.iconShadow : null}>
            <ShopIcon
              size={28}
              color={activeTab === 1 ? '#545454' : '#7D7D7D'}
            />
          </View>
          {activeTab === 1 && <View style={styles.activeTabBorder} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => handleTabPress(2)}>
          <View style={activeTab === 2 ? styles.iconShadow : null}>
            <SearchIcon
              size={28}
              color={activeTab === 2 ? '#545454' : '#7D7D7D'}
            />
          </View>
          {activeTab === 2 && <View style={styles.activeTabBorder} />}
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
  iconShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
