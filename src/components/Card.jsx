import React from 'react';
import Webcam from 'react-webcam';

export default function Card() {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className="px-4 py-5 sm:px-6">
       <h2>Hello</h2>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <p>Webcam goes here</p>
      </div>
    </div>
  );
}
