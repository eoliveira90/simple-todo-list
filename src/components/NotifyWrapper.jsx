import React, { createRef } from "react";

import { SnackbarProvider } from "notistack";

import IconButton from "@material-ui/core/IconButton";

import CloseIcon from "@material-ui/icons/Close";

const notistackRef = createRef();

export default function NotifyWrapper({ children }) {
  const handleDismiss = key => () => notistackRef.current.closeSnackbar(key);

  return (
    <SnackbarProvider
      ref={notistackRef}
      maxSnack={5}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      autoHideDuration={5000}
      action={key => (
        <IconButton
          color="inherit"
          title="Dismiss"
          onClick={handleDismiss(key)}
        >
          <CloseIcon />
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
}
