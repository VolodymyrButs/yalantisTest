import React from "react";
import styled from "styled-components";

import { getMonthFromDate, usersByMonth } from "./utils/utils";

const User = styled.li`
  display: flex;
  width: 150px;
  border: 1px solid black;
  padding: 1px;
  margin: 3px;
  border-radius: 5px;
  text-align: center;
`;

const UsersBlock = styled.ol`
  position: absolute;
  top: 0px;
  left: 100px;
  flex-wrap: wrap;
  margin: 0;
  display: none;
  padding: 0;
  @media (min-width: 1366px) {
    top: 30px;
    left: 0px;
  }
`;

const MonthWrapper = styled.div`
  width: 100px;
  margin: 10px;
  text-align: center;
  border-radius: 10px;
  border: 2px solid black;
  position: relative;
  background-color: ${(props) => {
    if (props.count > 0 && 2 >= props.count) {
      return "gray";
    } else if (props.count > 2 && 6 >= props.count) {
      return "blue";
    } else if (props.count > 7 && 10 >= props.count) {
      return "green";
    } else {
      return "red";
    }
  }};
  outline: none;
  &:hover {
    border: 2px solid yellow;
    ${UsersBlock} {
      display: flex;
    }
  }
  :last-child {
    @media (min-width: 1366px) {
      ol {
        top: 30px;
        left: -60px;
      }
    }
  }
`;
const LabelText = styled.p`
  margin: 3px auto;
`;
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const MonthComponent = ({ users, month }) => {
  return (
    <MonthWrapper count={usersByMonth(users, month)}>
      <LabelText>{monthNames[month - 1]}</LabelText>
      <UsersBlock>
        {users.map((user, index) => {
          if (month === getMonthFromDate(user.dob)) {
            return (
              <User key={index}>
                {user.firstName} {user.lastName}
              </User>
            );
          } else {
            return null;
          }
        })}
      </UsersBlock>
    </MonthWrapper>
  );
};
