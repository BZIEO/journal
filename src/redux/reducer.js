import { ADD_ITEM } from "./actions";

const initialState = {
  diaryItems: [],
};

const diaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
      };
  }
};

export default diaryReducer;
