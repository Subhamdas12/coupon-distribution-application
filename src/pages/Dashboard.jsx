import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCouponClaimsAsync,
  getAllCouponsAsync,
  selectCouponClaims,
  selectCoupons,
} from "../features/coupon/couponSlice";
const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCouponClaimsAsync());
    dispatch(getAllCouponsAsync());
  }, [dispatch]);

  const coupons = useSelector(selectCoupons);

  const couponClaims = useSelector(selectCouponClaims);
  console.log(coupons);
  return (
    <main className="flex-1 p-6 pt-16 md:pt-6">
      <Navbar />
      <div className="mb-3"></div>
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your coupon management system
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Total Coupons",
              value: coupons.length,
            },
            {
              title: "Active Coupons",
              value: coupons.filter((coupon) => coupon.isActive).length,
            },
            {
              title: "InActive coupons Users",
              value: coupons.filter((coupon) => !coupon.isActive).length,
            },
            {
              title: "Total Claims",
              value: couponClaims.length,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card text-card-foreground shadow-sm p-6"
            >
              <div className="flex flex-row items-center justify-between pb-2">
                <div className="tracking-tight text-sm font-medium">
                  {stat.title}
                </div>
              </div>
              <div className="pt-0">
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              Recent Activity
            </h2>
            <p className="text-sm text-muted-foreground">
              Latest coupon claims and updates
            </p>
            <div className="space-y-4 mt-4">
              {couponClaims &&
                couponClaims.map((couponClaim, index) => (
                  <div key={index} className="flex items-start gap-4 text-left">
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700">
                      {couponClaim.ipAddress}
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        IP {couponClaim.ipAddress} with sessionId{" "}
                        {couponClaim.sessionId} {couponClaim.status}{" "}
                        {couponClaim.Coupon.couponCode}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        at{" "}
                        {new Date(couponClaim.claimedAt).toLocaleDateString(
                          "en-GB"
                        )}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              Expiring Soon
            </h2>
            <p className="text-sm text-muted-foreground">
              Coupons that will expire in the next 7 days
            </p>
            <div className="space-y-4 mt-4">
              {coupons &&
                [...coupons]
                  .sort(
                    (a, b) =>
                      new Date(b.expirationDate) - new Date(a.expirationDate)
                  )
                  .map((coupon, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border p-3"
                    >
                      <div>
                        <div className="font-medium">{coupon.couponCode}</div>
                        <div className="text-sm text-muted-foreground">
                          {coupon.discount}
                        </div>
                      </div>
                      <div className="text-sm font-medium text-orange-500">
                        {new Date(coupon.expirationDate).toLocaleDateString(
                          "en-GB"
                        )}
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
