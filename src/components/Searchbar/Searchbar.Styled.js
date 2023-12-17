import styled from 'styled-components';
import { IoSearchCircleSharp } from 'react-icons/io5';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #b6ddd8;
  min-height: 60px;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 1200px;

  border-radius: 4px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

export const StyledForm = styled.form`
  display: flex;

  width: 350px;
  background-color: ;
  border-radius: 4px;
`;

export const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 25px;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 30px;

  border-radius: 4px;
  color: #5b5b5b;
  background-color: #d3f0ed;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 27px;
  margin: 0;
  padding: 0;

  cursor: pointer;
  position: absolute;
  border: none;
  border-radius: 4px;
  background-color: #eff8f8;
`;

export const StyledIcon = styled(IoSearchCircleSharp)`
  width: 20px;
  height: 20px;
`;
