import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { indexStyles } from '../assets/styles/index.styles';

export default function Index() {
  return (
    <View style={indexStyles.container}>
      <StatusBar style="dark" />

      <ScrollView
        style={indexStyles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={indexStyles.scrollContent}
      >
        {/* Hero Image */}
        <View style={indexStyles.heroContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&h=400&fit=crop',
            }}
            style={indexStyles.heroImage}
            resizeMode="cover"
          />
        </View>

        {/* Shop Info Card */}
        <View style={indexStyles.shopInfoCard}>
          <View style={indexStyles.shopHeader}>
            <View style={indexStyles.shopLogoContainer}>
              <View style={indexStyles.shopLogo}>
                <View style={indexStyles.logoIcon}>
                  <Text style={indexStyles.logoText}>⚡</Text>
                </View>
              </View>
              <View style={indexStyles.shopDetails}>
                <Text style={indexStyles.shopName}>Name of Shop</Text>
                <View style={indexStyles.locationContainer}>
                  <Ionicons name="location" size={14} color="#666" />
                  <Text style={indexStyles.locationText}>
                    Blk 998 Toa Payoh north#01-09, more...
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={indexStyles.shareButton}>
              <Ionicons name="share-outline" size={20} color="#333" />
            </TouchableOpacity>
          </View>

          {/* Rating Section */}
          <View style={indexStyles.ratingContainer}>
            <View style={indexStyles.leftRatingSection}>
              <View style={indexStyles.starsContainer}>
                {[1, 2, 3, 4].map((star) => (
                  <Ionicons key={star} name="star" size={14} color="#ffd700" />
                ))}
                <Ionicons name="star-outline" size={14} color="#ddd" />
              </View>
              <Text style={indexStyles.ratingText}>Rating 4.8 (2 Reviews)</Text>
            </View>
            <View style={indexStyles.actionButtons}>
              <TouchableOpacity style={indexStyles.likeButton}>
                <Ionicons name="thumbs-up-outline" size={16} color="#333" />
                <Text style={indexStyles.actionText}>5.3k</Text>
              </TouchableOpacity>
              <TouchableOpacity style={indexStyles.dislikeButton}>
                <Ionicons name="thumbs-down-outline" size={16} color="#333" />
                <Text style={indexStyles.actionText}>5.3k</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Navigation Tabs */}
          <View style={indexStyles.tabsContainer}>
            <TouchableOpacity style={[indexStyles.tab, indexStyles.activeTab]}>
              <Ionicons name="home" size={20} color="#e74c3c" />
            </TouchableOpacity>
            <TouchableOpacity style={indexStyles.tab}>
              <Ionicons name="grid-outline" size={20} color="#999" />
            </TouchableOpacity>
            <TouchableOpacity style={indexStyles.tab}>
              <Ionicons name="search-outline" size={20} color="#999" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Business Card Section */}
        <View style={indexStyles.sectionContainer}>
          <View style={indexStyles.sectionHeader}>
            <Text style={indexStyles.sectionTitle}>Business Card</Text>
            <Text style={indexStyles.sectionDate}>Updated 02/09/2024</Text>
          </View>

          <Text style={indexStyles.sectionDescription}>
            Lorem ipsum dolor sit amet consectetur. Gravida euismod a posuere
            lacinia semper. Adipiscing leo risus aliquam arcu diam varius eget
            amet commodo. Integer nulla nulla sed gravida...
          </Text>

          {/* Business Card Images */}
          <View style={indexStyles.businessCardContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
              }}
              style={indexStyles.businessCardImage}
              resizeMode="cover"
            />
          </View>

          {/* Action Buttons */}
          <View style={indexStyles.actionButtonsContainer}>
            <TouchableOpacity style={indexStyles.actionButton}>
              <Ionicons name="thumbs-up-outline" size={20} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={indexStyles.actionButton}>
              <Ionicons name="link-outline" size={20} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={indexStyles.actionButton}>
              <Ionicons name="share-outline" size={20} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={indexStyles.actionButton}>
              <Ionicons name="bookmark-outline" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Loose Sheet Section */}
        <View style={indexStyles.sectionContainer}>
          <Text style={indexStyles.sectionTitle}>Loose Sheet</Text>
          <View style={indexStyles.looseSheetContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=200&fit=crop',
              }}
              style={indexStyles.looseSheetImage}
              resizeMode="cover"
            />
            <View style={indexStyles.priceCallBadge}>
              <Text style={indexStyles.priceCallText}>PriceCal</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
