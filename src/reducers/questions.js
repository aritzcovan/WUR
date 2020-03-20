import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION_ANSWER,
  ADD_QUESTION
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTION_ANSWER:
      const { authUser, questionId, option } = action;

      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [option]: {
            ...state[questionId][option],
            votes: state[questionId][option].votes.concat(authUser)
          }
        }
      };
    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question
      };

    default:
      return state;
  }
}
