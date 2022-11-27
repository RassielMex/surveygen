import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question } from "../interfaces/Question";
import { Survey } from "../interfaces/Survey";

const initialState: Survey = {
  title: "",
  questions: [],
};

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.questions?.push(action.payload);
    },
    deleteQuestion: (state, action: PayloadAction<Question>) => {
      const newStateQuestions = state.questions?.filter((question) => {
        return question.mainQuestion !== action.payload.mainQuestion;
      });
      console.log(newStateQuestions);
      state.questions =
        newStateQuestions && newStateQuestions?.length >= 0
          ? newStateQuestions
          : state.questions;
    },
  },
});

export const { setTitle, addQuestion, deleteQuestion } = surveySlice.actions;

export default surveySlice.reducer;
