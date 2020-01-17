import styled from "styled-components";

export const MainWrapper = styled.div`
  background: white;
  padding: 40px 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 16px;
  border-radius: 3px;
  background: transparent;
  transition: 0.5s all ease-out;
  color: ${props => (props.primary ? "violet" : "palevioletred")};
  border: ${props =>
    props.primary ? "2px solid violet" : "2px solid palevioletred"};
  margin: ${props => (props.primary ? "0 1em" : "1.5em 0em 0em")};
  padding: ${props => (props.primary ? "0.65em 1em" : "0.25em 1.2em")};
  &:hover {
    color: white;
    background-color: ${props => (props.primary ? "violet" : "palevioletred")};
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const Heading = styled.div`
  margin-bottom: 22px;
  font-family: Merriweather, serif;
  color: #161616;
  font-size: 50px;
  line-height: 66px;
  font-weight: 700;
  letter-spacing: 0em;
`;

export const TemplatesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TemplateCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  width: 200px;
  margin: 15px;
  padding: 20px;
  color: #4f5c65;
  text-align: left;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  border-color: #e9eef1;
  background-color: #fff;
  font-family: "Open Sans", sans-serif;
  box-shadow: 6px 4px 6px 4px rgba(0, 0, 0, 0.05);
`;

export const Input = styled.input`
  width: 15%;
  margin: 1.5em;
  padding: 1.2em;
  color: #4f5c65;
  text-align: left;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color: #e9eef1;
  background-color: #fff;
`;
