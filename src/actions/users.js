import { saveQuestionAnswer } from "../utils/api";
import { addQuestionAnswer } from "../actions/questions";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
export const ADD_QUESTION_FOR_USER = "ADD_QUESTION_FOR_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

function addAnswer(authUser, questionId, option) {
  return {
    type: ADD_USER_ANSWER,
    authUser,
    questionId,
    option
  };
}

export function addUserAnswer({ authedUser, questionId, option }) {
  //for the authUser - add the questionId and selected option
  // to the answers object in users
  return dispatch => {
    dispatch(addAnswer(authedUser, questionId, option));
    dispatch(addQuestionAnswer(authedUser, questionId, option));

    return saveQuestionAnswer(authedUser, questionId, option).catch(e =>
      console.warn("error in addUserAnswer", e)
    );
  };
}

export function addQuestionForUser({ id, author }) {
  return {
    type: ADD_QUESTION_FOR_USER,
    id,
    author
  };
}
