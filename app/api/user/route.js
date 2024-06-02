// import { connectToDB } from "@utils/database";
// import User from "@models/user";

// export const GET = async (request, { params }) => {
//   try {
//     await connectToDB();

//     const user = await User.find({
//       user: params.id,
//     });

//     return new Response(
//       JSON.stringify(user, {
//         status: 200,
//       })
//     );
//   } catch (err) {
//     return new Response("failed to fetch user", { status: 500 });
//   }
// };
