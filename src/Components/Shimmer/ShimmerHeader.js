import React from 'react';

const ShimmerHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="h-8 w-32 bg-gray-200 animate-pulse rounded" />
          <div className="flex gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-4 w-20 bg-gray-200 animate-pulse rounded" />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default ShimmerHeader;