"use client";
import { AppStore, rootReducer } from "@/redux/reducers/root";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(null);
  if (!storeRef.current) {
    storeRef.current = rootReducer();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
