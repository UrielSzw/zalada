import { useState, useEffect } from 'react';
import { setAppError, setLoading } from '../utils';
import { getProducts } from '../service/api.service';
import { Product } from '../types/Product.types';

export const useProducts = () => {
  const [productsList, setProductList] = useState<Product[]>([]);

  const getProductsData = async () => {
    try {
      setLoading(true);
      const res = await getProducts();
      if (!res) return;
      const { data } = res;
      setProductList(data.data);
    } catch (error: any) {
      setAppError(error?.code, error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return {
    productsList,
  };
};
