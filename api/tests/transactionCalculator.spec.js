import { calculateTotalPrice } from "../models/transactionCalculator.js";
test("calculateTotalPrice returns the expected total price", () => {
    const data = {
        item_list: [{
            "qty": 2,
            "price_per_item": 5,
            "discount": 0.10
        }],
        total_discount: 0.10
    };
    const expected = 8.1;
    const actual = calculateTotalPrice(data.item_list, data.total_discount);
    expect(actual).toBe(expected);
});

test("calculateTotalPrice returns 0 given 0 quantity", () => {
    const data = {
        item_list: [{
            "qty": 0,
            "price_per_item": 5,
            "discount": 0.10
        }],
        total_discount: 0.10
    };
    const expected = 0;
    const actual = calculateTotalPrice(data.item_list, data.total_discount);
    expect(actual).toBe(expected);
});

test("calculateTotalPrice returns 0 given 0 price", () => {
    const data = {
        item_list: [{
            "qty": 5,
            "price_per_item": 0,
            "discount": 0.10
        }],
        total_discount: 0.10
    };
    const expected = 0;
    const actual = calculateTotalPrice(data.item_list, data.total_discount);
    expect(actual).toBe(expected);
});

