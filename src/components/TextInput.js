import "../styles/TextInput.css";

export const TextInput = ({ fullWidth = false, Icon, placeholder = "", value, handleName, name }) => {
  return (
    <div className={`game-search ${fullWidth ? "flex-1" : ""}`}>
      <input
        onChange={(e) => handleName(e.target.value)}
        value={value}
        type="text"
        aria-label={name}
        className="search"
        placeholder={placeholder}
      />
      <Icon className="search-icon" />
    </div>
  );
};
