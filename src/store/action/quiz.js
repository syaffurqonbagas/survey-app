export const SET_TIMER = "quiz/SET_TIMER";

export const SET_CURRENT_NUMBER = "quiz/SET_CURRENT_NUMBER";

export const SET_CURRENT_DATA = "quiz/SET_CURRENT_DATA";

export const setTimer = (payload) => ({
  type: SET_TIMER,
  payload,
});

export const setNumber = (payload) => ({
  type: SET_CURRENT_NUMBER,
  payload,
});

export const setData = (payload) => ({
  type: SET_CURRENT_DATA,
  payload,
});
