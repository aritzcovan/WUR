import { saveQuestion } from "../utils/api";
import { addQuestionForUser } from "../actions/users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function addQuestionAnswer(authUser, questionId, answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    authUser,
    questionId,
    option: answer
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function doAddQuestion(authUser, optionOne, optionTwo) {
  return dispatch => {
    return saveQuestion({ author: authUser, optionOne: optionOne, optionTwo: optionTwo }).then(
      ques => {
        //console.log(ques);
        dispatch(addQuestion(ques));
        dispatch(addQuestionForUser(ques));
      }
    );
  };
}
