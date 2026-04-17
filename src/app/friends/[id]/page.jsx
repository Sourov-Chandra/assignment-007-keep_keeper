import FriendDetails from "@/component/friends/FriendDetails";


const FriendDetailsPage = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <FriendDetails id={id} />
    </div>
  );
};

export default FriendDetailsPage;
