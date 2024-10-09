import { render,screen } from "@testing-library/react";
import RestaurantCard, { OfferLabelCard } from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import MOCK_DATA1 from "../mocks/resCardMockNoBest.json";
import MOCK_DATA2 from "../mocks/resCardMock2.json";
import "@testing-library/jest-dom"

test("Should render Restaurant Card with Data", ()=>{
    render(<RestaurantCard apiResList={MOCK_DATA1}/>);
    const restroName = screen.getByTestId("restro-name");
    expect(restroName).toHaveTextContent("Five Star Chicken");
});

test("Should Render Offer Labeled Renstaurant Card with Data", ()=>{
    const RestaurantCardBest = OfferLabelCard(RestaurantCard);
    render(<RestaurantCardBest apiResList={MOCK_DATA}/>);
    const restroName = screen.getByTestId("restro-name");
    expect(restroName).toHaveTextContent("Chinese Wok");
    const OfferLabel = screen.getByTestId("Offer-Label");
    expect(OfferLabel).toHaveTextContent("ITEMS AT ₹169");
});

test("Should Render Offer Labeled Renstaurant Card with Data", ()=>{
    const RestaurantCardBest = OfferLabelCard(RestaurantCard);
    render(<RestaurantCardBest apiResList={MOCK_DATA2}/>);
    const restroName = screen.getByTestId("restro-name");
    expect(restroName).toHaveTextContent("Chinese Wok");
    const OfferLabel = screen.getByTestId("Offer-Label");
    expect(OfferLabel).toHaveTextContent("ITEMS AT ₹169");
});