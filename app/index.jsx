import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ShopInfoCard from '../components/ShopInfo';
import ShopTab from '../components/ShopTab';
import SearchTab from '../components/SearchTab';
import ActionButtons from '../components/ActionButtons';

export default function Index() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleLike = (itemType, itemId) => {
    console.log(`Liked ${itemType} with ID: ${itemId}`);
    // Implement like functionality
  };

  const handleShare = (itemType, itemId) => {
    console.log(`Shared ${itemType} with ID: ${itemId}`);
    // Implement share functionality
  };

  const handleBookmark = (itemType, itemId) => {
    console.log(`Bookmarked ${itemType} with ID: ${itemId}`);
    // Implement bookmark functionality
  };

  const handleLink = (itemType, itemId) => {
    console.log(`Copied link for ${itemType} with ID: ${itemId}`);
    // Implement link functionality
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
        <ShopInfoCard onTabChange={handleTabChange} />

        {/* Conditional Content Based on Active Tab */}
        {activeTab === 0 && (
          <>
            {/* Business Card Section */}
            <View style={styles.sectionContainer}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Business Card</Text>
                <Text style={styles.sectionDate}>Updated 02/09/2024</Text>
              </View>

              <Text style={styles.sectionDescription}>
                Lorem ipsum dolor sit amet consectetur. Gravida euismod a
                posuere lacinia semper. Adipiscing leo risus aliquam arcu diam
                varius eget amet commodo. Integer nulla nulla sed gravida...
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
              <ActionButtons
                itemType="business-card"
                itemId="1"
                onLike={handleLike}
                onLink={handleLink}
                onShare={handleShare}
                onBookmark={handleBookmark}
              />
            </View>

            {/* Loose Sheet Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Loose Sheet</Text>
              <View style={styles.looseSheetContainer}>
                <Image
                  source={require('../assets/images/business-card.jpg')}
                  style={styles.businessCardImage}
                  resizeMode="cover"
                />
              </View>

              {/* Action Buttons for Loose Sheet */}
              <ActionButtons
                itemType="loose-sheet"
                itemId="2"
                onLike={handleLike}
                onLink={handleLink}
                onShare={handleShare}
                onBookmark={handleBookmark}
              />
            </View>
          </>
        )}

        {activeTab === 1 && <ShopTab />}

        {activeTab === 2 && <SearchTab />}
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
    aspectRatio: 1,
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
