

import {
  CarouselWrapper,
  Category,
  CategoryName,
  Subcategories,
  Subcategory,
  Categories
} from "./styledComponents"; 
import categories from "../../data/Corousel.js"; 
const RightCarousel = () => {
  
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