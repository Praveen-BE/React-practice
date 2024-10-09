import Body from "../components/Body";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA_LIST from "../mocks/resBodyListMock.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should Render Body Component", async()=>{
    global.fetch=jest.fn(()=>{
        return Promise.resolve({
            json: ()=>{
                return Promise.resolve(MOCK_DATA_LIST);
            }
        })
    });

    await act(async()=> render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
                    ));

    const searchButton = screen.getByRole("button", {name: "Search"});
    expect(searchButton).toBeInTheDocument();
    const searchBox = screen.getByTestId("search-box");

    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(10);
    // console.log(searchBox);
    fireEvent.change(searchBox, {target: {value: "Burger"}});
    fireEvent.click(searchButton);
    // const cards = screen.getAllByTestId("resCard");
    const cards1 = screen.getAllByTestId("resCard");
    expect(cards1.length).toBe(1);
});

test("Should Show Top Rated Rated Restaurants", async()=>{
    global.fetch=jest.fn(()=>{
        return Promise.resolve({
            json: ()=>{
                return Promise.resolve(MOCK_DATA_LIST);
            }
        })
    });

    await act(async()=> render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
                    ));
    const topRateBtn = screen.getByTestId("top-rated");
    expect(topRateBtn).toHaveTextContent("Top Rated");
    fireEvent.click(topRateBtn);
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(2);
});

test("Should Show Top Rated Rated Restaurants", async()=>{
    global.fetch=jest.fn(()=>{
        return Promise.resolve({
            json: ()=>{
                return Promise.resolve(MOCK_DATA_LIST);
            }
        })
    });

    await act(async()=> render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
                    ));
    window.addEventListener("offline", ()=>jest.fn());
    fireEvent(window, new Event("offline"));
    const offlineRender = screen.getByTestId("offline-box");
    expect(offlineRender).toHaveTextContent("Check Internet Connection 🥺");
});