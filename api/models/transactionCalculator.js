/**
 * Returns the total discount for a transaction
 * @function calculateTotalPrice
 * @public
 * @param  {[items]} item_list  a list of items
 * @param  {Number} total_discount total discount on the transaction
 * @return {Number} the total discount for a transaction
 */
const calculateTotalPrice = (item_list, total_discount) => {
    const discountedItemsTotal = calculateDiscountedItemsTotal(item_list);
    const total = discountedItemsTotal - (discountedItemsTotal * total_discount);
    return total;
};

/**
 * Returns the total discount for all items given a list of items
 * @function calculateDiscountedItemsTotal
 * @private
 * @param  {[items]} item_list  a list of items
 * @return {Number} the total discount for all items in a list
 */
const calculateDiscountedItemsTotal = (itemList) => {
    let itemsDiscounted = 0;
    itemList.forEach(item => {
        let discountedItem = item.price_per_item - (item.price_per_item * item.discount);
        itemsDiscounted += discountedItem;
    });
    return itemsDiscounted;
};

export {
    calculateTotalPrice
};