import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsersAsync, selectUsers } from "../features/user/userSlice";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsersAsync());
  }, [dispatch]);
  const users = useSelector(selectUsers);

  return (
    <>
      <Navbar />
      <div className="mb-3"></div>
      <main className="flex-1 p-6 pt-16 md:pt-6">
        <div className="space-y-6">
          <div className="text-left">
            <h1 className="text-3xl font-bold tracking-tight">Users</h1>
            <p className="text-muted-foreground">
              Manage users and view their coupon claims
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-md border">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                        IP Address
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                        Session ID
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                        Last Claimed At
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                        Coupons Claimed
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    {console.log(users)}
                    {users &&
                      users.map((user, index) => (
                        <tr
                          key={index}
                          className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                        >
                          <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                            {user.ipAddress}
                          </td>
                          <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                            {user.sessionId}
                          </td>
                          <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                            {new Date(user.lastClaimedAt).toLocaleDateString(
                              "en-GB"
                            )}
                          </td>
                          <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                            {user.CouponClaims?.length}
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

export default Users;
