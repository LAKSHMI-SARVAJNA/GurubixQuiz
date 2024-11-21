import styled from "styled-components";

// Main wrapper for the entire page
export const TestPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  min-height: 90vh;
`;

// Question wrapper
export const QuestionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   width: 100%;
`;

export const QuestionWrapper = styled.div`
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  width: 80%;
  text-align: center;
   
`;

export const Option = styled.button`
  display: inline-block;
  width: 45%;
  margin: 5px;
  padding: 10px 15px;
  border: 1px solid ${(props) => (props.isSelected ? "#2ecc71" : "#ddd")};
  background: ${(props) => (props.isSelected ? "#2ecc71" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  border-radius: 5px;
  cursor: pointer;
  text-align: left;
  &:hover {
    background: #3498db;
    color: white;
  }
`;

// Submit Button Styling
export const SubmitButton = styled.button`
  display: block;
  margin: 20px auto;
  background: #8e44ad;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  left: 50%;
  position: fixed;
  bottom: 10px;
  &:hover {
    background: #732d91;
  }
`;

// Timeline wrapper - fixed position
export const TimelineWrapper = styled.div`
  position: fixed;
  top: 10px;
  left: 20px;
  background: #e74c3c;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  z-index: 1;
`;

// Alert popup wrapper
export const AlertWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 2;
`;


// Right Carousel Styling
export const RightCarouselWrapper = styled.div`
  position: fixed;
  top: 80px;
  right: 20px;
  width: 120px;
  background: #f1f1f1;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  max-height: 70%;
  overflow-y: auto;
  z-index: 1;
`;

export const CarouselItem = styled.div`
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  background: ${(props) => (props.isAnswered ? "#2ecc71" : props.isActive ? "#3498db" : "#ddd")};
  color: ${(props) => (props.isAnswered || props.isActive ? "white" : "black")};
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #2980b9;
    color: white;
  }
`;

