import Services from "../models/Services.mjs";
const servicesController = {
  addServices: async (req, res) => {
    try {
      const existingServices = await Services.findOne({
        $or: [{ name: req.body.name }],
      });
      if (existingServices) {
        res.status(400).json({
          message: "Dịch vụ đã tồn tại",
        });
      }

      const newService = new Services({
        name: req.body.name,
      });
     
      const service = await newService.save();
      res.status(200).json(newService);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllServices: async (req, res) => {
    try {
      const service = await Services.find();
      res.status(200).json(service);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteServices: async (req, res) => {
    try {
      const service = await Services.findByIdAndDelete(req.params.id);
      res.status(200).json("Xoa thanh cong");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getOneServices: async (req, res) => {
    try {
      const service = await Services.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateServicesr: async (req, res) => {
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
export default servicesController