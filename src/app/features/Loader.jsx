import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    position: relative;
    width: 300px;
    height: 3px;
    background: linear-gradient(to right, transparent, #28AE60, transparent);
    overflow: hidden;
  }

  .loader::after {
    content: '';
    position: absolute;
    translate: -200px 0;
    max-width: 1200px;
    height: 100%;
    background: linear-gradient(to right, transparent, #212121, transparent);
    animation: slide 1s infinite;
  }

  @keyframes slide {
    100% {
      translate: 300px 0;
    }
  }`;

export default Loader;
