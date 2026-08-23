import React, {useState} from "react";



interface Color{
    hex: string,
    rgb: {r: number, b: number, g: number}

}


const ColorPicker = () = {
    const [currentColor, setCurrentColor] = useState<Color>({
        hex: '#FF6B6B',
        rgb: { r: 255, g: 107, b: 107 }
    });


    const [favorites, setFavorites] = useState<Color[]>([]);

    const generateRandomColor = () =< {
        const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }
}


return (

)

export default palettGenerator;