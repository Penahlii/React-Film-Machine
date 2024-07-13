import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 300px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  outline: none;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-left: none;
  border-radius: 0 4px 4px 0;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
