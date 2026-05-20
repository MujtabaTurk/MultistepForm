export const TabButton = ({ title, value, activeValue, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
        activeValue === value
          ? "bg-white text-cyan-900 shadow-sm"
          : "text-cyan-900"
      }`}
    >
      {title}
    </button>
  );
};