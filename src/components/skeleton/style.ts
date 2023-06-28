import { styled } from "styled-components";

export const RoomItemSkeltonWapper = styled.div`
  padding: 8px;
  .ant-skeleton{
    display: block;
  }
  .skeleton-button{
    margin: 2.5px auto;
  }
`
export const TabCardSkeletonWapper = styled.div`
  margin-top: 15px;
  .ant-skeleton{
    margin: 0 5px;
    &:first-child{
      margin-left: 0;
    }
  }
`