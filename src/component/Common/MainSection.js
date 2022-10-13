import React from "react";
import styled from "styled-components";

const MainSection = (props) => {
  return (
    <MainSections
      bg={props.bg}
      className="lg:pl-16 md:pl-12 pl-6 lg:pr-16 md:pr-12 pr-6 w-full"
    >
      {props.children}
    </MainSections>
  );
};

export default MainSection;

const MainSections = styled.section`
  background: ${({ bg }) => (bg ? bg : "#fff")};
  @media (min-width: 1330px) {
    padding-left: 10rem;
    padding-right: 10rem;
  }
`;
