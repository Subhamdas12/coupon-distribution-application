import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteCouponAsync,
  editCouponAsync,
  getAllCouponsAsync,
  selectCoupons,
} from "../features/coupon/couponSlice";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";

const Coupons = () => {
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [editCoupon, setEditCoupon] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  useEffect(() => {
    dispatch(getAllCouponsAsync());
  }, [dispatch, editCoupon]);
  const coupons = useSelector(selectCoupons);
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
      isActive: true,
    },
  });

  useEffect(() => {
    if (editCoupon) {
      setValue("couponCode", editCoupon.couponCode);
      setValue("discount", editCoupon.discount);
      setValue("discountType", editCoupon.discountType);
      setValue("description", editCoupon.description);
      if (editCoupon.expirationDate) {
        const formattedDate = new Date(editCoupon.expirationDate)
          .toISOString()
          .split("T")[0]; // Extract YYYY-MM-DD
        setValue("expirationDate", formattedDate);
      }
      setValue("isActive", editCoupon.isActive);
    }
  }, [editCoupon, setValue]);

  const onSubmit = (data) => {
    dispatch(editCouponAsync({ ...data, id: editCoupon.id }));
    setEditCoupon(null);
    reset();
  };

  return (
    <>
      <Navbar />
      <div className="mb-3"></div>
      <main className="flex-1 p-6 pt-16 md:pt-6">
        {editCoupon ? (
          <div className="rounded-lg border bg-white shadow-sm p-6 text-left">
            <h1 className="text-3xl font-bold tracking-tight">Edit Coupon</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                        min: {
                          value: 1,
                          message: "Discount must be at least 1",
                        },
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
                {/* <div>
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
              </div> */}

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
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  setEditCoupon(null);
                  reset();
                }}
              >
                Cancel
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-left">
                  Coupons
                </h1>
                <p className="text-muted-foreground">
                  Manage your discount coupons
                </p>
              </div>

              <Link
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                to="/createCoupon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus mr-2 h-4 w-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                Add Coupon
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  {/* <div className="relative w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input
                  className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full pl-8"
                  placeholder="Search coupons..."
                  type="search"
                  value=""
                />
              </div> */}
                </div>
                {/* <div className="flex items-center gap-2">
              <button
                type="button"
                role="combobox"
                aria-controls="radix-:r5:"
                aria-expanded="false"
                aria-autocomplete="none"
                dir="ltr"
                data-state="closed"
                className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[180px]"
              >
                <span style={{ pointerEvents: "none" }}>All Coupons</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div> */}
              </div>
              <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                          Code
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                          Discount
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                          Type
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                          Claims
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                          Remaining
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                          Total
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                          Expires
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                          Status
                        </th>
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-right">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                      {coupons.map((coupon, index) => (
                        <tr
                          key={index}
                          className="border-b transition-colors hover:bg-muted/50"
                        >
                          <td className="p-4 font-medium">
                            {coupon.couponCode}
                          </td>
                          <td className="p-4">{coupon.discount}</td>
                          <td className="p-4">{coupon.discountType}</td>
                          <td className="p-4">{coupon.claimedCoupons}</td>
                          <td className="p-4">{coupon.remainingCoupons}</td>
                          <td className="p-4">{coupon.usageLimit}</td>
                          <td className="p-4">
                            {new Date(coupon.expirationDate).toLocaleDateString(
                              "en-GB"
                            )}
                          </td>
                          <td className="p-4">
                            <span
                              className={
                                coupon.isActive
                                  ? "text-green-600"
                                  : "text-red-600"
                              }
                            >
                              {coupon.isActive ? "Active" : "Inactive"}
                            </span>
                          </td>
                          <td className="p-4 text-right relative">
                            {/* Action Button */}
                            <button
                              className="h-10 w-10 rounded-md hover:bg-gray-100"
                              type="button"
                              onClick={() => toggleDropdown(index)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-ellipsis h-4 w-4"
                              >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {openDropdown === index && (
                              <div className="absolute right-0 mt-0 w-32 bg-white border rounded-md shadow-lg z-10 ">
                                <button
                                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                  onClick={() => {
                                    setEditCoupon(coupon);
                                    setOpenDropdown(null);
                                  }}
                                >
                                  Edit
                                </button>
                                <button
                                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer"
                                  onClick={() => {
                                    // onDelete(coupon);
                                    dispatch(deleteCouponAsync(coupon.id));
                                    setOpenDropdown(null);
                                  }}
                                >
                                  Delete
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Coupons;
