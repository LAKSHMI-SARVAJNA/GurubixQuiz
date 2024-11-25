import styled from "styled-components";

export const CarouselWrapper = styled.div`
   width: 320px; 
   height: 1000px;
   margin-top:1000px;
   background:white;
   border: 1px solid #ddd;
   border-radius: 8px;
   padding: 20px;
   box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
@media (max-width: 768px) {
    width: 80%; 
    margin: 0 auto;
    border-radius: 15px;
     box-shadow:0px 4px 12px rgba(0, 0, 0, 0.2);
   }


  h4 {
    text-align: center;
    margin-bottom: 15px;
    font-size: 20px; /* Increased font size */
    font-weight: bold; /* Increased boldness */
    color: black;
    background-color: rgba(241, 241, 241, .7);
    padding: 10px;
    border-radius: 8px;
   
  }
`;

export const Category = styled.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const CategoryName = styled.div`
  font-weight: bold;
  color: #5eac1a;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 23px;


  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Subcategories = styled.div`
  padding-left: 20px;
  
`;

export const Subcategory = styled.div`
  font-size: 20px; /* Increased font size */
  color: #34495e;
  margin: 8px 0;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:before {
    content: ">"; /* Add arrow for subcategories */
    margin-right: 8px;
    color:black /* Green arrow for subcategories */
  }

  &:hover {
    color: #2980b9;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
