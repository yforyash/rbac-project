
const {
  getAllCatalog,
  catalogById,
  createCatalog,
  updatedCatalog,
  deletedCatalog,
} = require("../../services/products/catalogServices");

exports.createCatalog = async (req, res) => {
  try {
    const { catalog_name, description } = req.body;
    const catalog = await createCatalog({ catalog_name, description });
    return res.status(201).json({
      success: true,
      message: "Catalog created successfully",
      catalog,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong on our side" });
  }
};

exports.getCatalogById = async (req, res) => {
  try {
    const catalog = await catalogById(req.params.id);
    if (!catalog) {
      return res
        .status(404)
        .json({ success: false, message: "Catalog not found" });
    }
    return res.status(200).json({ success: true, catalog });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong on our side" });
  }
};

exports.getAllCatalogs = async (req, res) => {
  try {
    const catalogs = await getAllCatalog();
    if (catalogs.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No catalogs found" });
    }
    return res.status(200).json({ success: true, catalogs });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong on our side" });
  }
};

exports.updateCatalog = async (req, res) => {
  try {
    const { catalog_name, description } = req.body;
    const catalog = await updatedCatalog(req.params.id, {
      catalog_name,
      description,
    });
    if (!catalog) {
      return res
        .status(404)
        .json({ success: false, message: "Catalog not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Catalog updated successfully",
      catalog,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong on our side" });
  }
};

exports.deleteCatalog = async (req, res) => {
  try {
    const catalog = await deletedCatalog(req.params.id);
    if (!catalog) {
      return res
        .status(404)
        .json({ success: false, message: "Catalog not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Catalog deleted successfully" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong on our side" });
  }
};
