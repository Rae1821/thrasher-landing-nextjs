import Image from "next/image";
// import { Separator } from "../ui/separator";
import Header from "./Header";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import HOADocuments from "./HOADocuments";
import Link from "next/link";

const DocumentsPage = () => {
  return (
    <div>
      <Header />
      {/* hero section */}
      <main className="min-h-screen w-full">
        <div className="z-0 flex h-[200px] flex-col items-center justify-center bg-stone-800 bg-[url('/images/unsplash-bg.jpg')] bg-cover bg-center bg-blend-overlay">
          <h1 className="z-10 font-playfair text-3xl font-black text-slate-50">
            HOA Documents
          </h1>
          <p className="mt-2 w-2/3 text-center font-sans text-sm text-slate-100">
            Click on each link below to view, print, or download the documents.
          </p>
        </div>
        {/* bg-[#A67A44]/20 */}
        <div className="relative h-[900px] overflow-hidden ">
          <div className="absolute bottom-0 top-[53%] block h-[800px] w-full translate-x-0 skew-y-[-30deg] overflow-hidden bg-emerald-700"></div>
          <div className="absolute bottom-0 top-[53%] block h-[800px] w-full translate-x-0 skew-y-[30deg] overflow-hidden bg-emerald-700"></div>
          <div className="relative">
            {/* main documents section */}
            <div className="flex flex-col items-center justify-center gap-8 py-24">
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                {/* covenant */}
                <div className="relative h-64 w-[350px] overflow-hidden rounded-xl border bg-white px-4 py-8 text-center shadow-lg md:w-72">
                  <div className="mb-4 inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mb-0 sm:mr-6">
                    <Image
                      src="/icons/document.svg"
                      alt="document"
                      height={32}
                      width={32}
                      className=""
                    />
                  </div>
                  <div className="relative">
                    <h3 className="mt-2 font-bold uppercase tracking-wider">
                      The Covenant
                    </h3>
                    <p className="mb-6 mt-2 w-64 text-sm">
                      Rules & regulations for Thrasher Landing
                    </p>
                    <Link
                      href="/"
                      className="mt-3 inline-flex items-center text-emerald-700"
                    >
                      View Document
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="ml-2 size-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
                {/* covenant amendment */}
                <div className="h-64 w-72 rounded-xl border bg-white px-4 py-8 text-center shadow-lg">
                  <div className="mb-4 inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mb-0 sm:mr-6">
                    <Image
                      src="/icons/document.svg"
                      alt="document"
                      height={32}
                      width={32}
                      className=""
                    />
                  </div>

                  <h3 className="mt-2 text-sm font-bold uppercase tracking-wider">
                    The Covenant Amendment
                  </h3>
                  <p className="mb-6 mt-2 w-64 text-center text-sm">
                    Rules & regulations for Thrasher Landing
                  </p>
                  <Link
                    href="/"
                    className="mt-3 inline-flex items-center text-emerald-700"
                  >
                    View Document
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="ml-2 size-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
                {/* bi-laws */}
                <div className="flex h-56 w-[350px] items-center justify-between rounded-xl border bg-white px-4 py-8 shadow-lg">
                  <div className="mb-4 inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mb-0 sm:mr-6">
                    <Image
                      src="/icons/document.svg"
                      alt="document"
                      height={32}
                      width={32}
                      className=""
                    />
                  </div>
                  <div className="ml-2 md:ml-0">
                    <h3 className="mb-3 text-left text-lg font-semibold tracking-wider">
                      The Bi-Laws
                    </h3>
                    <p className="mb-6 w-64 text-left text-sm text-gray-600">
                      Rules & regulations for Thrasher Landing
                    </p>
                    <Link
                      href="/"
                      className="mt-3 inline-flex items-center text-emerald-700"
                    >
                      View Document
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="ml-2 size-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>

                  {/* <button className="border-2 border-black  bg-white px-8 py-0.5 text-xs uppercase text-neutral-700 shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 dark:border-white dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                    View Document
                  </button> */}
                </div>
              </div>
            </div>

            <div className="relative min-h-screen px-4">
              <div className="mt-24 ">
                <Card>
                  <CardHeader className="px-7">
                    <CardTitle>HOA Meetings</CardTitle>
                    <CardDescription>
                      Minutes from previous HOA meetings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader></TableHeader>
                      <TableBody>
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">
                              January 18th, 2024
                            </div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              Annual meeting
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button className="bg-emerald-600 text-xs">
                              View
                            </Button>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          {" "}
                          <TableCell>
                            {" "}
                            <div className="font-medium">
                              November 17th, 2023
                            </div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              {" "}
                              Annual meeting{" "}
                            </div>{" "}
                          </TableCell>{" "}
                          <TableCell className="text-right">
                            <Button className="text-xs" variant="secondary">
                              View
                            </Button>
                          </TableCell>{" "}
                        </TableRow>
                        <TableRow>
                          {" "}
                          <TableCell>
                            {" "}
                            <div className="font-medium">
                              October 21st, 2022
                            </div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              {" "}
                              Annual meeting{" "}
                            </div>{" "}
                          </TableCell>{" "}
                          <TableCell className="text-right">
                            <Button className="text-xs" variant="secondary">
                              View
                            </Button>
                          </TableCell>{" "}
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DocumentsPage;

{
  /* <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-neutarl-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
  View Document
</button> */
}

// <Card>
//   <CardHeader className="px-7">
//     <CardTitle>Orders</CardTitle>
//     <CardDescription>Recent orders from your store.</CardDescription>
//   </CardHeader>
//   <CardContent>
//     <Table>
//       <TableHeader>
//         <TableRow>
//           <TableHead>Customer</TableHead>
//           <TableHead className="hidden sm:table-cell">Type</TableHead>
//           <TableHead className="hidden sm:table-cell">Status</TableHead>
//           <TableHead className="hidden md:table-cell">Date</TableHead>
//           <TableHead className="text-right">Amount</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         <TableRow className="bg-accent">
//           <TableCell>
//             <div className="font-medium">Liam Johnson</div>
//             <div className="hidden text-sm text-muted-foreground md:inline">
//               liam@example.com
//             </div>
//           </TableCell>
//           <TableCell className="hidden sm:table-cell">Sale</TableCell>
//           <TableCell className="hidden sm:table-cell">
//             <Badge className="text-xs" variant="secondary">
//               Fulfilled
//             </Badge>
//           </TableCell>
//           <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
//           <TableCell className="text-right">$250.00</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>
//             <div className="font-medium">Olivia Smith</div>
//             <div className="hidden text-sm text-muted-foreground md:inline">
//               olivia@example.com
//             </div>
//           </TableCell>
//           <TableCell className="hidden sm:table-cell">Refund</TableCell>
//           <TableCell className="hidden sm:table-cell">
//             <Badge className="text-xs" variant="outline">
//               Declined
//             </Badge>
//           </TableCell>
//           <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
//           <TableCell className="text-right">$150.00</TableCell>
//         </TableRow>
//         {/* <TableRow>
//                       <TableCell>
//                         <div className="font-medium">Liam Johnson</div>
//                         <div className="hidden text-sm text-muted-foreground md:inline">
//                           liam@example.com
//                         </div>
//                       </TableCell>
//                       <TableCell className="hidden sm:table-cell">
//                         Sale
//                       </TableCell>
//                       <TableCell className="hidden sm:table-cell">
//                         <Badge className="text-xs" variant="secondary">
//                           Fulfilled
//                         </Badge>
//                       </TableCell>
//                       <TableCell className="hidden md:table-cell">
//                         2023-06-23
//                       </TableCell>
//                       <TableCell className="text-right">$250.00</TableCell>
//                     </TableRow> */}
//         <TableRow>
//           <TableCell>
//             <div className="font-medium">Noah Williams</div>
//             <div className="hidden text-sm text-muted-foreground md:inline">
//               noah@example.com
//             </div>
//           </TableCell>
//           <TableCell className="hidden sm:table-cell">
//             Subscription
//           </TableCell>
//           <TableCell className="hidden sm:table-cell">
//             <Badge className="text-xs" variant="secondary">
//               Fulfilled
//             </Badge>
//           </TableCell>
//           <TableCell className="hidden md:table-cell">2023-06-25</TableCell>
//           <TableCell className="text-right">$350.00</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>
//             <div className="font-medium">Emma Brown</div>
//             <div className="hidden text-sm text-muted-foreground md:inline">
//               emma@example.com
//             </div>
//           </TableCell>
//           <TableCell className="hidden sm:table-cell">Sale</TableCell>
//           <TableCell className="hidden sm:table-cell">
//             <Badge className="text-xs" variant="secondary">
//               Fulfilled
//             </Badge>
//           </TableCell>
//           <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
//           <TableCell className="text-right">$450.00</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>
//             <div className="font-medium">Liam Johnson</div>
//             <div className="hidden text-sm text-muted-foreground md:inline">
//               liam@example.com
//             </div>
//           </TableCell>
//           <TableCell className="hidden sm:table-cell">Sale</TableCell>
//           <TableCell className="hidden sm:table-cell">
//             <Badge className="text-xs" variant="secondary">
//               Fulfilled
//             </Badge>
//           </TableCell>
//           <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
//           <TableCell className="text-right">$250.00</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>
//             <div className="font-medium">Olivia Smith</div>
//             <div className="hidden text-sm text-muted-foreground md:inline">
//               olivia@example.com
//             </div>
//           </TableCell>
//           <TableCell className="hidden sm:table-cell">Refund</TableCell>
//           <TableCell className="hidden sm:table-cell">
//             <Badge className="text-xs" variant="outline">
//               Declined
//             </Badge>
//           </TableCell>
//           <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
//           <TableCell className="text-right">$150.00</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>
//             <div className="font-medium">Emma Brown</div>
//             <div className="hidden text-sm text-muted-foreground md:inline">
//               emma@example.com
//             </div>
//           </TableCell>
//           <TableCell className="hidden sm:table-cell">Sale</TableCell>
//           <TableCell className="hidden sm:table-cell">
//             <Badge className="text-xs" variant="secondary">
//               Fulfilled
//             </Badge>
//           </TableCell>
//           <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
//           <TableCell className="text-right">$450.00</TableCell>
//         </TableRow>
//       </TableBody>
//     </Table>
//   </CardContent>
// </Card>
