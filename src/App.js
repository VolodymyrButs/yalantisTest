import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MonthComponent } from "./MonthComponent";
import { getMonthFromDate } from "./utils/utils";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1366px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const fetchUsers = () =>
  fetch(
    "https://yalantis-react-school-api.yalantis.com/api/task0/users"
  ).then((response) => response.json());

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () =>
    fetchUsers().then((data) => {
      setUsers(data);
    });

  useEffect(() => {
    getUsers();
  }, []);

  const createMonthsList = () => {
    let monthsList = [];
    users.forEach((user) => {
      monthsList = monthsList.concat(getMonthFromDate(user.dob));
    });
    let unique = monthsList
      .filter((item, i, ar) => ar.indexOf(item) === i)
      .sort((a, b) => a - b);
    return unique;
  };

  return (
    <MainWrapper>
      {createMonthsList().map((month, index) => {
        return <MonthComponent key={index} users={users} month={month} />;
      })}
    </MainWrapper>
  );
};
export default App;
