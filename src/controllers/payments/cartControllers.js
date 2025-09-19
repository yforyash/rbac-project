const {
  createCart,
  getAllCarts,
  cartById,
  updatedCart,
  deletedCart,
} = require("../../services/payments/cartServices");

exports.createCart = async (req, res) => {
  try {
    const { user_id, product_variant_id, quantity } = req.body;
    const cart = await createCart({ user_id, product_variant_id, quantity });
    return res.status(201).json({ success: true, message: "Cart item created", cart });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

exports.getAllCarts = async (req, res) => {
  try {
    const carts = await getAllCarts();
    if (carts.length === 0) {
      return res.status(404).json({ success: false, message: "No cart items found" });
    }
    return res.status(200).json({ success: true, carts });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

exports.getCartById = async (req, res) => {
  try {
    const cart = await cartById(req.params.id);
    return res.status(200).json({ success: true, cart });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ success: false, message: error.message });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const { user_id, product_variant_id, quantity } = req.body;
    const cart = await updatedCart(req.params.id, { user_id, product_variant_id, quantity });
    return res.status(200).json({ success: true, message: "Cart updated", cart });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ success: false, message: error.message });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const result = await deletedCart(req.params.id);
    return res.status(200).json({ success: true, message: result.message });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ success: false, message: error.message });
  }
};
