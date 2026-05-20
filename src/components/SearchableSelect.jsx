import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const SearchableSelect = ({
  label,
  placeholder,
  options = [],
  name,
  value,
  onChange,
  onBlur,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelect = (option) => {
    onChange(option);
    setSearch("");
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {label && (
        <label className="mb-2 block text-sm font-bold text-slate-700">
          {label}
        </label>
      )}

      <button
        type="button"
        name={name}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={onBlur}
        className={`flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 outline-none ${
          error ? "border-red-500" : "border-slate-300"
        }`}
      >
        <span className={value ? "text-slate-700" : "text-slate-400"}>
          {value || placeholder}
        </span>

        {isOpen ? (
          <IoIosArrowUp className="text-cyan-900" />
        ) : (
          <IoIosArrowDown className="text-cyan-900" />
        )}
      </button>

      {error && (
        <p className="mt-1 text-sm font-medium text-red-500">{error}</p>
      )}

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-1 w-full overflow-hidden rounded-xl border border-slate-300 bg-white shadow-lg">
          <div className="flex items-center gap-3 border-b border-cyan-900 px-4 py-3">
            <FaSearch className="text-cyan-900" />

            <input
              type="text"
              value={search}
              autoFocus
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          <div className="max-h-52 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleSelect(option)}
                  className="block w-full border-b border-slate-100 px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-100"
                >
                  {option}
                </button>
              ))
            ) : (
              <p className="px-4 py-3 text-sm text-slate-400">
                No result found
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
