import React from "react";

const Dashboard = () => {
  return (
    <main className="flex-1 p-6 pt-16 md:pt-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your coupon management system
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Total Coupons", value: 24, change: "+2 from last month" },
            {
              title: "Active Coupons",
              value: 18,
              change: "75% of total coupons",
            },
            {
              title: "Total Claims",
              value: 342,
              change: "+18% from last month",
            },
            {
              title: "Active Users",
              value: 573,
              change: "+201 from last month",
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
              {[
                {
                  user: "john.doe@example.com",
                  action: "claimed coupon SUMMER25",
                  time: "30 minutes ago",
                },
                {
                  user: "admin@example.com",
                  action: "created coupon FLASH15",
                  time: "about 2 hours ago",
                },
                {
                  user: "admin@example.com",
                  action: "updated coupon WELCOME10",
                  time: "about 5 hours ago",
                },
                {
                  user: "jane.smith@example.com",
                  action: "claimed coupon WELCOME10",
                  time: "about 8 hours ago",
                },
                {
                  user: "admin@example.com",
                  action: "disabled coupon EXPIRED20",
                  time: "1 day ago",
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700">
                    {activity.user[0].toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      {activity.user} {activity.action}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.time}
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
              {[
                {
                  name: "SUMMER25",
                  discount: "25% off",
                  expiry: "Expires in 2 days",
                },
                {
                  name: "FLASH15",
                  discount: "15% off",
                  expiry: "Expires in 3 days",
                },
                {
                  name: "WELCOME10",
                  discount: "10% off",
                  expiry: "Expires in 5 days",
                },
              ].map((coupon, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div>
                    <div className="font-medium">{coupon.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {coupon.discount}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-orange-500">
                    {coupon.expiry}
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
