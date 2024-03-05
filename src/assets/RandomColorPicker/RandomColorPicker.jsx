import useColor from "./useColor";

const RandomColorPicker = () => {
  const { color, complementaryColor, generateRandomColor } = useColor();

  const handleCopyColor = () => {
    navigator.clipboard.writeText(color);
    alert(`${color} copied on clipboard`);
  };
  const handleCopycomplementaryColor = () => {
    navigator.clipboard.writeText(complementaryColor);
    alert(`${complementaryColor} copied on clipboard`);
  };
  const dynamicStyle = {
    backgroundColor: `${color}`,
    border: "1px solid ",
    borderColor: `${color}`,
    borderRadius: "5px",
    padding: "15px 20px",
  };
  const secondDynamicStyle = {
    backgroundColor: `${complementaryColor}`,
    border: "1px solid ",
    borderColor: `${complementaryColor}`,
    borderRadius: "5px",
    padding: "15px 20px",
  };
  return (
    <div className="flex justify-between gap-2 border-red-200 border py-5 px-10">
      <button
        className=" hover:bg-red-200 border rounded p-2 border-red-200 "
        onClick={generateRandomColor}
      >
        Generate
      </button>
      <div style={dynamicStyle} onClick={handleCopyColor}>
        Color:{color}
      </div>
      <div style={secondDynamicStyle} onClick={handleCopycomplementaryColor}>
        Complementary color:{complementaryColor}
      </div>
    </div>
  );
};

export default RandomColorPicker;
