import React from "react";

import { styled } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const AbsoluteCircularProgressProps = styled(CircularProgress)({
  position: "absolute"
});


const AbsoluteCircularProgress = ({...props}) => { return (<AbsoluteCircularProgressProps color="inherit" {...props} />) }

export default AbsoluteCircularProgress ;
