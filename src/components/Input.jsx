export const Input = ({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-bold text-slate-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`w-full rounded-xl border px-4 py-3 text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400 ${
          error ? "border-red-500" : "border-slate-300"
        }`}
      />

      {error && (
        <p className="mt-1 text-sm font-medium text-red-500">{error}</p>
      )}
    </div>
  );
};
