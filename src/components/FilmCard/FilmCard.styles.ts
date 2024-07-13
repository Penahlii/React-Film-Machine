import styled from "styled-components";

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 20px;
  width: 200px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

export const CardButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;
