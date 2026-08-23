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
        const rgb = hexToRgb(randomHex);
        setCurrentColor({hex: randomHex, rgb});
    };

    const hexToRgb = (hex: string): {r: number, g: number, b: number} => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : {r: 0, g: 0, b: 0};
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert(`Kopierade: ${text}`);
    };

    const saveToFavorites = () => {
        if (!favorites.some(fav => fav.hex === currentColor.hex)){
            setFavorites([...favorites, currentColor]);
        } else {
            alert('Denna färg finns redan i favoriter');
        }
    };

    const removeFromFavorites = (hex: string) => {
        setFavorites(favorites.filter(color => color.hex !== hex));
    };
}


return (

)

export default palettGenerator;