import { Container, Stack } from "@mui/material";
import React from "react";
import SurveryForm from "../../components/SurveyForm";
import SurveyContainer from "../../components/SurveyContainer";

type Props = {};

const SurveyCreator = (props: Props) => {
  return (
    <>
      <Container>
        <Stack alignItems={"center"}>
          <SurveyContainer />
          <SurveryForm />
        </Stack>
      </Container>
    </>
  );
};

export default SurveyCreator;
