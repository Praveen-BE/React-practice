import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Header from "../components/Header";
import RestaurantMenu from "../components/RestaurantMenu";
import Cart from "../components/Cart";
import { render, act, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../utils/appStore";
import MOCK_MENU_DATA from "../mocks/resMenuMock.json";
import "@testing-library/jest-dom";

test("Should Render Cart Component with Cart Items", async()=>{

    global.fetch=jest.fn(()=>{
        return Promise.resolve({
            json: ()=>{
                return Promise.resolve(MOCK_MENU_DATA);
            }
        });
    });

    await act(async()=>render(
        <BrowserRouter>
        <Provider store={appStore}>
            <div>
            <Header/>
            <RestaurantMenu/>
            <Cart/>
            </div>
        </Provider>
        </BrowserRouter>
    ));
    
    const noItem = screen.getByTestId("empty-cart");
    expect(noItem).toBeInTheDocument();

    const cartCount = screen.getByTestId("cart-count");
    expect(cartCount).toHaveTextContent("0");

    const accordSymbol1 = screen.getAllByTestId("accord-symbol");
    expect(accordSymbol1[0]).toHaveTextContent("🔼");

    const accrdButton = screen.getAllByTestId("accordian-btn");
    fireEvent.click(accrdButton[0]);

    const accordSymbol2 = screen.getAllByTestId("accord-symbol");
    expect(accordSymbol2[0]).toHaveTextContent("🔽");

    const foodItem = screen.getAllByTestId("add-cart");
    expect(foodItem.length).toBe(6);

    fireEvent.click(foodItem[0]);
    const cartCount1 = screen.getByTestId("cart-count");
    expect(cartCount1).toHaveTextContent("1");

    fireEvent.click(foodItem[1]);
    const cartCount2 = screen.getByTestId("cart-count");
    expect(cartCount2).toHaveTextContent("2");

    const removeFoodCart = screen.getAllByTestId("remove-cart");
    expect(removeFoodCart.length).toBe(2);

    fireEvent.click(removeFoodCart[0]);

    const removeFoodCart1 = screen.getAllByTestId("remove-cart");
    expect(removeFoodCart1.length).toBe(1);

    const cartCount3 = screen.getByTestId("cart-count");
    expect(cartCount3).toHaveTextContent("1");

    fireEvent.click(removeFoodCart1[0]);
    const cartCount4 = screen.getByTestId("cart-count");
    expect(cartCount4).toHaveTextContent("0");
        
    const noItem1 = screen.getByTestId("empty-cart");
    expect(noItem1).toBeInTheDocument();

    // const accrdButton1 = screen.getAllByTestId("accordian-btn");
    // fireEvent.click(accrdButton[0]);

    // const accordSymbol2 = screen.getAllByTestId("accord-symbol");
    // expect(accordSymbol2[0]).toHaveTextContent("🔽");

    const foodItem1 = screen.getAllByTestId("add-cart");
    expect(foodItem1.length).toBe(6);

    fireEvent.click(foodItem1[0]);
    fireEvent.click(foodItem1[1]);
    const cartCount5 = screen.getByTestId("cart-count");
    expect(cartCount5).toHaveTextContent("2");

    const clearBtn = screen.getByTestId("clear-cart");
    expect(clearBtn).toHaveTextContent("Clear Cart");

    fireEvent.click(clearBtn);
    const cartCount6 = screen.getByTestId("cart-count");
    expect(cartCount6).toHaveTextContent("0");

});