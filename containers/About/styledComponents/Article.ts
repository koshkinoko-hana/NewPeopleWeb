import styled from "styled-components";
import {Props} from "../../../styledComponents/Header";

const Article = styled.article<Props>`
  h2 {
    color: ${props => props.theme.color[props.color]};
  }
`;

export default Article;
