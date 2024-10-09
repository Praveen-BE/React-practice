import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import RestaurantMenu from "../components/RestaurantMenu";
import Cart from "../components/Cart";
import { render, act, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../utils/appStore";
import "@testing-library/jest-dom";

test("Should Render Cart Component", async()=>{
    global.fetch=jest.fn(()=>{
        return Promise.resolve({
            json: ()=>{
                return Promise.resolve();
            }
        });
    });

    await act(async()=>render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestaurantMenu/>
            <Cart/>
        </Provider>
        </BrowserRouter>
    ));

    const cartButton = screen.getByTestId("cart-btn");
    expect(cartButton).toHaveTextContent("Cart");

    fireEvent.click(cartButton);
    
    const emptyCart = screen.getByTestId("empty-cart");
    // expect(emptyCart).toHaveTextContent("Add Cart Items");
    expect(emptyCart).toBeInTheDocument();

});

