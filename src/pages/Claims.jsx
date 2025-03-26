import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCouponClaimsAsync,
  selectCouponClaims,
} from "../features/coupon/couponSlice";

const Claims = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCouponClaimsAsync());
  }, [dispatch]);

  const couponClaims = useSelector(selectCouponClaims);
  console.log(couponClaims);
  const [claims, setClaims] = useState([
    {
      coupon: "SUMMER25",
      user: "John Doe",
      claimedDate: "7/1/2023 at 4:00:00 PM",
      usedDate: "7/2/2023 at 7:50:00 PM",
      orderId: "ORD-12345",
      status: "used",
    },
    {
      coupon: "SUMMER25",
      user: "Jane Smith",
      claimedDate: "7/2/2023 at 2:45:00 PM",
      usedDate: "7/2/2023 at 5:15:00 PM",
      orderId: "ORD-12346",
      status: "used",
    },
    {
      coupon: "WELCOME10",
      user: "Bob Johnson",
      claimedDate: "7/3/2023 at 9:50:00 PM",
      usedDate: "Not used yet",
      orderId: "N/A",
      status: "claimed",
    },
    {
      coupon: "FLASH15",
      user: "Alice Brown",
      claimedDate: "7/4/2023 at 4:40:00 PM",
      usedDate: "7/5/2023 at 7:00:00 PM",
      orderId: "ORD-12350",
      status: "used",
    },
    {
      coupon: "WELCOME10",
      user: "Charlie Davis",
      claimedDate: "7/5/2023 at 8:15:00 PM",
      usedDate: "Not used yet",
      orderId: "N/A",
      status: "claimed",
    },
    {
      coupon: "FREESHIP",
      user: "John Doe",
      claimedDate: "7/6/2023 at 2:00:00 PM",
      usedDate: "7/6/2023 at 3:45:00 PM",
      orderId: "ORD-12355",
      status: "used",
    },
    {
      coupon: "FLASH15",
      user: "Jane Smith",
      claimedDate: "7/6/2023 at 6:50:00 PM",
      usedDate: "7/7/2023 at 3:15:00 PM",
      orderId: "ORD-12360",
      status: "used",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredClaims = claims.filter((claim) => {
    const matchesSearch =
      claim.coupon.toLowerCase().includes(searchTerm.toLowerCase()) ||
      claim.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      claim.orderId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" || claim.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "used":
        return (
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
            Used
          </span>
        );
      case "claimed":
        return (
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800">
            Claimed
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="mb-3"></div>
      <main className="flex-1 p-6 pt-16 md:pt-6">
        <div className="space-y-6">
          <div className="text-left">
            <h1 className="text-3xl font-bold tracking-tight">All Claims</h1>
            <p className="text-muted-foreground">
              View all coupon claims across your system
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-md border">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                        Coupon Code
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                        User IP
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                        User Session
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                        Claimed/Requested Date
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                        Coupon Status
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    {couponClaims &&
                      couponClaims.map((claim, index) => (
                        <tr
                          key={index}
                          className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                        >
                          <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                            {claim.Coupon.couponCode}
                          </td>
                          <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                            {claim.ipAddress}
                          </td>
                          <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                            {claim.sessionId}
                          </td>
                          <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                            {new Date(claim.claimedAt).toLocaleDateString(
                              "en-GB"
                            )}
                          </td>
                          <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                            {claim.status}
                          </td>
                          <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                            {claim.Coupon.isActive ? "Active" : "Inactive"}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Claims;
