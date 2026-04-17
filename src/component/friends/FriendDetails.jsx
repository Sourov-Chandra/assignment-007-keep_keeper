"use client";
import useFriends from "@/app/hooks/useFriends";
import useTimeline from "@/app/hooks/useTimeline";
import { LuMessageSquareText, LuTrash2 } from "react-icons/lu";
import { PiArchive, PiBellSimpleZBold, PiVideoCameraBold } from "react-icons/pi";
import { TbPhoneCall } from "react-icons/tb";

const FriendDetails = ({ id }) => {
  const { friends } = useFriends();
  const { entries, addEntry } = useTimeline();
  const friend = friends.find((f) => f.id === Number(id));

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const statusStyles = {
    "on-track": "bg-[#244D3F] text-white",
    "almost due": "bg-[#EFAD44] text-white",
    overdue: "bg-[#EF4444] text-white",
  };

  const statusLabel = {
    "on-track": "On-Track",
    "almost due": "Almost Due",
    overdue: "Overdue",
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 flex items-center ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-2 shadow-sm">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <h2 className="font-bold text-xl text-slate-800">{friend.name}</h2>
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[friend.status]}`}
            >
              {statusLabel[friend.status]}
            </span>
            <div className="flex flex-wrap justify-center gap-1">
              {friend.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-emerald-100 text-slate-700 px-3 py-1 rounded-full uppercase font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-slate-500 italic">
              &quot;{friend.bio}&quot;
            </p>
            <p className="text-xs text-slate-400">Preferred: {friend.email}</p>
          </div>

          <button className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-gray-700">
            <PiBellSimpleZBold className="w-4 h-4" />
            <span className="text-sm font-medium">Snooze 2 Weeks</span>
          </button>

          <button className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-gray-700">
            <PiArchive className="w-4 h-4" />
            <span className="text-sm font-medium">Archive</span>
          </button>

          <button className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex items-center justify-center gap-2 hover:bg-red-50 transition-colors text-red-600">
            <LuTrash2 className="w-4 h-4" />
            <span className="text-sm font-medium">Delete</span>
          </button>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
              <p className="text-3xl font-bold text-gray-800 mb-1">
                {friend.days_since_contact}
              </p>
              <p className="text-lg text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
              <p className="text-3xl font-bold text-gray-800 mb-1">
                {friend.goal}
              </p>
              <p className="text-lg text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
              <p className="text-3xl font-bold text-gray-800 mb-1">
                {formatDate(friend.next_due_date)}
              </p>
              <p className="text-lg text-gray-500">Next Due</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-800">
                Relationship Goal
              </h3>
              <button className="text-sm border border-gray-200 px-3 py-1 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                Edit
              </button>
            </div>
            <p className="text-gray-600">
              Connect every{" "}
              <span className="font-semibold text-gray-800">
                {friend.goal} days
              </span>
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => addEntry(friend, "Call")}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <TbPhoneCall className="w-6 h-6 text-gray-700" />
                <span className="text-sm font-medium text-gray-700">Call</span>
              </button>

              <button
                onClick={() => addEntry(friend, "Text")}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <LuMessageSquareText className="w-6 h-6 text-gray-700" />
                <span className="text-sm font-medium text-gray-700">Text</span>
              </button>

              <button
                onClick={() => addEntry(friend, "Video")}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <PiVideoCameraBold className="w-6 h-6 text-gray-700" />
                <span className="text-sm font-medium text-gray-700">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
