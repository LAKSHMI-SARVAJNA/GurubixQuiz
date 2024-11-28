import styled from "styled-components";

export const TestPageWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
border-radius: 15px;
width: 100%;
text-align: left;

.test-layout {
  padding:10px;
  display: flex;
  justify-content: flex-end;
  width: 75%;
  margin: 0;
}

@media (max-width: 768px) {
 width: 100%;
  .test-layout {
   width: 100%;
  margin: 0;
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  width: 100%;
  .test-layout {
  width: 100%;
  padding: 0px;
  margin: 0;
  }
}

.right-carousel {
  margin-top: 20px;
  order: 3;
}
`;


export const QuestionContainer = styled.div`
  flex: 3;
  box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  border-radius: 15px;
  margin: 0 auto;
  @media (max-width: 768px) {
    //margin:0px;
    padding: 15px;
     width: 90%;
  }
     @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;//15

   @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f9f9f9;
  cursor: pointer;

  &:hover {
    background: #e3e7ed;
  }

  &.correct {
    background: #d4edda;
    border: 1px solid #28a745;
  }

  &.wrong {
    background: #f8d7da;
    border: 1px solid #dc3545;
  }

  input[type="checkbox"] {
    height: 1.2em;
    width: 1.2em;
    margin-top: 0.2em;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 20%;
    //border-width: 0.15em;
  }
     @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const LineSeparator = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
  background: #4caf50;
  color: white;
  padding: 15px 25px;
  border: none;
  width:140px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin: 20px 0;

  &:hover {
    background: #45a049;
  }
    @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const TimelineWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: green;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: 8px;
    padding: 5px;
  }
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
  width: 20%;

  button {
    margin: 0 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px; 

    &:first-child {
      background: #4caf50;
      color: white;

      &:hover {
        background: #45a049;
      }
    }

    &:last-child {
      background: #f44336;
      color: white;

      &:hover {
        background: #d32f2f;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 15px;
    width: 55%; 
    font-size: 14px; 
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);

    button {
      margin: 5px 0; 
      padding: 10px;
      margin: 10px;
      width: 35%;
      font-size: 14px;
    }
  }
`;


export const ResultsWrapper = styled.div`
  padding: 20px;
  background: rgba(241, 241, 241, .7);
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: left;
font-family : Inter, arial, sans-serif ;
  h2 {
    margin-bottom: 10px;
    font-size: 18px;
  }

  p {
    font-size: 20px;
    margin: 5px 0;
     padding: 10px;
  }
     @media (max-width: 480px) {
    padding: 15px;

    h2 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;


export const ReviewText = styled.div`
  color: #5eac1a;
  font-weight: bold;
 
  align-text: center;
  font-size: 23px;
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

export const WorkspaceToggleButton = styled.button`
  //background: ;
  color: #007bff;
  border: none;
  padding: 8px 8px;
  font-size: 17px;
  margin: 7px 0;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #f9f9f9;
  }
`;

export const WorkspaceTextArea = styled.textarea`
  width: 97%;
  height: 80px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  font-family: Arial, sans-serif;
  resize: none;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Para = styled.span`
  color: green;
  font-size: 16px;
  font-weight: 700;
  font-family: Roboto;
`