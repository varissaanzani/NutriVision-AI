const AVATAR_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAVGkzwYhgiLBI880glG5Ek3LRPbjsnu641NTPayZMnL_lPMAoklGUngZiPtc0wzwF6ZshpDfhY5HValEBQAKUtE3IfZe_1vqptLno4ibJAGQzQkqb0AnZxnXc82Ehv_Luc7RJxMyXhay9kRcYSzv__xNP2AHbt3vxHqxraHMp_qXnsOHZhSzfB4oQHZxmqo-qDNR7wXXMgtVRAmE4IyirAyj4tdFTCKSQbWfbb7ABM-ht4wgvg0Fg3';

export default function TopNavBar({ title }) {
  return (
    <header className="bg-surface fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-lg h-16 ml-0 md:ml-[280px] shadow-sm">
      {/* Left — Search / Title */}
      <div className="flex items-center gap-4 flex-1">
        {title && (
          <h2 className="hidden md:block text-title-lg text-on-surface font-semibold mr-4">
            {title}
          </h2>
        )}
        <div className="relative w-full max-w-[28rem]">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
            search
          </span>
          <input
            type="text"
            placeholder="Cari data, metrik, atau lokasi..."
            className="w-full bg-surface-container-low border-outline-variant border rounded-xl pl-10 pr-4 py-2 text-body-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          />
        </div>
      </div>

      {/* Right — Actions */}
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full" />
        </button>
        <button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden ml-4 border border-outline-variant">
          <img
            src={AVATAR_URL}
            alt="User Profile Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
