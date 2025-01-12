"use client";
import React, { useEffect } from "react";
import $ from "jquery";

interface IPreloader {
  isLoading: boolean;
}

const Preloader: React.FC<IPreloader> = ({ isLoading = true }) => {
  useEffect(() => {
    if (!isLoading) {
      $(".preloader").delay(450).fadeOut("slow");
    }
  }, [isLoading]);

  return (
    <div className="preloader text-center">
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;
