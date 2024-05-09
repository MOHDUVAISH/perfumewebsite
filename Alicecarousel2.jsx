import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import cover1 from './alicecarousel Candle/1.jpg';
import cover2 from './alicecarousel Candle/2.jpg';
import cover3 from './alicecarousel Candle/3.jpg';
import cover4 from './alicecarousel Candle/4.jpg';
// import cover5 from './alicecarousel Candle/5.jpg';
import cover6 from './alicecarousel Candle/6.jpg';
import cover1Hover from './alicecarousel Candle/1.jpg';
import cover2Hover from './alicecarousel Candle/2.jpg';
import cover3Hover from './alicecarousel Candle/3.jpg';
import cover4Hover from './alicecarousel Candle/4.jpg';
// import cover5Hover from './alicecarousel Candle/5.jpg';
import cover6Hover from './alicecarousel Candle/6.jpg';


const responsive = {
    0: { items: 2, }, // Stage padding for mobile viewport
    768: { items: 4 },
    1024: { items: 4 }, // Show 4 items at screen width 1024px and above
};

const images = [cover1, cover2, cover3, cover4,  cover6];
const coverImages = [cover1Hover, cover2Hover, cover3Hover, cover4Hover, cover6Hover];

const products = [
    {
        title: 'Candle flavours',
        price: '₹ 399.00',
        originalPrice: '₹ 899.00'
    },
    {
        title: 'Moroccan rose',
        price: '₹ 1299.00',
        originalPrice: '₹ 1799.00'
    },
    {
        title: 'Whitewood fumes',
        price: '₹ 399.00',
        originalPrice: '₹ 899.00'
    },
    {
        title: 'Vanilla infusion',
        price: '₹ 399.00',
        originalPrice: '₹ 899.00'
    },
    // {
    //     title: 'BEACH HOLIDAY 50ML',
    //     price: '₹ 1299.00',
    //     originalPrice: '₹ 1699.00'
    // },
    {
        title: 'Mogra mystic',
        price: '₹ 1299.00',
        originalPrice: '₹ 1799.00'
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
                            loading="lazy" src={hoveredCard === index ? coverImages[index] : image}
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




















