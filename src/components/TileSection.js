import React from 'react';

function Tile({ image, link, title }) {
    return (
        <div className="tile">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} />
                <div className="tile-title">{title}</div>
            </a>
        </div>
    );
}

export const TileSection = ({ tiles }) => (
    <div className="tile-section">
        {tiles.map((tile, index) => (
            <Tile key={index} {...tile} />
        ))}
    </div>
);

// Usage example with your data
export const tileData = [
    {
        image: "/website1.png", // Replace with your image path
        link: 'https://gabrhi.com/Spotless-Hungry-Crocodile-React', // Replace with your link
        title: 'Website Template 1'
    },
    {
        image: "/website2_small.png", // Replace with your image path
        link: 'https://gabrhi.com/css-key-concepts-responsive-design/', // Replace with your link
        title: 'Website Template 2'
    },
    {
        image: "/website2_small.png", // Replace with your image path
        link: 'https://gabrhi.com/learner_materials_bem_and_oocss/', // Replace with your link
        title: 'Website Template 2'
    },
    // ... add more tiles as needed
];