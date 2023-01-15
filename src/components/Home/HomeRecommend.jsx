import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {ItemBox, BoxHeader, BoxName, BoxMoreLink} from "../elements/ItemBox"; 


function HomeRecommend(){
  const navigate = useNavigate();
  return(
    <ItemBox>
      <BoxName>
        캠핑 다녀 오셨나요? 지금 리뷰를 등록 해보세요.
      </BoxName>
      <RevLinkBtn onClick={()=>{navigate("/reviewadd")}}>+</RevLinkBtn>
    </ItemBox>
  )
}
export default HomeRecommend;

const RevLinkBtn = styled.button`
  border: 2px dashed black;
  height: 100px;
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  margin-top: var(--pad2);
`