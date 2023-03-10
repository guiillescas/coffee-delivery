import Modal from 'react-modal'

import styled from 'styled-components'

interface IContainerProps {
  maxWidth?: number | string
  maxHeight?: number | string
}

export const Container = styled(Modal)<IContainerProps>`
  position: relative;

  width: ${({ maxWidth }) => (maxWidth ? '100%' : 'fit-content')};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth}px;
  height: ${({ maxHeight }) => (maxHeight ? '100%' : 'fit-content')};
  max-height: ${({ maxHeight }) =>
    maxHeight ? maxHeight : 'calc(100vh - 2rem)'};

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  z-index: 1500;

  padding: 1.5rem;

  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background: red;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: blue;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 0.5rem 1rem;

    height: fit-content;
  }

  .header {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2rem;

    > div {
      width: 24px; // same width from close icon button
      height: 24px; // same height from close icon button
    }

    h1 {
      flex: 1;
      width: 90%;

      text-align: center;
      line-height: 1.75rem;
      font-size: 1.75rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.baseTitle};
    }

    button {
      border: 0;
      background: transparent;

      transition: filter 0.1s;
      z-index: 1600;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`
