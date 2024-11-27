

import {
  CarouselWrapper,
  Category,
  CategoryName,
  Subcategories,
  Subcategory,
  Categories
} from "./styledComponents"; 

const RightCarousel = () => {
  const categories = [
    {
      name: "Quantitative Aptitude",
      subcategories: ["Arithmetic", "Data Interpretation"],
    },
    {
      name: "Verbal (English)",
      subcategories: ["Verbal Ability", "Verbal Test"],
    },
    {
      name: "Reasoning",
      subcategories: ["Logical", "Verbal", "Nonverbal"],
    },
    {
      name: "Programming",
      subcategories: ["Python Programming", "C Programming", "C++, C#", "Java"],
    },
    {
      name: "Interview",
      subcategories: ["GD", "HR", "Technical Interview"],
    },
    {
      name: "Placement Papers",
      subcategories: ["Placement Papers", "Submit Paper"],
    },
  ];

  return (
    <CarouselWrapper>
      <h4>Quick Links</h4>
      <Categories>
      {categories.map((category, index) => (
        <Category key={index}>
          <CategoryName>{category.name}</CategoryName>
          <Subcategories>
            {category.subcategories.map((subcat, subIndex) => (
              <Subcategory key={subIndex}>{subcat}</Subcategory>
            ))}
          </Subcategories>
        </Category>
        
      ))}
      </Categories>
    </CarouselWrapper>
  );
};

export default RightCarousel;
