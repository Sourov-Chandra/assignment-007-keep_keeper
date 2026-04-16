"use client"
import { FaPlus } from "react-icons/fa";
import useFriends from "@/app/hooks/useFriends";

const Banner = () => {
  const { friends } = useFriends();

  const total = friends.length;
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const needAttention = friends.filter(
    (f) => f.status === "overdue" || f.status === "almost due",
  ).length;
  const interactions = friends.reduce(
    (sum, f) => sum + (f.days_since_contact <= 30 ? 1 : 0),
    0,
  );

  return (
    <div className="bg-gray-50 py-12 text-center space-y-6">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 px-2">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed mt-1 md:mt-2">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="bg-[#244D3F] hover:bg-green-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors mt-1 md:mt-2">
          <p className="flex justify-center items-center gap-1.5">
            <span>
              <FaPlus />{" "}
            </span>
            <span >Add a Friend</span>
          </p>
        </button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 px-4">
          <div className="bg-white border border-gray-100 rounded-xl py-12 px-4">
            <p className="text-4xl font-semibold text-gray-800">{total}</p>
            <p className="text-lg text-gray-500 mt-2">Total Friends</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl py-12 px-4">
            <p className="text-4xl font-semibold text-gray-800">{onTrack}</p>
            <p className="text-lg text-gray-500 mt-2">On Track</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl py-12 px-4">
            <p className="text-4xl font-semibold text-gray-800">
              {needAttention}
            </p>
            <p className="text-lg text-gray-500 mt-2">Need Attention</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl py-12 px-4">
            <p className="text-4xl font-semibold text-gray-800">
              {interactions}
            </p>
            <p className="text-lg text-gray-500 mt-2">
              Interactions This Month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
