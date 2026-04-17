"use client";
import useFriends from "@/app/hooks/useFriends";
import FriendCard from "./FriendCard";
import { GridLoader } from "react-spinners";

const FriendsPage = () => {
  const { friends, loading } = useFriends();

  if (loading) {
    return (
      <section className="bg-gray-50 min-h-screen flex justify-center items-center">
        <GridLoader
          visible={true}
          height="80"
          width="80"
          color="#244D3F"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
      </section>
    );
  }

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Your Friends
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FriendsPage;
