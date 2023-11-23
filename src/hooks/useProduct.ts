import { useState, useEffect } from 'react';
import { setAppError, setLoading } from '../utils';
import { getProductById, getProducts } from '../service/api.service';
import { Product } from '../types/Product.types';

export const useProduct = (productId: string) => {
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);

  const getProductData = async () => {
    try {
      setLoading(true);
      const res = await getProductById(productId);
      if (!res) return;
      const { data } = res;
      setCurrentProduct(data.data);
    } catch (error: any) {
      setAppError(error?.code, error?.message);
    } finally {
      setLoading(false);
    }
  };

  const getSuggestedProducts = async () => {
    try {
      setLoading(true);
      const res = await getProducts();
      if (!res) return;
      const products = res.data.data;
      const filteredProducts = products.filter(
        (item: Product) => item.productId !== currentProduct?.productId
      );
      setSuggestedProducts(filteredProducts);
    } catch (error: any) {
      setAppError(error?.code, error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, [productId]);

  useEffect(() => {
    if (currentProduct) {
      getSuggestedProducts();
    }
  }, [currentProduct]);

  return {
    currentProduct,
    suggestedProducts,
  };
};
