import { connectToDB } from "@utils/database";
import User from "@/models/user";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const users = await User.find({
      user: params.id,
    }).populate("user");

    return new Response(JSON.stringify(users, { status: 200 }));
  } catch (error) {
    return new Response("Failed to fetch the user", { status: 500 });
  }
};
