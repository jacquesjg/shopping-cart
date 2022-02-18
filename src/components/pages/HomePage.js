import React from 'react';
import Layout from '../layout/Layout';
import ProductDisplay from '../ProductDisplay';

const HomePage = () => {
  return (
    <Layout>
      <ProductDisplay
        product={{
          id: '',
          title: '',
          brand: '',
          price: 399999,
          description: '',
          image: ''
        }}
      />
    </Layout>
  );
};

export default HomePage;

