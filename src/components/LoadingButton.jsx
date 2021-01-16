import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Button, IconButton } from '@material-ui/core';

import AbsoluteCircularProgress from './AbsoluteCircularProgress';

export default function LoadingButton({
  children,
  delay = 1000,
  disabled = false,
  isIcon = false,
  loading = false,
  ...others
}) {
  const [innerLoading, setInnerLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      const to = setTimeout(setInnerLoading, delay, true);
      return () => clearTimeout(to);
    } else {
      setInnerLoading(false);
    }
  }, [delay, loading]);

  const Component = isIcon ? IconButton : Button;

  return (
    <Component color="inherit" disabled={loading || disabled} {...others}>
      {children}
      {innerLoading && <AbsoluteCircularProgress />}
    </Component>
  );
};


LoadingButton.propTypes = {
  delay: PropTypes.number,
  disabled: PropTypes.bool,
  isIcon: PropTypes.bool,
  loading: PropTypes.bool
};
