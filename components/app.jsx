"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllOfters } from "@/redux/reducers";

function App({ children, data }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOfters(data));
  }, [data, dispatch]);

  return <div>{children}</div>;
}

export default App;
