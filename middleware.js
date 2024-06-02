import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/api",
  "/api/products",
  "/api/clerk/webhooks/(.*)",
  "/api/stripe/webhook/(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

// const isProtectedRoute = createRouteMatcher([
//   "/documents(.*)",
//   "/hoa-account(.*)",
// ]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
