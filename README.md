# Find a total ordered quantity of a product for every weekday

You are working on an e-commerce platform which requires a new functionality to be implemented: calculating an total quantity of a given product ordered, grouped by days of week.

# Setup

Follow these steps if you are using zip/git mode (i.e. not available inside Devskiller in-browser IDE):

1. `npm install` – install dependencies
2. `npm test` – run all tests once (this will be used to evaluate your solutions)
3. `npm run test:watch` - run all tests in _watch mode_ (optionally, you can use it locally if you prefer)

# Task

Implement `OrdersAnalyzer#totalQuantity` method that

1. For passed orders will return a map with a name of a day of the week as a key and a sum of ordered quantity for a given product id as a value. 

2. The method should always return a map. If there are no orders for passed `productId` for some weekday, there might be no entry in the resulting map or there might be an entry with a `0` value. 

## Example

The data (_orders_) is available in `<dataset>-data.json` (e.g. `stationery-data.json`). Testcases are defined in `<dataset>-testcases.json` (e.g. `stationery-testcases.json`).

Orders collection:

```javascript
[
    {
        orderId: 554,
        creationDate: "2017-03-25T10:35:20", // Saturday
        orderLines: [
            {productId: 9872, name: 'Pencil', quantity: 3, unitPrice: 3.00}
        ]
    },
    {
        orderId: 555,
        creationDate: "2017-03-25T11:24:20", // Saturday
        orderLines: [
            {productId: 9872, name: 'Pencil', quantity: 1, unitPrice: 3.00},
            {productId: 1746, name: 'Eraser', quantity: 1, unitPrice: 1.00}
        ]
    },
    {
        orderId: 453,
        creationDate: "2017-03-27T14:53:12", // Monday
        orderLines: [
            {productId: 5723, name: 'Pen', quantity: 4, unitPrice: 4.22},
            {productId: 9872, name: 'Pencil', quantity: 3, unitPrice: 3.12},
            {productId: 3433, name: 'Erasers Set', quantity: 1, unitPrice: 6.15}
        ]
    },
    {
        orderId: 431,
        creationDate: "2017-03-20T12:15:02", // Monday
        orderLines: [
            {productId: 5723, name: 'Pen', quantity: 7, unitPrice: 4.22},
            {productId: 3433, name: 'Erasers Set', quantity: 2, unitPrice: 6.15}
        ]
    },
    {
        orderId: 690,
        creationDate: "2017-03-26T11:14:00", // Sunday
        orderLines: [
            {productId: 9872, name: 'Pencil', quantity: 4, unitPrice: 3.12},
            {productId: 4098, name: 'Marker', quantity: 5, unitPrice: 4.50}
        ]
    }
];
```

## Example output

Your implementation should return following output for **productId=9872** for example data:

```json
{
  "MONDAY" : 3, 
  "TUESDAY" : 0, 
  "WEDNESDAY" : 0, 
  "THURSDAY" : 0, 
  "FRIDAY " : 0, 
  "SATURDAY" : 4,
  "SUNDAY" : 4 
}
```

In the example above, there are two orders placed on Saturday: first with quantity equal to `3` and second with quantity equal to `1`, so the sum of quantities is `4`. For Monday there is only one order for this product, so total quantity is equal to `3`, and for Sunday it's `4`.
