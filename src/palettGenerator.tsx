import {useEffect, useState} from "react";
import './color.css';


interface Color{
    hex: string,
    rgb: {r: number, g: number, b: number}

}


const ColorPicker = () => {
    const [currentColor, setCurrentColor] = useState<Color>({
        hex: '#FF6B6B',
        rgb: { r: 255, g: 107, b: 107 }
    });


    const [favorites, setFavorites] = useState<Color[]>([]);

    const generateRandomColor = () => {
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

useEffect(() => {
    const saved = localStorage.getItem('colorFavorites')
    if(saved){
        setFavorites(JSON.parse(saved));
    }
},[]);

useEffect(() => {
    localStorage.setItem('colorFavorites', JSON.stringify(favorites));
},[favorites])


  return (
    <div className="color-picker-container">
      <h1> Färgväljare</h1>

      {/* Visa nuvarande färg */}
      <div 
        className="color-preview"
        style={{ backgroundColor: currentColor.hex }}
      >
        <div className="color-info">
          <p><strong>HEX:</strong> {currentColor.hex}</p>
          <p><strong>RGB:</strong> {currentColor.rgb.r}, {currentColor.rgb.g}, {currentColor.rgb.b}</p>
        </div>
      </div>

      {/* Knappar */}
      <div className="button-group">
        <button onClick={generateRandomColor} className="btn-generate">
           Slumpa färg
        </button>
        <button onClick={() => copyToClipboard(currentColor.hex)} className="btn-copy">
           Kopiera HEX
        </button>
        <button onClick={saveToFavorites} className="btn-save">
           Spara favorit
        </button>
      </div>

      {/* Favoriter */}
      <div className="favorites-section">
        <h2> Mina favoriter ({favorites.length})</h2>
        <div className="favorites-grid">
          {favorites.length === 0 ? (
            <p className="empty-message">Inga favoriter ännu. Spara några färger!</p>
          ) : (
            favorites.map((color, index) => (
              <div key={index} className="favorite-item">
                <div 
                  className="favorite-color"
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setCurrentColor(color)}
                />
                <div className="favorite-info">
                  <span>{color.hex}</span>
                  <button 
                    onClick={() => removeFromFavorites(color.hex)}
                    className="btn-remove"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;