import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("Should load Contact Component",()=>{
    render(<Contact/>);
    const heading = screen.getByText("Contact Me");
    expect(heading).toBeInTheDocument();
})
