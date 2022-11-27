import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React, { MouseEventHandler, useState } from "react";
import SurveyModal from "./SurveyModal";

type Props = {};

const SurveyForm = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick: MouseEventHandler = () => {
    setOpen(true);
  };

  return (
    <>
      <SurveyModal open={open} handleClose={handleClose} />
      <Fab
        onClick={handleClick}
        color="primary"
        aria-label="add"
        sx={{ position: "absolute", bottom: "1rem", right: "1rem" }}
      >
        <Add />
      </Fab>
    </>
  );
};

export default SurveyForm;
