import { useState } from "react";
import generateRandomRgbNumber from "./generateRandomRgbNumber";

const useColor = () =>{
    const [color, setColor] = useState("");
  const [complementaryColor , setComplementaryColor ] = useState("");
  const generateRandomColor = () => {
    const firstRandomNum = generateRandomRgbNumber()
    const secondRandomNum =generateRandomRgbNumber()
    const thirdRandomNum = generateRandomRgbNumber()
    const color = `rgb(${firstRandomNum},${secondRandomNum},${thirdRandomNum})`;
    const complementaryColor = `rgb(${255 - firstRandomNum},${255 - secondRandomNum},${
      255 - thirdRandomNum
    })`;
    setColor(color);
    setComplementaryColor(complementaryColor);
  };
  return {color,complementaryColor,generateRandomColor}
}
export default useColor