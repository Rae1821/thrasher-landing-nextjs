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

export const createUser = async (user) => {
  try {
    await connectToDB();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error(error);
  }
};

export async function getUserById(userId) {
  try {
    await connectToDB();

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.error(error);
  }
}

export async function updateUser(clerkId) {
  try {
    await connectToDB();

    const updatedUser = await User.findOneAndUpdate({ clerkId });

    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.error(error);
  }
}

export async function deleteUser(clerkId) {
  try {
    await connectToDB();

    //find user to delete
    const userToDelete = await User.findOneAndDelete({ clerkId });

    if (!userToDelete) throw new Error("User not found");

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    console.error(error);
  }
}
