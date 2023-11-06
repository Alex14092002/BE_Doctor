import Medicine from "../models/Medicine.mjs";
const medicineController = {
  addMedicine: async (req, res) => {
    try {
      const existingMedicine = await Medicine.findOne({
        $or: [{ name: req.body.name }],
      });
      if (existingMedicine) {
        res.status(400).json({
          message: "Loại thuốc đã tồn tại",
        });
      }

      const newMedicine = new Medicine({
        name: req.body.name,
      });
     
      const medicine = await newMedicine.save();
      res.status(200).json(newMedicine);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllmedicine: async (req, res) => {
    try {
      const medicine = await Medicine.find();
      res.status(200).json(medicine);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteMedicine: async (req, res) => {
    try {
      const service = await Services.findByIdAndDelete(req.params.id);
      res.status(200).json("Xoa thanh cong");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getOneMedicine: async (req, res) => {
    try {
      const service = await Services.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateMedicine: async (req, res) => {
    try {
      const serviceId = req.params.id;
      const updateservice = {
        name: req.body.name
      };

      const serviceToupdate = await serviceSchema.findById(serviceId);
      if (!serviceToupdate) {
        return res.status(404).json({ message: "Không tìm thấy dịch vụ" });
      }
      Object.assign(serviceToupdate, updateservice);
      const updatedservice = await serviceToupdate.save();
      res.status(200).json(updatedservice);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
export default medicineController