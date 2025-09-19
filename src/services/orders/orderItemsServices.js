const orderItemsRepo = require('../../repositories/orders/orderItemsRepo');

const addOrderItem = async (orderItemData) => {
    const newOrderItem = await orderItemsRepo.addOrderItem(orderItemData);
    return newOrderItem;
};

const getAllOrderItems = async () => {
    const orderItems = await orderItemsRepo.getAllOrderItems();
    if (orderItems.length >= 0) {
        return orderItems;
    }
    return [];
};

const orderItemById = async (id) => {
    const orderItem = await orderItemsRepo.getOrderItemById(id);
    if (!orderItem) {
        throw new Error('Order item not found');
    }
    return orderItem;
}           
const updatedOrderItem = async (id, orderItemData) => {     
    const checkOrderItem = await orderItemsRepo.getOrderItemById(id);
    if (!checkOrderItem) {
        throw new Error('Order item not found');
    }
    const updatedOrderItem = await orderItemsRepo.updateOrderItem(id, orderItemData);
    return updatedOrderItem;
};      
const removedOrderItem = async (id) => {
    const removed = await orderItemsRepo.deleteOrderItem(id);
    if (!removed) {
        throw new Error('Order item not found');
    }
    return { message: 'Order item removed successfully' };
};

module.exports = {
    addOrderItem,
    getAllOrderItems,
    orderItemById,
    updatedOrderItem,
    removedOrderItem,
};  