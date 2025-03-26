import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getUserByIpOrSession } from "./userAPI";

const initialState = {
  user: null,
  value: 0,
  status: "idle",
  users: [],
  isAdmin: false,
};

export const fetchUserByIpOrSessionAsync = createAsyncThunk(
  "user/fetchUserByIpOrSession",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUserByIpOrSession();
      if (response.error) {
        return rejectWithValue(response.error);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllUsersAsync = createAsyncThunk(
  "user/fetchAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllUsers();
      if (response.error) {
        return rejectWithValue(response.error);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    setAdmin: (state) => {
      state.isAdmin = true;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByIpOrSessionAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserByIpOrSessionAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.data;
      })
      .addCase(fetchUserByIpOrSessionAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchAllUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllUsersAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload.data;
      })
      .addCase(fetchAllUsersAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount, setAdmin } =
  userSlice.actions;

export const selectCount = (state) => state.user.value;
export const selectUser = (state) => state.user.user;
export const selectUsers = (state) => state.user.users;
export const selectIsAdmin = (state) => state.user.isAdmin;
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default userSlice.reducer;
