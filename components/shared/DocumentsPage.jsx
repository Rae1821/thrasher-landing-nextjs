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

const DocumentsPage = () => {
  return (
    <div>
      <Header />
      {/* hero section */}
      <main className="min-h-screen">
        <div className="relative z-0 mb-8 flex h-[200px] flex-col items-center justify-center bg-stone-800 bg-[url('/images/unsplash-bg.jpg')] bg-cover bg-center bg-blend-overlay">
          <h1 className="z-10 font-playfair text-3xl font-black text-slate-50">
            HOA Documents
          </h1>
          <p className="mt-2 w-2/3 text-center font-sans text-sm text-slate-100">
            Click on each link below to view, print, or download the documents.
          </p>
        </div>

        {/* main documents section */}
        <div className="mt-12 flex flex-col items-center justify-center gap-8 py-12">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            {/* covenant */}
            <div className="h-56 rounded-xl border px-4 py-8 text-center shadow-lg md:w-72">
              <div className="mx-auto mb-2 w-10 rounded-full bg-emerald-600 p-2 shadow-lg">
                <Image
                  src="/icons/document.svg"
                  alt="document"
                  height={28}
                  width={28}
                  // className="mx-auto mb-4"
                />
              </div>

              <h3 className="mt-2 text-sm font-bold uppercase tracking-wider">
                The Covenant
              </h3>
              <p className="mb-6 mt-2 w-64 text-sm">
                Rules & regulations for Thrasher Landing
              </p>
              <button className="border-2 border-black  bg-white px-8 py-0.5 text-xs uppercase text-neutral-700 shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 dark:border-white dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                View Document
              </button>
            </div>
            {/* covenant amendment */}
            <div className="h-56 w-72 rounded-xl border px-4 py-8 text-center shadow-lg">
              <Image
                src="/icons/document.svg"
                alt="document"
                height={32}
                width={32}
                className="mx-auto mb-4"
              />
              <h3 className="mt-2 text-sm font-bold uppercase tracking-wider">
                The Covenant Amendment
              </h3>
              <p className="mb-6 mt-2 w-64 text-center text-sm">
                Rules & regulations for Thrasher Landing
              </p>
              <button className="border-2 border-black  bg-white px-8 py-0.5 text-xs uppercase text-neutral-700 shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 dark:border-white dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                View Document
              </button>
            </div>
            {/* bi-laws */}
            <div className="h-56 w-72 rounded-xl border px-4 py-8 text-center shadow-lg">
              <Image
                src="/icons/document.svg"
                alt="document"
                height={32}
                width={32}
                className="mx-auto mb-4"
              />
              <h3 className="mt-2 text-center text-sm font-bold uppercase tracking-wider">
                The Bi-Laws
              </h3>
              <p className="mb-6 mt-2 w-64 text-center text-sm">
                Rules & regulations for Thrasher Landing
              </p>
              <button className="border-2 border-black  bg-white px-8 py-0.5 text-xs uppercase text-neutral-700 shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 dark:border-white dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                View Document
              </button>
            </div>
          </div>
        </div>

        <div>
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
                  <TableRow className="bg-emerald-600/20">
                    <TableCell>
                      <div className="font-medium">January 18th, 2024</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        Annual meeting
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button className="text-xs" variant="secondary">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    {" "}
                    <TableCell>
                      {" "}
                      <div className="font-medium">November 17th, 2023</div>
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

        {/* meeting minutes section */}
        <div className="mx-auto mt-12 w-full bg-emerald-600/10 p-2 md:w-[600px]">
          <h3 className="mb-4 text-center font-sans text-xl font-semibold">
            Latest Meeting Minutes
          </h3>

          <div className="flex items-center justify-between border-b border-slate-100 px-2 py-4">
            <div className="flex items-center justify-start gap-2">
              <div className="rounded-full bg-slate-100 p-2 shadow">
                <Image
                  src="/icons/link.svg"
                  alt="icon"
                  width={20}
                  height={20}
                  className="text-emerald-600"
                />
              </div>
              <p className="mt-2 text-left font-sans font-semibold">
                Jan 18, 2024{" "}
                <span className="block text-xs font-normal uppercase">
                  Annual Meeting
                </span>
              </p>
            </div>
            <Button size="sm" className="bg-emerald-600">
              View
            </Button>
          </div>

          <div className="flex items-center justify-between px-2 py-4">
            <div className="flex items-center justify-start gap-2">
              <div className="rounded-full bg-slate-100 p-2 shadow">
                <Image
                  src="/icons/link.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
              </div>
              <p className="mt-2 text-left font-sans font-semibold">
                Nov 17, 2023{" "}
                <span className="block text-xs font-normal uppercase">
                  Annual Meeting
                </span>
              </p>
            </div>
            <Button size="sm" className="bg-emerald-600">
              View
            </Button>
          </div>

          <div className="flex items-center justify-between border-t px-2 py-4">
            <div className="flex items-center justify-start gap-2">
              <div>
                <Image
                  src="/icons/link.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
              </div>
              <p className="mt-2 text-left font-sans font-semibold">
                Oct 21, 2022{" "}
                <span className="block text-xs font-normal uppercase">
                  Annual Meeting
                </span>
              </p>
            </div>
            <Button size="sm" className="bg-emerald-600">
              View
            </Button>
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
