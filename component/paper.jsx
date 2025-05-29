import React, { useEffect, useState } from 'react';
import { ScrollView, View, ActivityIndicator, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Provider as PaperProvider } from 'react-native-paper';
import axios from 'axios';

const ProductLists = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch products:', err);
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Paragraph>{error}</Paragraph>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map(product => (
        <Card key={product.id} style={styles.card}>
          <Card.Cover source={{ uri: product.image || 'https://via.placeholder.com/150' }} />
          <Card.Content>
            <Title>{product.title}</Title>
            <Paragraph numberOfLines={2}>{product.description}</Paragraph>
            <Paragraph>💵 ${product.price}</Paragraph>
            <Paragraph>⭐ {product.rating?.rate || 0} ({product.rating?.count || 0} reviews)</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    padding: 10,
  },
  card: {
    marginBottom: 15,
  },
});

export default function App() {
  return (
    <PaperProvider>
      <ProductLists />
    </PaperProvider>
  );
}