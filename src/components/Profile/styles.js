import styled from 'styled-components';

const Section = styled.div`
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
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  margin-top: 20px;
  width: 100px;
  border-radius: 50%;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Tag = styled.p`
  font-size: 14px;
  color: #959da5;
  margin-top: 10px;
`;

const StatsList = styled.ul`
  display: flex;
  list-style: none;
  height: 75px;
  border: 1px solid #bfcdde;
  width: 100%;
  padding-left: 0;
  margin: 0;
`;

const StatsListItem = styled.li`
  display: flex;
  width: 33.3%;
  flex-direction: column;
  border-right: 1px solid #bfcdde;
  justify-content: center;
  align-items: center;
  background-color: #f3f6f9;
`;

const Label = styled.span`
  font-size: 14px;
  color: #768696;
`;

const Value = styled.span`
  font-weight: 700;
  margin-top: 5px;
`;
export {
  Section,
  Description,
  Container,
  Img,
  Name,
  Tag,
  StatsListItem,
  StatsList,
  Label,
  Value,
};
