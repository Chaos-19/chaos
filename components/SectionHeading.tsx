import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
      )}
    </div>
  );
};

export default SectionHeading;