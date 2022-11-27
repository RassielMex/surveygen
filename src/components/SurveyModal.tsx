import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import { Question } from "../interfaces/Question";
import { useAppDispatch } from "../store/hooks";
import { addQuestion } from "../store/surveySlice";

type Props = {
  open: boolean;
  handleClose: VoidFunction;
};

const SurveyModal = (props: Props) => {
  const dispatch = useAppDispatch();

  const [numOptions, setNumOptions] = useState<string>(""); //manage current selected value
  const [options, setOptions] = useState<Number[]>([1, 2]); //manage array of input text acordint to selected value
  const [optionValues, setOptionValues] = useState<string[]>(["", ""]); // manage values of actual input text
  const [question, setQuestion] = useState<string>(""); // stores question value

  const handleChange = (e: SelectChangeEvent) => {
    let optionsArr = new Array<Number>(parseInt(e.target.value)).fill(0);
    let valuesArr = new Array<string>(parseInt(e.target.value)).fill("");

    optionsArr = optionsArr.map((val, index) => {
      return index + 1;
    });

    setOptions(optionsArr);
    setOptionValues(valuesArr);
    setNumOptions(e.target.value);
  };

  const handleInputTextChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.id === "questionInput") {
      setQuestion(e.target.value);
    } else {
      const newValues = optionValues.map((value, index) => {
        return index !== parseInt(e.target.id) ? value : e.target.value;
      });
      setOptionValues(newValues);
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const newQuestion: Question = {
      mainQuestion: question,
      options: optionValues,
    };
    //console.log(newQuestion);
    dispatch(addQuestion(newQuestion));
    props.handleClose();
  };

  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          sx={{
            borderRadius: 0,
            width: 350,
            maxHeight: 600,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Stack direction={"column"} spacing={2}>
                <TextField
                  id="questionInput"
                  label="Introduzca su pregunta"
                  variant="standard"
                  onChange={handleInputTextChange}
                  value={question}
                />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="options"># de Opciones</InputLabel>
                  <Select
                    labelId="optionsLabel"
                    id="select-options"
                    value={numOptions}
                    onChange={handleChange}
                    label="optionsLabel"
                  >
                    <MenuItem selected value={2}>
                      2
                    </MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
                {options.map((val, index) => {
                  return (
                    <TextField
                      key={index}
                      id={`${index}`}
                      label={`Opcion ${val}`}
                      variant="standard"
                      onChange={handleInputTextChange}
                      value={optionValues[index]}
                    />
                  );
                })}
              </Stack>
              <Stack mt={"1rem"}>
                <Button color="primary" variant="text" type="submit">
                  Agregar
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default SurveyModal;
