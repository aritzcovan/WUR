import { RECEIVE_USERS, ADD_USER_ANSWER } from "../actions/users";

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
    default:
      return state;
  }
}
