import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createCoupon,
  deleteCoupon,
  editCoupon,
  getAllCouponClaims,
  getAllCoupons,
  getAvailableCouponsWRTUser,
  requestCoupon,
} from "./couponAPI";

const initialState = {
  coupons: [],
  couponClaims: [],
  customerCoupons: [],
  status: "idle",
  error: null,
};

export const createCouponAsync = createAsyncThunk(
  "coupons/createCoupon",
  async (couponData, { rejectWithValue }) => {
    try {
      const response = await createCoupon(couponData);
      if (response.error) {
        return rejectWithValue(response.error);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllCouponClaimsAsync = createAsyncThunk(
  "coupons/getAllCouponClaims",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllCouponClaims();
      if (response.error) {
        return rejectWithValue(response.error);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const requestCouponAsync = createAsyncThunk(
  "coupons/requestCoupon",
  async (couponId, { rejectWithValue }) => {
    try {
      const response = await requestCoupon(couponId);
      if (response.error) {
        return rejectWithValue(response.error);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllCouponsAsync = createAsyncThunk(
  "coupons/getAllCoupons",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllCoupons();
      if (response.error) {
        return rejectWithValue(response.error);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editCouponAsync = createAsyncThunk(
  "coupons/editCoupon",
  async (updatedData, { rejectWithValue }) => {
    try {
      console.log("Data is ", updatedData);
      const response = await editCoupon(updatedData);
      if (response.error) {
        return rejectWithValue(response.error);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCouponAsync = createAsyncThunk(
  "coupons/deleteCoupon",
  async (couponId, { rejectWithValue }) => {
    try {
      const response = await deleteCoupon(couponId);
      if (response.error) {
        return rejectWithValue(response.error);
      }
      return couponId; // Return the deleted coupon ID
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCustomerCouponsAsync = createAsyncThunk(
  "coupons/getCustomerCoupons",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAvailableCouponsWRTUser();
      if (response.error) {
        return rejectWithValue(response.error);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const couponSlice = createSlice({
  name: "coupons",
  initialState,
  reducers: {
    resetCouponState: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCouponsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCouponsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.coupons = action.payload.data; // Set all coupons
      })
      .addCase(getAllCouponsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getCustomerCouponsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCustomerCouponsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.customerCoupons = action.payload.data;
      })
      .addCase(getCustomerCouponsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createCouponAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCouponAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.coupons.push(action.payload.data); // Add the new coupon to the array
      })
      .addCase(createCouponAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(editCouponAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editCouponAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedData = action.payload.data;
        const index = state.coupons.findIndex((c) => c.id === updatedData.id);
        if (index !== -1) {
          state.coupons[index] = { ...state.coupons[index], ...updatedData };
        }
      })
      .addCase(editCouponAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteCouponAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCouponAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.coupons = state.coupons.filter((c) => c.id !== action.payload);
      })
      .addCase(deleteCouponAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(requestCouponAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(requestCouponAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedData = action.payload.data;
        console.log("updatedData", updatedData);
        const index = state.customerCoupons.findIndex(
          (c) => c.id === updatedData.id
        );
        if (index !== -1) {
          state.customerCoupons[index] = {
            ...state.customerCoupons[index],
            ...updatedData,
          };
        }
      })
      .addCase(requestCouponAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getAllCouponClaimsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCouponClaimsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.couponClaims = action.payload.data; // Store coupon claims
      })
      .addCase(getAllCouponClaimsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetCouponState } = couponSlice.actions;
export const selectCoupons = (state) => state.coupon.coupons;
export const selectCouponStatus = (state) => state.coupon.status;
export const selectCouponError = (state) => state.coupon.error;
export const selectCustomerCoupons = (state) => state.coupon.customerCoupons;
export const selectCouponClaims = (state) => state.coupon.couponClaims;

export default couponSlice.reducer;
