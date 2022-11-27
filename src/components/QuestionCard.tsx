import { Delete } from "@mui/icons-material";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { MouseEventHandler } from "react";
import { Question } from "../interfaces/Question";
import { useAppDispatch } from "../store/hooks";
import { deleteQuestion } from "../store/surveySlice";

type Props = {
  question: Question;
};

const QuestionCard = (props: Props) => {
  const dispatch = useAppDispatch();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(deleteQuestion(props.question));
  };

  return (
    <Card
      sx={{
        marginTop: "1rem",
        minWidth: "320px",
        width: "50%",
        borderTop: "6px yellow solid",
      }}
    >
      <CardContent>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h6">{props.question.mainQuestion}</Typography>
          <IconButton size="small" color="error" onClick={handleClick}>
            <Delete />
          </IconButton>
        </Stack>
        {props.question.options.map((option, index) => {
          return <Typography>{`${index + 1}.- ${option}`}</Typography>;
        })}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
