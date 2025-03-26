import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createCouponAsync } from "../features/coupon/couponSlice";
import { Link } from "react-router-dom";
const CreateCoupon = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      couponCode: "",
      discount: "",
      discountType: "percentage",
      description: "",
      expirationDate: "",
      usageLimit: "",
      isActive: true,
    },
  });

  const onSubmit = (data) => {
    reset();
    dispatch(createCouponAsync(data));
  };

  return (
    <main className="flex-1 p-6 pt-16 md:pt-6 text-left">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Create New Coupon
          </h1>
          <p className="text-gray-500">
            Add a new discount coupon to your system
          </p>
        </div>
        <div className="rounded-lg border bg-white shadow-sm p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {/* Coupon Code */}
              <div>
                <label className="text-sm font-medium">Coupon Code</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2 mt-1"
                  placeholder="e.g. SUMMER25"
                  {...register("couponCode", {
                    required: "Coupon code is required",
                  })}
                />
                {errors.couponCode && (
                  <p className="text-red-500 text-sm">
                    {errors.couponCode.message}
                  </p>
                )}
              </div>

              {/* Discount Amount */}
              <div>
                <label className="text-sm font-medium">Discount Amount</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    className="w-full border rounded-md p-2"
                    placeholder="e.g. 25"
                    {...register("discount", {
                      required: "Discount is required",
                      min: { value: 1, message: "Discount must be at least 1" },
                    })}
                  />
                  <select
                    className="border rounded-md p-2"
                    {...register("discountType")}
                  >
                    <option value="percentage">Percentage (%)</option>
                    <option value="fixed">Fixed Amount ($)</option>
                    <option value="shipping">Free Shipping</option>
                  </select>
                </div>
                {errors.discount && (
                  <p className="text-red-500 text-sm">
                    {errors.discount.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-medium">Description</label>
                <textarea
                  className="w-full border rounded-md p-2 mt-1"
                  placeholder="Enter a description for this coupon"
                  {...register("description", {
                    required: "Description is required",
                    minLength: {
                      value: 10,
                      message: "Description must be at least 10 characters",
                    },
                  })}
                ></textarea>
                {errors.description && (
                  <p className="text-red-500 text-sm">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Expiration Date */}
              <div>
                <label className="text-sm font-medium">Expiration Date</label>
                <input
                  type="date"
                  className="w-full border rounded-md p-2 mt-1"
                  {...register("expirationDate", {
                    required: "Expiration date is required",
                    validate: (value) =>
                      new Date(value) > new Date() ||
                      "Expiration date must be in the future",
                  })}
                />
                {errors.expirationDate && (
                  <p className="text-red-500 text-sm">
                    {errors.expirationDate.message}
                  </p>
                )}
              </div>

              {/* Usage Limit */}
              <div>
                <label className="text-sm font-medium">Usage Limit</label>
                <input
                  type="number"
                  className="w-full border rounded-md p-2 mt-1"
                  placeholder="e.g. 100"
                  {...register("usageLimit", {
                    required: "Usage limit is required",
                    min: {
                      value: 1,
                      message: "Usage limit must be at least 1",
                    },
                  })}
                />
                {errors.usageLimit && (
                  <p className="text-red-500 text-sm">
                    {errors.usageLimit.message}
                  </p>
                )}
              </div>

              {/* Active Status */}
              <div className="flex justify-between items-center border p-4 rounded-lg">
                <div>
                  <label className="text-sm font-medium">Active Status</label>
                  <p className="text-gray-500">
                    Enable or disable this coupon.
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="w-6 h-6"
                  {...register("isActive")}
                  onChange={(e) => setValue("isActive", e.target.checked)}
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <Link to="/coupons">
                  <button
                    type="button"
                    className="border px-4 py-2 rounded-md hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Create Coupon
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CreateCoupon;
