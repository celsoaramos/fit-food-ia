import React from 'react';

interface Props {
  text: string
  foodFit: string
}

const DisplayResult = ({ text, foodFit }: Props) => {
  const lines = text.split('**');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-700">{foodFit}</h1>
      <div className="grid grid-cols-1 gap-4">
        {lines.map((line, index) => (
          <p key={index} className="text-gray-800 mb-2">{line.trim()}</p>
        ))}
      </div>
    </div>
  );
}

export default DisplayResult;