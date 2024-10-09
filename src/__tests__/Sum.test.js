import { Sum } from "../components/Sum";

it("Shoud add",()=>{
    const result = Sum(3,4);
    expect (result).toBe(7);
});