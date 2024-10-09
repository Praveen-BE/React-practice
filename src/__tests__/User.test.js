import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import User from "../components/User";
import "@testing-library/jest-dom";

test("Should Load User Component", ()=>{
    render(<User/>);
    const selectValue1 = screen.getByTestId("userValue1");
    const selectValue2 = screen.getByTestId("userValue2");

    const selectCount1 = screen.getByTestId("count+1");
    const selectCount2 = screen.getByTestId("count+2");
    const selectCount3 = screen.getByTestId("count-12");

    expect(selectValue1).toHaveTextContent("0");
    fireEvent.click(selectCount1);
    expect(selectValue1).toHaveTextContent("1");
    fireEvent.click(selectCount2);
    expect(selectValue2).toHaveTextContent("1");
    fireEvent.click(selectCount3);
    expect(selectValue1).toHaveTextContent("0");
    expect(selectValue2).toHaveTextContent("0");
});