import Sweet from "../models/Sweet.model.js";

/*CREATE*/
export const createSweet = async (req, res) => {
  try {
    const sweet = await Sweet.create(req.body);
    res.status(201).json(sweet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/*GET All */
export const getAllSweets = async (req, res) => {
  try {
    const sweets = await Sweet.find().sort({ createdAt: -1 });
    res.status(200).json(sweets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/** UPDATE **/
export const updateSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    res.status(200).json(sweet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/*DELETE */
export const deleteSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findByIdAndDelete(req.params.id);

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    res.status(200).json({ message: "Sweet deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const searchSweets = async (req, res) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query;

    const query = {};

    if (name) {
      query.name = { $regex: name, $options: "i" };
    }

    if (category) {
      query.category = category;
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const sweets = await Sweet.find(query);
    res.json(sweets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const purchaseSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findById(req.params.id);

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    if (sweet.quantity <= 0) {
      return res.status(400).json({ message: "Out of stock" });
    }

    sweet.quantity -= 1;
    await sweet.save();

    res.json(sweet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const restockSweet = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid restock amount" });
    }

    const sweet = await Sweet.findById(req.params.id);

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    sweet.quantity += Number(amount);
    await sweet.save();

    res.json(sweet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



