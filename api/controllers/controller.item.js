import Item from "../schemas/item.schema.js";
import { badResponse, createdResponse, okResponse } from "../responses/responses.js";

/**
 * Returns all items from the database
 * @function getItems
 * @public
 * @param  {res} req  the express request object
 * @param  {res} res  the express response object
 * @return {[Item]} an array of Items
 */
const getItems = async (req, res) => {
    const items = await Item.find({});
    return okResponse(res, items);
};

/**
 * Returns all transactions from the database
 * @function createItem
 * @public
 * @param  {res} req  the express request object
 * @param  {res} res  the express response object
 * @return {Item} the created Item
 */
const createItem = async (req, res) => {
    const { qty, price_per_item, discount } = req.body;
    // Check if all parameters are present in the request body
    if (qty == undefined || price_per_item == undefined || discount == undefined) {
        return badResponse(res, "Malformed request");
    }

    // instantiate the item
    let item;

    try {
        // try to create the item
        item = await Item.create({ qty, price_per_item, discount });
    } catch (err) {
        // if something went wrong return a bad response
        return badResponse(res, "Could not create item");
    }
    // finaly return a created response
    return createdResponse(res, item);
};

export {
    getItems,
    createItem
};