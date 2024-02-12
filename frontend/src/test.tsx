import React from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

export const Test = () => {
  const HeaderStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    font-size: 20px;
    line-height: 20px;
    padding: 10px;
    box-sizing: border-box;
  `;
  const HeaderFlexItem = styled.div`
    width: 100px;
    height: 80px;
    border: 1px solid orange;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 100px;
  `;
  const Content = styled.div`
    widh: 100vw;
    height: 100vh;
    background-color: #bde0e3;
  `;

  return (
    <>
      <HeaderStyle>
        <Link to="/">
          <HeaderFlexItem>Test 페이지_main</HeaderFlexItem>
        </Link>
        <Link to="/testA">
          <HeaderFlexItem>Test 페이지 A</HeaderFlexItem>
        </Link>
        <Link to="/testB">
          <HeaderFlexItem>Test 페이지 B</HeaderFlexItem>
        </Link>
      </HeaderStyle>
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export const TestA = () => {
  return <div>Test 페이지 A</div>;
};

export const TestB = () => {
  return <div>Test 페이지 B</div>;
};
