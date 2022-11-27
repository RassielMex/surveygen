import { Card, Stack, Typography } from "@mui/material";
import React from "react";
import surveyor from "../assets/img/surveyor.png";
import { Box } from "@mui/system";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";
import QuestionCard from "./QuestionCard";

type Props = {};

const SurveyContainer = (props: Props) => {
  const questions = useAppSelector(
    (state: RootState) => state.survey.questions
  );

  return (
    <>
      <Card sx={{ width: "100%", borderRadius: 0 }}>
        <Stack direction={"column"} alignItems="center" m={"1rem"}>
          {questions && questions?.length <= 0 ? (
            <>
              <Typography variant="h6" textAlign={"center"}>
                Empieza agregando tus preguntas dando Click!
              </Typography>
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  backgroundImage: `url(${surveyor})`,
                  backgroundSize: "cover",
                }}
              />
            </>
          ) : (
            questions?.map((question) => {
              return <QuestionCard question={question} />;
            })
          )}
        </Stack>
      </Card>
    </>
  );
};

export default SurveyContainer;
