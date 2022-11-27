import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { MouseEventHandler, useState } from "react";
import {
  NavigateFunction,
  NavigateOptions,
  useNavigate,
} from "react-router-dom";

type Props = {};

function TitleForm({}: Props) {
  const navigate: NavigateFunction = useNavigate();
  const [title, setTitle] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const createSurveyTitle: MouseEventHandler<HTMLButtonElement> = () => {
    const options: NavigateOptions = { replace: false };
    navigate("create/:" + title, options);
  };

  return (
    <Card sx={{ minWidth: "350px", width: "50%", borderRadius: 0 }}>
      <CardContent>
        <Typography variant="h6">
          Introduzca el titulo de su encuesta
        </Typography>
        <TextField
          sx={{ width: "100%", marginTop: "1rem" }}
          id="standard-basic"
          label="Título"
          variant="standard"
          value={title}
          onChange={handleChange}
        />
        <Stack direction={"row"} justifyContent="end">
          <Button
            variant="text"
            color="primary"
            sx={{ marginTop: "1rem" }}
            onClick={createSurveyTitle}
          >
            Crear
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default TitleForm;
