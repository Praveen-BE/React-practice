import { render, act, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import MOCK_MENU_DATA from "../mocks/resMenuMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";
import {appStore} from "../utils/appStore";

test("Should render RestaurantMenu Component", async()=>{
    global.fetch=jest.fn(()=>{
        return Promise.resolve({
            json: ()=>{
                return Promise.resolve(MOCK_MENU_DATA);
            }
        })
    })

    await act( async()=> render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestaurantMenu/>
        </Provider>
        </BrowserRouter>
        ));

    const accordSymbol = screen.getAllByTestId("accord-symbol");
    expect(accordSymbol[0]).toHaveTextContent("🔼");
    
    const accrdButton = screen.getAllByTestId("accordian-btn");
    fireEvent.click(accrdButton[0]);

    const accordSymbol1 = screen.getAllByTestId("accord-symbol");
    expect(accordSymbol1[0]).toHaveTextContent("🔽");

    fireEvent.click(accrdButton[1]);
    const accordSymbol2 = screen.getAllByTestId("accord-symbol");
    expect(accordSymbol2[0]).toHaveTextContent("🔼");
    expect(accordSymbol2[1]).toHaveTextContent("🔽");

    fireEvent.click(accrdButton[1]);
    const accordSymbol3 = screen.getAllByTestId("accord-symbol");
    expect(accordSymbol3[0]).toHaveTextContent("🔼");
    expect(accordSymbol3[1]).toHaveTextContent("🔼");
});

test("Should render and Work Accordian and Add+ Cart", async()=>{
    global.fetch=jest.fn(()=>{
        return Promise.resolve({
            json: ()=>{
                return Promise.resolve(MOCK_MENU_DATA);
            }
        })
    })

    await act( async()=> render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestaurantMenu/>
        </Provider>
        </BrowserRouter>
        ));

    const cartCount = screen.getByTestId("cart-count");
    expect(cartCount).toHaveTextContent("0");

    const accordSymbol1 = screen.getAllByTestId("accord-symbol");
    expect(accordSymbol1[0]).toHaveTextContent("🔼");

    const accrdButton = screen.getAllByTestId("accordian-btn");
    fireEvent.click(accrdButton[0]);

    const accordSymbol2 = screen.getAllByTestId("accord-symbol");
    expect(accordSymbol2[0]).toHaveTextContent("🔽");

    const addButton = screen.getAllByRole("button",{name : "Add+"});
    fireEvent.click(addButton[0]);

    const cartCount1 = screen.getByTestId("cart-count");
    expect(cartCount1).toHaveTextContent("1");
});


// describe("For Shimmer UI", async()=>{
//     global.fetch=jest.fn(()=>{
//         return Promise.reject({
//             json: ()=>{
//                 return Promise.resolve([]);
//             }
//         })
//     });

//     beforeAll(()=>{
//         jest.useFakeTimers();
//     });

//     afterAll(()=>{
//         jest.useRealTimers();
//     });

//     test("Should render Shimmer UI", async()=>{
//         await act(async()=>render(
//             <BrowserRouter>
//                 <Provider store={appStore}>
//                     <Header/>
//                     <RestaurantMenu/>
//                 </Provider>
//             </BrowserRouter>
//         ));
        
//         screen.debug();
//         expect(screen.getByTestId("shimmer-ui")).toHaveTextContent("Shimmer UI");
        
//         jest.advanceTimersByTime(3000);
//         screen.debug();
//         expect(screen.get)
//     })

// });