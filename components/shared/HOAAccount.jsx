"use client";

import { useUser } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import CheckoutButton from "./CheckoutButton";
import { loadStripe } from "@stripe/stripe-js";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";

const HOAAccount = () => {
  const priceId = "price_1PM8xmKINKVDMdIs6pB9gESh";
  const { isLoaded, isSignedIn, user } = useUser();
  const [prices, setPrices] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch("/api/products");
    const products = await data.json();
    setPrices(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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

  // Need to get session info from stripe so if the resident has paid it will show in the payment history section and say something like "all caught up!"

  return (
    <div className="px-4">
      <div className=" ml-8 w-full md:w-1/2">
        <h1 className="mt-12 text-3xl font-semibold">
          Hello, {user.firstName}
        </h1>
        <p className="mt-2">
          Today is{" "}
          <span className="font-medium">
            {`${monthsOfTheYear[month]} ${date}, ${year}`}
          </span>
        </p>
      </div>

      <div className="mt-12 w-full px-4 md:w-[600px]">
        <Card>
          <CardHeader>
            <CardTitle>Current HOA Payment Due for {year}</CardTitle>
          </CardHeader>
          <CardContent>
            {" "}
            {prices.map((price) => (
              <p key={priceId}>
                {" "}
                {(price.unit_amount / 100).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            ))}
          </CardContent>
          <CardFooter>
            <CheckoutButton priceId={priceId} />
          </CardFooter>
        </Card>

        <Separator className="my-12" />

        <Card>
          <CardHeader className="px-7">
            <CardTitle>HOA Payments</CardTitle>
            <CardDescription>Your prevous HOA payments</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-accent">
                  <TableCell>
                    <div className="font-medium">2023</div>
                  </TableCell>
                  <TableCell>
                    <Badge className="text-xs" variant="secondary">
                      Paid
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">2022</div>
                  </TableCell>
                  <TableCell>
                    <Badge className="text-xs" variant="secondary">
                      Paid
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">2021</div>
                  </TableCell>
                  <TableCell>
                    <Badge className="text-xs" variant="secondary">
                      Paid
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <div className="font-medium">2020</div>
                  </TableCell>
                  <TableCell>
                    <Badge className="text-xs" variant="secondary">
                      Paid
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HOAAccount;
