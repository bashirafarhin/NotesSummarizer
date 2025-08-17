"use client";

import { fetchAllMessages } from "@/redux/reducer/message.reducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import Loader from "../ui/Loader";
import Card from "./Card";

const PreviousMessage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: messages,
    loading,
    error,
  } = useSelector((state: RootState) => state.message);
  console.log(messages);

  useEffect(() => {
    dispatch(fetchAllMessages());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="w-full space-y-10 flex flex-col items-center justify-center p-4">
      {messages.length === 0 ? (
        <h1 className="text-2xl">
          Got something which is taking to much time?
        </h1>
      ) : (
        <>
          {messages.map((msg) => (
            <Card key={msg._id} msg={msg} />
          ))}
        </>
      )}
    </div>
  );
};

export default PreviousMessage;
