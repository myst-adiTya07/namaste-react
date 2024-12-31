import React from 'react';
import { Code2, Palette, Database, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Html']
  },
  {
    title: 'Backend Development',
    icon: Database,
    skills: ['Node.js', 'JavaScript', 'Express.js', 'REST APIs']
  },
  {
    title: 'Other Skills',
    icon: Globe,
    skills: ['Git', 'Postman', 'AWS', 'SQL']
  }
];

const Skills = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <category.icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;