"use client";
import Popup from "@/components/admin-panel/Popup";
import ProductRow from "@/components/admin-panel/ProductRow";
import Product from "@/libs/models/Product";
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import axios from "axios";
import React, { useEffect, useState } from "react";

export interface IProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  price: string;
  category: string;
}

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    axios
      .get("/api/get_products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoading(false)));
  }, [updateTable]);

  return (
    <div>
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-[calc(100vh-96px)] rounded-lg p-4">
        <h2 className="text-white text-3xl"> All Products</h2>

        <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="py-2 px-4">SR No.</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Picture</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: IProduct, index) => (
                <ProductRow
                  key={product._id}
                  srNo={index + 1}
                  setOpenPopup={setOpenPopup}
                  setUpdateTable={setUpdateTable}
                  product={product}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {openPopup && (
        <Popup setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable} />
      )}
    </div>
  );
};

export default Dashboard;
