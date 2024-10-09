import Items from "../components/Items";
import { render } from "@testing-library/react";
import resMenucataMock from "../mocks/resMenuCataMock.json";

test("Item with empty image id",()=>{
    render(<Items itemdata={resMenucataMock}/>);
    
});