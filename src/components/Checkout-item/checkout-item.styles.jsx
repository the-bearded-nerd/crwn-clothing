import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  span {
    width: 23%;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Quantity = styled.span`
  width: 23%;
  display: flex;

  div {
    cursor: pointer;
  }

  span {
    width: auto;
    margin: 0 10px;
  }
`;
export const ClearButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
