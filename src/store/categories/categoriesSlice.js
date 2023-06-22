// import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

// Initializing redux-thunk: Migrating async fetch from shop component to reducer
export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: true,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    fetchCategoriesStart: (state) => {
      state.isLoading = true;
    },
    fetchCategoriesSuccess: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    },
    fetchCategoriesFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;

// export const categoriesReducer = (
//     state = CATEGORIES_INITIAL_STATE,
//     action = {}
// ) => {
//     const { type, payload } = action;

//     switch (type) {
//         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//             return { ...state, isLoading: true };
//         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//             return { ...state, categories: payload, isLoading: false };
//         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
//             return { ...state, error: payload, isLoading: false };
//         default:
//             return state;
//     }
// };
