import React from 'react';

const experiences = [
  {
    Name: 'EatHub',
    Exposure: 'ReactJS, Redux, Tailwind, CSS',
    period: 'Feb 24 - Apr 24 ',
    description: 'Built a dynamic food ordering app with real-time Swiggy API integration and CORS issue resolution. Designed a Shimmer UI for engaging restaurant and menu displays. Used Parcel for bundling, with Lazy Loading and Code Splitting for performance. Added Search, Filter, and real-time Online Status features with robust error handling.'
  },
  {
    Name: 'Cryptocurrency Tracker App',
    Exposure: 'ReactJS, MaterialUI, ChartJS, Firebase',
    period: 'Dec 22 - Jan 23',
    description: 'Created a responsive cryptocurrency tracker using React JS, Material UI, and Chart JS. Integrated Coin Gecko API for real-time data and Context API for state management. Implemented Firebase v9 for Email and Google Authentication, along with Firebase Storage for secure data and user credential handling.'
  },
  {
    Name: 'StartUp Labs',
    Exposure: 'Junior Developer',
    period: '2016 - 2018',
    description: 'Worked on various web development projects and learned modern development practices.'
  }
];

const Experience = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">{exp.Name}</h3>
              <p className="text-blue-600 mb-2">{exp.Exposure}</p>
              <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;