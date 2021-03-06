/* eslint-disable eqeqeq */
import styled from 'styled-components';
import {
  colors,
  margins,
  paddings,
  shadows,
  fontSizes,
  transition,
} from '../../utils/styles/helpers';

export const DropdownMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 62%;
  position: relative;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 24%;
    max-height: 52px;
  }

  .dropdown-menu {
    &__active-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      border: none;
      border-radius: 6px;
      margin: ${margins.filter};
      padding: ${paddings.filter};
      box-shadow: ${shadows.filter};
      background: ${(props) =>
        props.theme == 'light' ? colors.white : colors.darkMode.darkBlue};
      color: ${(props) =>
        props.theme == 'light' ? colors.black : colors.white};
      @media (min-width: 768px) {
        max-height: 52px;
        margin: 0;
      }
      transition: ${transition.theme};
    }

    &__active-text {
      font-size: ${fontSizes.homepage};
      font-weight: 300;
    }

    &__items-container {
      display: flex;
      flex-wrap: wrap;
      position: absolute;
      z-index: 999;
      top: 3.625rem;
      max-width: 100%;
      color: red;
      background: red;
      border-radius: 6px;
      margin: ${margins.filter};
      padding: ${paddings.filter};
      box-shadow: ${shadows.filter};
      background: ${(props) =>
        props.theme == 'light' ? colors.white : colors.darkMode.darkBlue};
    }

    &__item {
      width: 100%;
      border: none;
      background: ${(props) =>
        props.theme == 'light' ? colors.white : colors.darkMode.darkBlue};
      color: ${(props) =>
        props.theme == 'light' ? colors.black : colors.white};
      text-align: left;
      font-size: ${fontSizes.filter};
      font-weight: 300;
      margin: 0.4rem 0;
      cursor: pointer;
    }
  }
`;
