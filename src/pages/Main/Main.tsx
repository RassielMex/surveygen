import { Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import TitleForm from "../../components/TitleForm";

type Props = {};

const Main = (props: Props) => {
  return (
    <>
      <Container>
        <Stack alignItems={"center"}>
          <TitleForm />
        </Stack>
      </Container>
    </>
  );
};

export default Main;
