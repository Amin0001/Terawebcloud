import React from 'react';

const TestimonialCard = ({ name, position, message, rating }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md max-w-xs mx-auto">
      <h1 className="text-lg font-semibold mb-2">{name}</h1>
      <p className="text-gray-700 mb-4">{message}</p>
      <div className="flex items-center">
        <img
          src="user-image.jpg"  // Replace with your user image source
          alt={name}
          className="w-12 h-12 rounded-full mr-2"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
        <div className="ml-auto">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <span
                key={index}
                className="text-yellow-500"
              >
                ★
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
