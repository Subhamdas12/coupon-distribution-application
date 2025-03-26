import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCustomerCouponsAsync,
  requestCouponAsync,
  selectCustomerCoupons,
} from "../features/coupon/couponSlice";
import {
  fetchUserByIpOrSessionAsync,
  selectUser,
} from "../features/user/userSlice";

const CouponsAvailable = () => {
  const dispatch = useDispatch();
  const [timeRemaining, setTimeRemaining] = useState(null);
  useEffect(() => {
    dispatch(getCustomerCouponsAsync());
    // dispatch(fetchUserByIpOrSessionAsync());
  }, [dispatch]);
  const coupons = useSelector(selectCustomerCoupons);
  const user = useSelector(selectUser);
  useEffect(() => {
    dispatch(fetchUserByIpOrSessionAsync());
  }, [dispatch, coupons]);
  console.log("user", user);
  console.log("coupons", coupons);

  useEffect(() => {
    if (user?.lastClaimedAt) {
      const lastClaimedTime = new Date(user.lastClaimedAt).getTime();
      const currentTime = new Date().getTime();
      const diff = 3600000 - (currentTime - lastClaimedTime); // 1 hour = 3600000 ms
      if (diff > 0) {
        setTimeRemaining(diff);
        const interval = setInterval(() => {
          setTimeRemaining((prev) => (prev > 1000 ? prev - 1000 : 0));
        }, 1000);
        return () => clearInterval(interval);
      }
    }
  }, [user, dispatch]);
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
  };

  const requestCoupon = (id) => {
    dispatch(requestCouponAsync(id));
  };
  return (
    <div>
      <section id="coupons" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Available Coupons
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Check out these exclusive deals waiting for you
            </p>
          </div>

          <div className="mt-12">
            {/* Queue Position Section
            <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Your Position in Queue
                  </h3>
                  <p className="text-gray-500">You are position #5 in line</p>
                </div>
                <button
                  className="mt-4 sm:mt-0 flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50"
                  disabled
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    ></path>
                  </svg>
                  Claim Next Available
                </button>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: "20%" }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Start of Queue</span>
                <span>~4 in line</span>
                <span>Your Position</span>
              </div>
            </div> */}
            {/* Coupon Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coupons &&
                coupons.map((coupon, index) => (
                  <div
                    key={index}
                    className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative">
                      <div
                        className="h-48 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(https://picsum.photos/200/300?random=${index})`,
                        }}
                      ></div>
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {coupon.discountType == "percentage" &&
                          coupon.discount + "%"}
                        {coupon.discountType == "shipping" && "Free Shipping"}
                        {coupon.discountType == "fixed" &&
                          coupon.discount + "$"}
                      </div>
                    </div>
                    <div className="border-t border-gray-200 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 text-left">
                            {coupon.couponCode}
                          </h3>
                          <p className="mt-1 text-gray-500 text-sm">
                            Valid until{" "}
                            {new Date(coupon.expirationDate).toLocaleDateString(
                              "en-GB"
                            )}
                          </p>
                        </div>

                        {coupon.isActive ? (
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            Available
                          </div>
                        ) : (
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-red-100 text-red-800">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              ></path>
                            </svg>
                            Not Available
                          </div>
                        )}
                      </div>

                      <p className="mt-3 text-gray-600 text-left">
                        {coupon.description}
                      </p>
                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 inline mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            ></path>
                          </svg>
                          {coupon.claimedCoupons} claimed
                        </span>
                        {coupon?.CouponClaims[0] &&
                          coupon?.CouponClaims[0].status == "Requested" && (
                            <button
                              className="inline-flex items-center justify-center gap-2 border bg-background hover:text-accent-foreground h-10 px-4 py-2 text-primary border-primary hover:bg-indigo-50 rounded-md text-sm font-medium disabled:opacity-50"
                              disabled
                            >
                              Requested
                            </button>
                          )}
                        {coupon?.CouponClaims[0] &&
                          coupon?.CouponClaims[0].status == "Claimed" && (
                            <button
                              className="inline-flex items-center justify-center gap-2 border border-green-600 bg-green-600 text-white hover:bg-green-700 hover:border-green-700 h-10 px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50"
                              disabled
                            >
                              Already Claimed
                            </button>
                          )}

                        {coupon.isActive &&
                          !coupon?.CouponClaims[0] &&
                          (timeRemaining > 0 ? (
                            <span className="text-sm text-gray-600">
                              Available in {formatTime(timeRemaining)}
                            </span>
                          ) : (
                            <button
                              className="inline-flex items-center justify-center gap-2 border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 h-10 px-4 py-2 rounded-md text-sm font-medium"
                              onClick={() => requestCoupon(coupon.id)}
                            >
                              Request
                            </button>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CouponsAvailable;
