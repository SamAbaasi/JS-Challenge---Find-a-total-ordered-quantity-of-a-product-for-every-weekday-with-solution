import OrdersAnalyzer from "../src/index";
import * as matchers from './matchers';

describe('OrdersAnalyzer', () => {
    const weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    const analyzer = new OrdersAnalyzer();
    beforeEach(() => {
        jasmine.addMatchers(matchers);
    });

    describe('stationery dataset totalQuantity', () => {
        const { orders } = require('./stationery-data.json');
        const expectedResults = require('./stationery-testcases.json');

        Object.keys(expectedResults).forEach(key => {
            const productId = parseInt(key);
            const expectedProductSales = expectedResults[key];
            const dailySales = analyzer.totalQuantity(productId, orders);

            it(`should return correct values for ${productId}`, () => {
                weekdays.forEach(weekday => {
                    if (expectedProductSales[weekday] === 0) {
                        expect(dailySales[weekday]).toBeUndefinedOrZero();
                    } else {
                        expect(dailySales[weekday]).toEqual(expectedProductSales[weekday]);
                    }
                });
            });
        });
    });
});
