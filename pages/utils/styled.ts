import styled, {css} from "styled-components";

const hideOnMobileMixin = css`
  @media screen and (max-width: ${props => props.theme.width.mobileMax}) {
    display: none !important;
  }
`;

const hideOnTabletAndDesktopMixin = css`
  @media screen and (min-width: ${props => props.theme.width.tablet}) {
    display: none !important;
  }
`;

interface Props {
  hideOnMobile?: boolean;
  hideOnTabletAndDesktop?: boolean
}

export const breakpointStyles = css<Props>`
  ${props => props.hideOnMobile && hideOnMobileMixin};
  ${props => props.hideOnTabletAndDesktop && hideOnTabletAndDesktopMixin};
`

export const addBreakpointRules = (styledComponent) => {
  return styled(styledComponent)`
    ${breakpointStyles};
  `
}
