"use client";

import { useUser } from "@clerk/nextjs";

const HOAAccount = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  // In case user signs out while on the page
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const monthsOfTheYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // const getDate = () => {
  //   const date = new Date().getDate();
  //   const month = new Date().getMonth();
  //   const year = new Date().getFullYear();

  //   monthsOfTheYear.map((month) => {});
  // };

  return (
    <div>
      <h1>Hello, {user.firstName}</h1>
      <p>Today&apos; Date is: {}</p>
      <div>
        <div>
          <h2>Current Payment Due</h2>
          <div>
            <p>Date</p>
            <p>Amount</p>
            <button>Pay Now</button>
          </div>
        </div>
        <div>
          <h2>Payment History</h2>
          <div>
            <p>Date</p>
            <p>Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOAAccount;
