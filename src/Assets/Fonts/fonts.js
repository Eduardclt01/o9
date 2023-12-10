import { createGlobalStyle } from "styled-components";

import o9Regular from "./o9Sans-Regular-Web.woff2";
import o9Bold from "./o9Sans-Bold-Web.woff2";
import o9Light from "./o9Sans-Light-Web.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${o9Regular}) format('woff2'),
        url(${o9Bold}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
