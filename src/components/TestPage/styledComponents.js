import styled from "styled-components";

export const TestPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  border-radius: 15px;
   width: 1470px;
  margin: 50px auto;
  margin-left:150px;
  text-align: left;
 .test-layout {
    display: flex;
    gap:30px;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 768px) {
    .test-layout {
      flex-direction: column;
    }

    .right-carousel {
      margin-top: 20px;
      order: 3;
    }
  }
`;
export const QuestionContainer = styled.div`
  flex: 3;
 box-shadow: 1px 2px 7px rgba(0,0,0, 0.2) ; 
  padding: 20px;
 
  border-radius: 15px;
  margin-right: 20px;
margin-left: 250px;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;



export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Space between options */
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight:bold;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f9f9f9; 
  cursor: pointer;

  &:hover {
    background: #e3e7ed; /* Highlight on hover */
  }

  input[type="checkbox"] {
    height: 1.4em;
    width: 1.4em;
    
    margin-top: 0.4em;
    border: 1px solid rgba(0, 0, 0, .25);
    border-radius: 20%;
    border-width: .15em;
  }
`;

export const LineSeparator = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
  background: #4caf50; /* Green background */
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin: 20px 0;

  &:hover {
    background: #45a049; /* Darker green on hover */
  }
`;

export const TimelineWrapper = styled.div`
  position: fixed;
  top: 30px;
  right: 20px;
  background: green; /* Red background for timer */
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
  z-index: 1;
`;

export const AlertWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 10;
  border-radius: 8px;

  button {
    margin: 0 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:first-child {
      background: #4caf50; /* Confirm button */
      color: white;

      &:hover {
        background: #45a049;
      }
    }

    &:last-child {
      background: #f44336; /* Cancel button */
      color: white;

      &:hover {
        background: #d32f2f;
      }
    }
  }
`;

export const RightCarouselWrapper = styled.div`
  position: fixed;
  top: 80px;
  right: 20px;
  width: 120px;
  background: #f9f9f9;
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
  background: ${(props) =>
    props.isAnswered ? "#4caf50" : props.isActive ? "#2196f3" : "#ddd"};
  color: ${(props) => (props.isAnswered || props.isActive ? "white" : "black")};
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #1976d2;
    color: white;
  }
`;
