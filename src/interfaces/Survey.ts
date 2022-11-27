import { Question } from "./Question";

export interface Survey {
  title: string;
  questions: Question[] | null;
}
