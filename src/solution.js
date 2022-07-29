export default class OrdersAnalyzer {
    constructor() {
        this.weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    }

    totalQuantity(productId, orders) {
        // TODO: Implement
        const result = {}
        let productPerDay = this.weekdays.map(day => 0)
        orders.forEach(order => {
            const orderedDay = new Date(order.creationDate).getDay()
            const productInLine = order.orderLines.find(product => product.productId === productId)
            if(productInLine && productInLine.quantity) {
                const prevQuantity = productPerDay[orderedDay]
                productPerDay[orderedDay] = prevQuantity + productInLine.quantity
            }
        })
        Object.keys(productPerDay).forEach(day => {
            result[this.weekdays[parseInt(day)]] = productPerDay[parseInt(day)]
        })
        return result
    }
}
