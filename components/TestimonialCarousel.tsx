import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import TestimonialCard from './TestimonialCard'; // Replace with your card component

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO, Company XYZ',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Designer, Creative Co.',
      message: 'Sed euismod eu justo eget faucibus. Suspendisse potenti.',
    },
    // Add more testimonials as needed
  ];

  return (
    <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id}>
          <TestimonialCard
            name={testimonial.name}
            position={testimonial.position}
            message={testimonial.message}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
