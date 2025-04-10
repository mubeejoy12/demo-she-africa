import React from "react";

interface TextBlockProps {
  title: string;
  description: string;
  className?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-[30px] leading-[100%] font-bold tracking-[0%] text-gray-900 font-cabinet">
        {title}
      </h2>
      <p className="text-[16px] text-gray-600 max-w-2xl mx-auto mt-4">
        {description}
      </p>
    </div>
  );
};

export default TextBlock;
