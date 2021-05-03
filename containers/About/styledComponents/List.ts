import styled from "styled-components";

const List = styled.ul`
  li {
    list-style-type: none;
  }
  
  li:before {
    display: inline-block;
    content: ' ';
    background-image: url('/human.png');
    background-size: 15px 25px;
    height: 25px;
    width: 15px;
    position: relative;
    margin-right: 10px;
    top: 5px
  }
`;

export default List;
