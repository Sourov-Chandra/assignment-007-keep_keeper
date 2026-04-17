import Link from "next/link";

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

const FriendCard = ({ friend }) => {
  return (
    <Link href={`friends/${friend.id}`}>
      <div className="bg-white rounded-3xl p-8 flex flex-col items-center w-full hover:shadow-lg transition-shadow">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-32 h-32 rounded-full object-cover mb-5"
        />

        <h3 className="font-bold text-slate-800 text-2xl mb-1">
          {friend.name}
        </h3>

        <p className="text-lg text-slate-500 mb-5">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {friend.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-sm bg-[#c5f2d6] text-slate-800 px-4 py-1.5 rounded-full uppercase tracking-wide font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className={`text-lg font-medium px-5 py-1.5 rounded-full ${
            statusStyles[friend.status]
          }`}
        >
          {statusLabel[friend.status] ?? friend.status}
        </span>
      </div>
    </Link>
  );
};

export default FriendCard;
