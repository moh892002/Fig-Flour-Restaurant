function Input({ type, value, onChange, placeholder, name }) {
  return (
    <div className="flex flex-col flex-1 min-w-0">
      <label htmlFor={name} className="text-[#5B4433] text-[13px]">
        {name}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={name}
        className="bg-[#FBF2E4] w-full text-[#5B4433] text-[15px] border border-[#DCC9AE] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#d3b891] focus:border-transparent"
      />
    </div>
  );
}

export default Input;
