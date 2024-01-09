import { IoTrashBinSharp } from 'react-icons/io5';
import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  color: #21ebff;
  text-shadow: 0 0 10px #ffffff;
  margin-bottom: 16px;
`;

export const Letter = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #21ebff;
  color: #000000;
  background-color: #21ebff;
  font-size: 16px;
  transition: all 0.3s ease;
  &:hover {
    color: #21ebff;
    background-color: #000000;
  }
`;

export const BinIcon = styled(IoTrashBinSharp)`
  width: 20px;
  height: 20px;
`;

export const DelButton = styled.button`
  font-family: inherit;
  color: #fff;
  width: 28px;
  height: 28px;
  padding: 4px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  color: #21ebff;
  border: none;
  z-index: 2;
  margin-left: 16px;

  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 20%;
    height: 20%;
    border: 1px solid;

    z-index: -1;
    transition: all 0.3s ease;
  }
  &:before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: #21ebff;
    border-left-color: #21ebff;
  }
  &:after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: #21ebff;
    border-right-color: #21ebff;
  }
  &:hover:before,
  &:hover:after {
    border-color: #21ebff;
    height: 100%;
    width: 100%;
    box-shadow: 0 0 5px #21ebff, 0 0 5px #21ebff inset;
  }
`;
