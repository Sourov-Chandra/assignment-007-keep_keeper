"use client";
import useFriends from "@/app/hooks/useFriends";
import FriendCard from "./FriendCard";

const FriendsPage = () => {
  const { friends } = useFriends();

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
