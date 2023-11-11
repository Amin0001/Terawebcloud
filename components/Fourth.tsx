import React, { useState } from 'react';
import ToggleButton from '../components/ToggleButton';
import Card from '../components/Card';

const Fourth = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const cards = [
    {
      priceMonthly: 0, // Use priceMonthly for monthly price
      job: 'Developers',
      info: 'For students and early stage developers.',
      character1: '1 Cloud provider information',
      character2: 'Up to 2 deployments',
      character3: 'Community Support',
      character4: 'Email Reports',
      character5: 'Free Forever',
    },
    {
      priceMonthly: 15, // Use priceMonthly for monthly price
      job: 'StartUps',
      info: 'For students and low budget developers.',
      character1: 'Up to 2 Cloud providers integration.',
      character2: 'Unlimited deployments',
      character3: 'Priority email and chat support',
      character4: 'Slack and email reports',
      character5: 'SSO Integration',
    },
    {
      priceMonthly: 299, // Use priceMonthly for monthly price
      job: 'Enterprise',
      info: 'For Large Enterprise and community.',
      character1: 'Unlimited Cloud providers integration',
      character2: 'Unlimited deployments',
      character3: 'Priority email and chat support',
      character4: 'Slack and email reports',
      character5: 'SSO Integration',
    },
  ];

  const handleToggle = (isMonthly) => {
    setIsMonthly(isMonthly);
  };

  return (
    <>
      <h3 className="flex justify-center text-2xl font-bold w-30 pb-4">
        <span className="underline mr-1">Choose</span> <span>a</span>
        <span>Plan</span>
      </h3>

      <p className="flex justify-center pb-4">Explore our pricing options below and find the one that suits<br/>your needs best.
      </p>


      <ToggleButton onToggle={handleToggle} />
      <div className="grid grid-cols-3 gap-4 pl-12 pr-12">
        {cards.map((card, index) => (
          <Card
            key={index}
            priceMonthly={card.priceMonthly} // Use priceMonthly for monthly price
            priceYearly={card.priceMonthly * 12} // Calculate yearly price based on monthly
            job={card.job}
            info={card.info}
            character1={card.character1}
            character2={card.character2}
            character3={card.character3}
            character4={card.character4}
            character5={card.character5}
            showYearlyPrice={!isMonthly}
          />
        ))}
      </div>
    </>
  );
};

export default Fourth;
