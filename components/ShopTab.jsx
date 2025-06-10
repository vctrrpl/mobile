import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

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

  const SortIcon = ({ size = 10, color = '#464646' }) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 401.998 401.998"
      style={{ marginLeft: 4 }}
    >
      <G>
        <Path
          d="M73.092,164.452h255.813c4.949,0,9.233-1.807,12.848-5.424c3.613-3.616,5.427-7.898,5.427-12.847c0-4.949-1.813-9.229-5.427-12.85L213.846,5.424C210.232,1.812,205.951,0,200.999,0s-9.233,1.812-12.85,5.424L60.242,133.331c-3.617,3.617-5.424,7.901-5.424,12.85c0,4.948,1.807,9.231,5.424,12.847C63.863,162.645,68.144,164.452,73.092,164.452z"
          fill={color}
        />
        <Path
          d="M328.905,237.549H73.092c-4.952,0-9.233,1.808-12.85,5.421c-3.617,3.617-5.424,7.898-5.424,12.847c0,4.949,1.807,9.233,5.424,12.848L188.149,396.57c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428l127.907-127.906c3.613-3.614,5.427-7.898,5.427-12.848c0-4.948-1.813-9.229-5.427-12.847C338.139,239.353,333.854,237.549,328.905,237.549z"
          fill={color}
        />
      </G>
    </Svg>
  );

  const FilterIcon = ({ size = 16, color = '#fff' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="m21 18.5h-9.5506a2.49989 2.49989 0 0 0 -4.8988 0h-3.5506a.5.5 0 0 0 0 1h3.5506a2.49989 2.49989 0 0 0 4.8988 0h9.5506a.5.5 0 0 0 0-1zm-12 2a1.5 1.5 0 1 1 1.5-1.5 1.50164 1.50164 0 0 1 -1.5 1.5zm12-9h-2.5506a2.49989 2.49989 0 0 0 -4.8988 0h-10.5506a.5.5 0 0 0 0 1h10.5506a2.49989 2.49989 0 0 0 4.8988 0h2.5506a.5.5 0 0 0 0-1zm-5 2a1.5 1.5 0 1 1 1.5-1.5 1.50164 1.50164 0 0 1 -1.5 1.5zm5-9h-7.5506a2.49989 2.49989 0 0 0 -4.8988 0h-5.5506a.5.5 0 0 0 0 1h5.5506a2.49989 2.49989 0 0 0 4.8988 0h7.5506a.5.5 0 0 0 0-1zm-10 2a1.5 1.5 0 1 1 1.5-1.5 1.50164 1.50164 0 0 1 -1.5 1.5z"
        fill={color}
      />
    </Svg>
  );

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
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.sortButton}>
            <Text style={styles.sortText}>Sort By</Text>
            <SortIcon size={10} color="#464646" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <FilterIcon size={16} color="#fff" />
          </TouchableOpacity>
        </View>
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
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
  filterButton: {
    backgroundColor: '#545454',
    padding: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
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
