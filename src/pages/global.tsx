import React, { useEffect, useState } from "react";
import { Alert, Box, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducers/root";
import { updateGlobalMessage } from "@/redux/reducers/auth";

const Global = ({ children }) => {
  const { globalMessage } = useSelector<RootState>((state) => state.auth);
  const [isOpenError, setIsOpenError] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsOpenError(false);
    dispatch(updateGlobalMessage(""));
  };

  useEffect(() => {
    if (globalMessage) {
      setIsOpenError(true);
    }
  }, [globalMessage]);

  return (
    <Box>
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
    </Box>
  );
};

Global.propTypes = {};

export default Global;
