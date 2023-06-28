import { styled } from "styled-components";
interface RoomItemWapperProps {
  verify_color?: string
  content_color?: string,
  proportion: string | number
}
export const RoomItemWapper = styled.div<RoomItemWapperProps>`
  width: ${props => props.proportion};
  padding: 8px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover{
    transform: translateY(-5px);
    transition: all .8s;
    box-shadow: ${props => props.theme.defaultShadow};
  }
  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color : ${props => props.verify_color}
  }

  .product-name {
    font-size: 15px;
    font-weight: 700;
    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }
  .price{
    margin-top: 5px;
  }
  .evaluate{
    .mark{
      .ant-rate{
        color: ${props => props.theme.secondColor};
      }
    }
    .commonCount{
      margin-left: 5px;
      color: ${props => props.content_color};
    }
  }
`