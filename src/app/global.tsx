"use client";
import React, { useEffect, useState } from "react";
import { Alert, Box, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/reducers/root";
import { updateGlobalMessage } from "@/redux/reducers/auth";
import { getUserInfo } from "@/redux/actions/auth";
import ScrollProgress from "@/atoms/ScrollProgress";
import NextNProgress from "nextjs-progressbar";
import CustomScript from "@/atoms/CustomScript";
import { checkIsLogin } from "@/utils/clientHelper";

const Global = ({ children }) => {
  const { globalMessage }: any =
    useSelector<RootState>((state) => state.auth) || {};
  const isLogin = checkIsLogin;
  const [isOpenError, setIsOpenError] = useState<boolean>(false);
  const [isLoadScript, setIsLoadScript] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const handleClose = () => {
    setIsOpenError(false);
    dispatch(updateGlobalMessage(""));
  };

  useEffect(() => {
    if (globalMessage) {
      setIsOpenError(true);
    }
  }, [globalMessage]);

  useEffect(() => {
    setIsLoadScript(true);
    if (isLogin) {
      dispatch(getUserInfo());
    }
  }, []);

  return (
    <Box>
      <ScrollProgress />
      <NextNProgress />
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isOpenError}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="error">{globalMessage}</Alert>
      </Snackbar>
      {isLoadScript && <CustomScript />}
    </Box>
  );
};

export default Global;
