import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";
import { appStore } from "../utils/appStore.js";
import '@testing-library/jest-dom';

describe("Header Test Cases", ()=>{
    test('should Be load Header', () => { 
        render( <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
                </BrowserRouter> );
        
    
        const loginButton = screen.getByRole("button", { name: "Login" });
        expect(loginButton).toBeInTheDocument();
    });
    
    test("Should show User Login or Logout", ()=>{
        render(<BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
            </BrowserRouter> );
        const loginButton = screen.getByRole("button", {name: "Login"});
        expect(loginButton).toBeInTheDocument();
        fireEvent.click(loginButton);
        const logoutHandle = screen.getByRole("button", {name : "Logout"});
        expect(logoutHandle).toBeInTheDocument();
    });

    test("Should show User Connection Online", ()=>{
        render(<BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
            </BrowserRouter>);
        const statusData = screen.getByTestId("On-Off-status");
        expect(statusData).toHaveTextContent("✔️");

        const handleOffline = jest.fn();
        window.addEventListener("offline", handleOffline);

        fireEvent(window, new Event("offline"));
        expect(statusData).toHaveTextContent("❌");
    });

    // describe("Should Check Offline Status", ()=>{
        // test("Should show User Connection Offline", ()=>{
        //     render(<BrowserRouter>
        //         <Provider store={appStore}>
        //             <Header/>
        //         </Provider>
        //         </BrowserRouter>);

        //   const statusData = screen.getByTestId("On-Off-status");
        //   expect(statusData).toHaveTextContent("❌");
    // });
// });
});