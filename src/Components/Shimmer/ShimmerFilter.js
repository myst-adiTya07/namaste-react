import React from 'react';

const ShimmerFilters = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex gap-4 overflow-x-auto">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="h-8 w-24 bg-gray-200 animate-pulse rounded-full flex-shrink-0" />
        ))}
      </div>
    </div>
  );
};

export default ShimmerFilters;