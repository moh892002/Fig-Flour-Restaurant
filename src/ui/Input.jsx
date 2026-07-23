function Input({ type, value, onChange, placeholder, name, required }) {
  return (
    <div className="flex flex-col flex-1 min-w-0">
      <label htmlFor={name} className="text-secondary text-[13px]">
        {name}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={name}
        required={required}
        className="bg-cream-light w-full text-secondary text-[15px] border border-accent-border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-accent-focus focus:border-transparent"
      />
    </div>
  );
}

export default Input;
