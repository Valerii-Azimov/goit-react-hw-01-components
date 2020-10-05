import styled from 'styled-components';

const Section = styled.section`
  background-color: #e1e4e8;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 300px;
  background-color: #ffffff;
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 16px;
  color: #475965;
  font-weight: 600;
  margin-bottom: 25px;
`;
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: red;
  width: 100%;
`;

const Percentage = styled.span`
  font-size: 18px;
  color: black;
`;

const Label = styled(Percentage)`
  font-size: 12px;
  margin-bottom: 7px;
`;

export { Section, Container, Title, List, ListItem, Label, Percentage };
