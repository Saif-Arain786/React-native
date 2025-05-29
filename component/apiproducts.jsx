import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://fakestoreapi.com/products',
          headers: {}
        };

        const response = await axios.request(config);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          <Text style={styles.rating}>Rating: {item.rating.rate} ⭐ ({item.rating.count} reviews)</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: '#555',
  },
});

export default ProductList;
