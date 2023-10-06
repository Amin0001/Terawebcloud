import React from 'react';
import Card from './Card';


const Fourth = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {/* First instance of Card */}
      <Card
        price="0"
        job="Developers"
        info="For students and early stage developers."
        character1="1 Cloud provider information "
        character2="Up to 2 deployments"
        character3="Community Support"
        character4="Email Reports"
        character5=""
      />

      {/* Second instance of Card */}
      <Card
        price="15"
        job="StartUps"
        info="For students and low budget developers."
        character1="Up to 2 Cloud poviders integration."
        character2="Unlimited deployments"
        character3="Priority email and chat support"
        character4="Slack and email reports"
        character5="SSO Integration"
      />

      {/* Third instance of Card */}
      <Card
        price="299"
        job="Enterprise"
        info="For Large Enterprise and community."
        character1="Unlimited Cloud providers integration"
        character2="Unlimited deployments"
        character3="Priority email and chat support"
        character4="Slack and email reports"
        character5="SSO Integration"
      />
    </div>
  );
};

export default Fourth;
