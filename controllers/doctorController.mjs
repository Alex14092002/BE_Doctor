import User from "../models/User.mjs";
import upload from "../utils/configMulter.mjs";
const doctorController = {
  updateInfoDoctorandNurse: async (req, res) => {
    try {
      const userId = req.params.id;

      const updateInfo = {
        name: req.body.name,
        email: req.body.email,
        birth: req.body.birth,
        about: req.body.about,
        gender : req.body.gender,
        nameclinic: req.body.nameclinic,
        addressclinic: req.body.addressclinic,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        province: req.body.province,
        country: req.body.country,
        postal: req.body.postal,
        services: req.body.services,
        education: req.body.education,
        experience :req.body.experience,
        awards : req.body.awards,
        memberships : req.body.memberships,
        registrations : req.body.registrations
      };
      if (req.files && req.files.avt) {
        const avatarFile = req.files.avt[0];
        updateInfo.avt = avatarFile.path;
      }

      if (req.files && req.files.Imgclinic) {
        const ImgclinicFile = req.files.Imgclinic;
        updateInfo.Imgclinic = ImgclinicFile.map((file) => file.path);
      }

      const userToUpdate = await User.findById(userId);

      if (!userToUpdate) {
        return res.status(404).json({ message: "Không tìm thấy người dùng." });
      }

      // Cập nhật thông tin người dùng bằng cách thêm các trường từ updateInfo
      Object.assign(userToUpdate, updateInfo);

      // Lưu người dùng đã được cập nhật vào cơ sở dữ liệu
      const updatedUser = await userToUpdate.save();
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  uploadInfoPatient: async (req, res) => {
    try {
      const userId = req.params.id;
      const updateInfo = {
        name: req.body.name,
        email: req.body.email,
        birth: req.body.birth,
        address1: req.body.address1,
        city: req.body.city,
        province: req.body.province,
        postal: req.body.postal,
        country: req.body.country,
      };
      
      if (req.files && req.files.avt) {
        const avatarFile = req.files.avt[0];
        updateInfo.avt = avatarFile.path;
      }
      const userToUpdate = await User.findById(userId);
      if (!userToUpdate) {
        return res.status(404).json({ message: "Không tìm thấy người dùng." });
      }
      // Cập nhật thông tin người dùng bằng cách thêm các trường từ updateInfo
      Object.assign(userToUpdate, updateInfo);
      // Lưu người dùng đã được cập nhật vào cơ sở dữ liệu
      const updatedUser = await userToUpdate.save();
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
};

export default doctorController;
