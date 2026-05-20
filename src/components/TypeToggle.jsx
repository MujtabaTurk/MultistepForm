import { FaRegBuilding, FaUser } from "react-icons/fa";

export const TypeToggle = ({ activeType, onChange }) => {
  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-bold text-slate-700">
        Type
      </label>

      <div className="rounded-xl border border-slate-200 px-1.5 py-1 shadow-sm">
        <div className="grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => onChange("person")}
            className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition ${
              activeType === "person"
                ? "bg-white text-cyan-900 shadow-sm"
                : "text-slate-500"
            }`}
          >
            <FaUser size={16} />
            person
          </button>

          <button
            type="button"
            onClick={() => onChange("company")}
            className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition ${
              activeType === "company"
                ? "bg-white text-cyan-900 shadow-sm"
                : "text-slate-500"
            }`}
          >
            <FaRegBuilding size={17} />
            Company
          </button>
        </div>
      </div>
    </div>
  );
};
