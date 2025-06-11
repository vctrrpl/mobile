import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Svg, { G, Path } from 'react-native-svg';
import ShopInfoCard from '../components/ShopInfo';

const SearchIcon = ({ size = 20, color = '#000' }) => (
  <Svg width={size} height={size} viewBox="0 0 6.35 6.35">
    <G transform="translate(0 -290.65)">
      <Path
        d="m2.8944091 291.16099c-1.3119941 0-2.38073328 1.06874-2.38073328 2.38074 0 1.31199 1.06873918 2.3828 2.38073328 2.3828.5603925 0 1.0757805-.19638 1.4831137-.52245l.9916707.99115a.26516505.26516505 0 0 0 .375171-.37465l-.9916708-.99167c.3263411-.40796.5229654-.92414.5229654-1.48518 0-1.312-1.0692559-2.38074-2.38125-2.38074zm0 .52917c1.0260113 0 1.8515666.82556 1.8515666 1.85157s-.8255553 1.85363-1.8515666 1.85363-1.8515666-.82762-1.8515666-1.85363.8255553-1.85157 1.8515666-1.85157z"
        fill={color}
      />
    </G>
  </Svg>
);

export default function SearchPage() {
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

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <SearchIcon size={22} color="#000" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#585858"
            />
          </View>
        </View>

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
  searchContainer: {
    margin: 20,
    marginBottom: 0,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: '#E0E7F2',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 20,
    color: '#333',
  },
  sectionContainer: {
    margin: 20,
    marginTop: 20,
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
});
