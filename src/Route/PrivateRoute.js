import React from 'react';
import { ProductDetail } from "../pages/ProductDetail";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router";

export const PrivateRoute = ({ authenticate }) => {
    const location = useLocation();
    console.log("lll", location);
    return authenticate ? (
      <ProductDetail />
    ) : (
      <Navigate to="/login" replace state={{ to: location }} />
    );
}
