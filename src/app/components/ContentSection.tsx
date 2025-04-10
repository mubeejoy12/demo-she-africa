import React from "react";
import TextBlock from "./TextBlock";
import Shape from "./Shape";

interface Section {
  title: string;
  description: string;
  reverse?: boolean;
  multipleShapes?: boolean;
  isOval?: boolean;
}

const sections: Section[] = [
  {
    title: "Community-Based Learning",
    description:
      "To connect, empower, and transform the lives of African women by bridging the digital gender divide. Through scalable programs and strategic partnerships, we are on a path to digitally equip 300,000 women at a time with the skills, tools, and opportunities they need to thrive in the fast-evolving digital world.",
  },
  {
    title: "Leadership & Mentorship",
    description:
      "To connect, empower, and transform the lives of African women by bridging the digital gender divide. Through scalable programs and strategic partnerships, we are on a path to digitally equip 300,000 women at a time with the skills, tools, and opportunities they need to thrive in the fast-evolving digital world.",
    reverse: true,
    multipleShapes: true, // This section has two shapes
  },
  {
    title: "📢 Advocacy & Research",
    description:
      "To connect, empower, and transform the lives of African women by bridging the digital gender divide. Through scalable programs and strategic partnerships, we are on a path to digitally equip 300,000 women at a time with the skills, tools, and opportunities they need to thrive in the fast-evolving digital world.",
    isOval: true, // This section has an oval shape
  },
];

const ContentSection: React.FC = () => {
  return (
    <section className="space-y-12 px-6 p-24">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex items-center justify-between gap-x-4 max-w-[962px] mx-auto min-h-[400px] ${
            section.reverse ? "flex-row-reverse" : ""
          }`}
        >
        

          {section.multipleShapes ? (
            <div className="relative w-[360px] h-[328px] flex items-center">
              <Shape
                width={173}
                height={328}
                borderRadius={24}
                className="bg-gray-300 flex-shrink-0"
              />
              <Shape
                width={173}
                height={328}
                borderRadius={24}
                className="bg-gray-300 flex-shrink-0 absolute top-[47px] left-[197px]"
              />
            </div>
          ) : section.isOval ? (
            <Shape
              width={370}
              height={287}
              borderRadius={254}
              className="bg-gray-300 flex-shrink-0"
            />
          ) : (
            <Shape
              width={370}
              height={393}
              borderRadius={24}
              className="bg-gray-300 flex-shrink-0"
            />
          )}
          {/* Title & Description */}
          <TextBlock
            title={section.title}
            description={section.description}
            className="max-w-[500px] text-left"
          />
        </div>
      ))}
    </section>
  );
};

export default ContentSection;


  {/* Shape(s) */}
          {/* {section.multipleShapes ? (
            <div className="relative w-[173px] h-[328px]">
              <Shape
                width={173}
                height={328}
                borderRadius={24}
                className="bg-gray-300 flex-shrink-0"
              /> */}
