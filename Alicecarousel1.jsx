import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import cover1 from './alice carousel1/img 1.jpg';
import cover2 from './alice carousel1/img 2.jpg';
import cover3 from './alice carousel1/img 3.jpg';
import cover4 from './alice carousel1/img 4.jpg';

import cover1Hover from './alice carousel1/cover 1.jpg';
import cover2Hover from './alice carousel1/cover 2.jpg';
import cover3Hover from './alice carousel1/cover 3.jpg';
import cover4Hover from './alice carousel1/cover 4.jpg';

const responsive = {
    0: { items: 2, }, // Stage padding for mobile viewport
    768: { items: 4 },
    1024: { items: 4 }, // Show 4 items at screen width 1024px and above
};

const images = [cover1, cover2, cover3, cover4];
const coverImages = [cover1Hover, cover2Hover, cover3Hover, cover4Hover];

const products = [
    {
        title: 'Naqsh Oud',
        price: '₹ 150.00',
        originalPrice: '₹ 650.00'
    },
    {
        title: 'Tender lilac 30ml fragrance oil',
        price: '₹ 1399.00',
        originalPrice: '₹ 1899.00'
    },
    {
        title: 'Voyage 8ml fragrance oil',
        price: '₹ 1299.00',
        originalPrice: '₹ 1799.00'
    },
    {
        title: 'Lekha Dhoop',
        price: '₹ 799.00',
        originalPrice: '₹ 1299.00'
    },
  
];

const AliceCarousels = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <AliceCarousel
             mouseTracking
            disableButtonsControls
            autoPlay
            autoPlayInterval={2000}
            infinite
            disableDotsControls // Remove bullet indicators
            items={images.map((image, index) => (
                <div
                    className={` item ${hoveredCard === index ? 'shadow-lg' : ''}`} // Fixed className typo
                    key={index}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => setHoveredCard(index)} // Added onClick event
                    style={{
                        width: 'calc(100% - 10px)', // Adjusted width for mobile screens
                        height: 'auto', // Auto height for responsive design
                        margin: 'auto',
                        overflow: 'hidden',
                        transition: 'box-shadow 0.3s ease',
                    
                    }}
                >
                    <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                        <img
                            className="w-full h-auto object-cover transition duration-700 transform group-hover:scale-110 "
                            loading="lazy"  src={hoveredCard === index ? coverImages[index] : image}
                            alt={`Image ${index + 1}`}
                            style={{ transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)' }}
                        />
                    </div>
                    <div className="p-1 text-center">
                        {products[index] && (
                            <>
                                <p className="text-sm font-normal">{products[index].title}</p>
                                {/* <p className="text-sm">{products[index].description}</p> Changed text size to small */}
                                <p className='-mt-2 text-sm'>{products[index].price} <del>{products[index].originalPrice}</del></p>
                            </>
                        )}
                    </div>
                </div>
            ))}
            responsive={responsive}
            controlsStrategy="alternate"
        />
    );
};

export default AliceCarousels;




















