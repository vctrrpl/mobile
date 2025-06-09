import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Espresso Delight',
      image: require('../assets/images/shop-img.jpg'),
    },
    {
      id: 2,
      name: 'Cappuccino Bliss',
      image: require('../assets/images/shop-img.jpg'),
    },
    {
      id: 3,
      name: 'Latte Artistry',
      image: require('../assets/images/shop-img.jpg'),
    },
    {
      id: 4,
      name: 'Mocha Magic',
      image: require('../assets/images/shop-img.jpg'),
    },
    {
      id: 5,
      name: 'Americano Classic',
      image: require('../assets/images/shop-img.jpg'),
    },
    {
      id: 6,
      name: 'Vanilla Bean Brew',
      image: require('../assets/images/shop-img.jpg'),
    },
    {
      id: 7,
      name: 'Hazelnut Harmony',
      image: require('../assets/images/shop-img.jpg'),
    },
    {
      id: 8,
      name: 'Caramel Cream Dream',
      image: require('../assets/images/shop-img.jpg'),
    },
    {
      id: 9,
      name: 'Irish Coffee Indulgence',
      image: require('../assets/images/shop-img.jpg'),
    },
    {
      id: 10,
      name: 'Hazelnut Harmony',
      image: require('../assets/images/shop-img.jpg'),
    },
  ];

  const renderProductGrid = () => {
    const rows = [];
    for (let i = 0; i < products.length; i += 3) {
      const rowProducts = products.slice(i, i + 3);
      rows.push(
        <View key={i} style={styles.productRow}>
          {rowProducts.map((product) => (
            <TouchableOpacity key={product.id} style={styles.productCard}>
              <View style={styles.productImageContainer}>
                <Image
                  source={product.image}
                  style={styles.productImage}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.productName}>{product.name}</Text>
            </TouchableOpacity>
          ))}
          {/* Fill remaining space if less than 3 items in row */}
          {rowProducts.length < 3 && (
            <View style={{ flex: rowProducts.length === 1 ? 2 : 1 }} />
          )}
        </View>
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shop / All</Text>
        <TouchableOpacity style={styles.sortButton}>
          <Text style={styles.sortText}>Sort By</Text>
          <Text style={styles.sortIcon}>⌄</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.productGrid}
        showsVerticalScrollIndicator={false}
      >
        {renderProductGrid()}
      </ScrollView>

      <View style={styles.pagination}>
        <View style={styles.paginationPill1}>
          <Text style={styles.paginationText}>10/Page</Text>
        </View>
        <View style={styles.paginationControls}>
          <TouchableOpacity style={styles.paginationButton}>
            <View style={styles.arrowCircle}>
              <Text style={styles.paginationArrow}>‹</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.paginationPill2}>
            <Text style={styles.pageInfo}>1 of 24</Text>
          </View>
          <TouchableOpacity style={styles.paginationButton}>
            <View style={styles.arrowCircle}>
              <Text style={styles.paginationArrow}>›</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 4,
  },
  sortText: {
    color: '#464646',
    fontSize: 12,
    marginRight: 4,
  },
  sortIcon: {
    color: '#464646',
    fontSize: 12,
  },
  productGrid: {
    flex: 1,
  },
  productRow: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  productCard: {
    flex: 1,
    marginHorizontal: 6,
    alignItems: 'center',
  },
  productImageContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 8,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productName: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
    fontWeight: '500',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  paginationPill1: {
    backgroundColor: '#ECECEC',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 25,
    width: 110,
    alignItems: 'center',
  },
  paginationPill2: {
    backgroundColor: '#ECECEC',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 25,
    width: 110,
    alignItems: 'center',
  },
  paginationText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  paginationControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paginationButton: {
    padding: 8,
  },
  arrowCircle: {
    width: 42,
    height: 42,
    backgroundColor: '#ECECEC',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationArrow: {
    fontSize: 16,
    color: '#666',
  },
  pageInfo: {
    fontSize: 14,
    color: '#000',
    marginHorizontal: 16,
  },
});

export default Shop;
