import {
  RECEIVE_USERS,
  ADD_USER_ANSWER,
  ADD_QUESTION_FOR_USER
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_USER_ANSWER:
      const { authUser, questionId, option } = action;
      //get the answers
      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [questionId]: option
          }
        }
      };
    case ADD_QUESTION_FOR_USER:
      const { id, author } = action;

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id)
        }
      };
    default:
      return state;
  }
}
