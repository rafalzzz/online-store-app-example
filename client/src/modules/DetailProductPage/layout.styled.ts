import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

export const DetailPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 60px;
  display: flex;
  flex-direction: row;

  @media only screen and ${width[1300]} {
    margin-top: 120px;
  }

  @media only screen and ${width[1000]} {
    flex-direction: column;
  }
`;

export const ProductImagesContainer = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 10px 0px 10px;
  justify-content: space-between;
  text-align: center;

  @media only screen and ${width[1000]} {
    width: 100%;
    padding: 0px 6vw;
  }
`;

export const ImgContainer = styled.div`
  width: 50%;
  height: 40vw;
  margin-top: 20px;

  img {
    height: 100%;
  }

  img:hover {
    cursor: pointer;
  }

  @media only screen and ${width[1000]} {
    height: 55vw;

    img {
      height: 100%;
    }
  }

  @media only screen and ${width[660]} {
    width: 100%;
    height: 100vw;

    img {
      height: 100%;
    }
  }
`;

export const ProductDetailsContainer = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and ${width[1000]} {
    margin-top: 20px;
    width: 100%;
  }
`;

export const ProductNameContainer = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 100;
  margin: 20px 0px 30px 0px;
  font-size: 0.92em;
  font-family: "Ubuntu", sans-serif;
`;

export const ProductPriceContainer = styled.div`
  width: 100%;
  text-align: center;
  font-size: 0.9em;
  margin-bottom: 40px;
`;

export const ProductSizesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
`;

type SizeButtonProps = {
  props: {
    value: string;
    size: string;
  };
};

export const SizeButton = styled.div<SizeButtonProps>`
    width: 40px;
    text-align: center;
    font-weight: 400;
    font-size: 0.9em;
    padding: 10px 0px;
    background-color: ${({ props }) =>
      props.value === props.size ? "#00000010" : null};

:hover {
    cursor: pointer;
    background-color: #00000010;
  }
`;

export const AddToCartButton = styled.button`
  width: 350px;
  height: 50px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.background};

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.modalBackground};
  }

  @media only screen and (max-width: 1050px) {
    width: 95%;
  }

  @media only screen and ${width[1000]} {
    width: 300px;
  }
`;
