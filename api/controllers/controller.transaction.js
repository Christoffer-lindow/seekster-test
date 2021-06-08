import Transaction from "../schemas/transaction.schema.js";
import Item from "../schemas/item.schema.js";

import { okResponse, badResponse, createdResponse, notFoundResponse } from "../responses/responses.js";
import { calculateTotalPrice } from "../models/transactionCalculator.js";

/**
 * Returns all transactions from the database
 * @function getTransactions
 * @public
 * @param  {res} req  the express request object
 * @param  {res} res  the express response object
 * @return {[Transaction]} an array of Transactions
 */
const getTransactions = async (req, res) => {
    const transactions = await Transaction.find({});
    okResponse(res, transactions);
};


/**
 * Returns all transactions from the database
 * @function getTransactions
 * @public
 * @param  {res} req  the express request object
 * @param  {res} res  the express response object
 * @return {Transaction} the created transaction
 */

const processPayment = async (req, res) => {
    const { item_list, total_discount, payment } = req.body;

    // Check if all parameters are present in the request body
    if (item_list == undefined || total_discount == undefined || payment == undefined)
        // Return a 400 response if the request is malformed
        return badResponse(res, "Malformed request");

    // Verify that all items are present in the database
    try {
        const itemsVerified = await verifyItems(item_list);
        if (!itemsVerified) {
            // if any of the items are not present in the database return a 404 response
            return notFoundResponse(res, "Could not find item with provided id");
        }
    } catch (ex) {
        // if the id does not match the format of mongoDB object Ids return a 400 bad response
        return badResponse(res, "Malformed id or the server is down");
    }

    // calculate the total price given the array of items and the total discount
    const total = calculateTotalPrice(item_list, total_discount);
    if (total > payment)
        // if the total cost is higher than the payment, return a bad response
        return badResponse(res, "Payment not enough");
    
    // calculate the change
    const change = payment - total;

    // instantiate the transaction
    let transaction;
    try {
        // try to create the transaction
        transaction = await Transaction.create({
            items: item_list,
            total_price: total,
            change,
        });

        return createdResponse(res, transaction);
    } catch (ex) {
        // if the transaction could not be created log it to the server
        console.log(ex);
    }

    // if for any reason the transaction could not be created return a bad response.
    return badResponse(res, "Could not create transaction");


};

const verifyItems = async (itemList) => {
    for (const item of itemList) {
        try {
            // get the item from the database
            const itemInDb = await Item.findById(item._id);
            if (itemInDb === null) {
                // if the item from the database is null, return false
                return false;
            }
        } catch (ex) {
            // This will run when the Id object string is malformed
            throw ex;
        }
    }
    // Return true if all of the items were found in the database
    return true;
};

export {
    getTransactions,
    processPayment
};