import { useState } from 'react';
import './style.scss'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

// 'https://via.placeholder.com/153',
const ImageSlider = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.img.length);
    };

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? product.img.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="ImageSlider">


            <div className="image-slider-container">
                <div className="controlContainer">
                    <div className="thumbnail-container">
                        {product && product.img && product.img.map((imageUrl, index) => (
                            <img
                                key={index}
                                src={imageUrl}
                                alt={`Thumbnail ${index}`}
                                className={
                                    index === currentImageIndex
                                        ? 'thumbnail active'
                                        : 'thumbnail inactive'
                                }
                                onClick={() => setCurrentImageIndex(index)}
                            />
                        ))}
                    </div>
                    <div className="controls">
                        <button onClick={handlePrevious}><IoIosArrowUp /></button>
                        <button onClick={handleNext}><IoIosArrowDown /></button>
                    </div>
                </div>
                <div className="main-image-container">
                    <img
                        src={product && product.img && product.img[currentImageIndex]}
                        alt="Main Image"
                        className="main-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
