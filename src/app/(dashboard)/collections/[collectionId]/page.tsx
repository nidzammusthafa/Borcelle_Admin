"use client";

import Loader from "@/components/custom_ui/Loader";
import CollectionForm from "@/components/collections/CollectionForm";
import { useEffect, useState } from "react";

const CollectionDetails = ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const [loading, setLoading] = useState(true);
  const [collectionDetail, setCollectionDetail] =
    useState<CollectionType | null>(null);

  const getCollectionDetail = async () => {
    try {
      const response = await fetch(`/api/collections/${params.collectionId}`, {
        method: "GET",
      });

      const data = await response.json();
      setCollectionDetail(data);

      setLoading(false);
    } catch (error) {
      console.log("[CollectionDetails_GET]", error);
    }
  };

  useEffect(() => {
    getCollectionDetail();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <CollectionForm initialData={collectionDetail} />
  );
};

export default CollectionDetails;
