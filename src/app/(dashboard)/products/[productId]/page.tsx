"use client";

import Loader from "@/components/custom_ui/Loader";
import ProductForm from "@/components/products/ProductForm";
import React, { useEffect, useState } from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState<ProductType | null>(
    null
  );

  const getProductDetail = async () => {
    try {
      const response = await fetch(`/api/products/${params.productId}`, {
        method: "GET",
      });

      const data = await response.json();
      setProductDetails(data);

      setLoading(false);
    } catch (error) {
      console.log("[ProductId_Get]", error);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return loading ? <Loader /> : <ProductForm initialData={productDetails} />;
};

export default ProductDetails;
