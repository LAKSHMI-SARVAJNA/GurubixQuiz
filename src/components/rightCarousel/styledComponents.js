import styled from "styled-components";

export const CarouselWrapper = styled.div`
   width: 30%; 
   height: 900px;
   margin-top:200px;
   background:white;
   border: 1px solid #ddd;
   border-radius: 8px;
   padding-left: 20px;
   margin-left:25px;
   display: flex;
   flex-direction: column;
   box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
@media (max-width: 768px) {
    width: 100%; 
    margin: 0 auto;
    margin-top: 20px;
    height: 100%;

     width: 80%;
    border-radius: 15px;
     box-shadow:0px 4px 12px rgba(0, 0, 0, 0.2);
   }

  @media (max-width: 480px) {
    width: 100%; 
    margin: 0 auto;
    margin-top: 20px;
    height: 100%;
    width: 80%; 
    border-radius: 15px;
     box-shadow:0px 4px 12px rgba(0, 0, 0, 0.2);
   }



  h4 {
    text-align: center;
    margin-bottom: 15px;
    padding-right:10px;
    font-size: 20px;
    font-weight: bold;
    color: black;
    background-color: rgba(241, 241, 241, .7);
    padding: 10px;
    margin-right:10px;
    border-radius: 8px;
   
  }
`;

export const Categories = styled.div`
   display: flex;
   flex-direction : column;
   @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
   flex-wrap : wrap;
}
   
`

export const Category = styled.div`
  margin-bottom: 20px;
  

  @media (max-width: 768px) {
    margin-bottom: 15px;
    margin: 20px;
    margin-right: 20px;
  }
`;

export const CategoryName = styled.div`
  font-weight: bold;
  color: #5eac1a;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 18px;


  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Subcategories = styled.div`
  padding-left: 20px;
  
`;

export const Subcategory = styled.div`
  font-size: 16px; 
  color: #34495e;
  margin: 8px 0;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:before {
    content: ">"; 
    margin-right: 8px;
    color:black;
  }

  &:hover {
    color: #2980b9;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
