const cv = require("../models/cv");

exports.Addcv = async (req, res) => {
  try {
    const CV = new cv(req.body);({
    
      Firstname: req.body.Firstname,
      Lastname: req.body.Lastname,
      email: req.body.email,
      numberphone: req.body.numberphone,
      description: req.body.description,
      adress: req.body.adress,
      aboutus: req.body.aboutus,
      datedebut: req.body.datedebut,
      datafin: req.body.datafin,
      formation: req.body.formation,
      etablisment: req.body.etablisment,
      ville: req.body.ville,
      profile: req.body.profile,
      Post: req.body.Post,
      competance: req.body.competance,
      certificat: req.body.certificat,
      niveau: req.body.niveau,
      datedebcertif: req.body.datedebcertif,
      datefincertif: req.body.datefincertif,
      descripcertif: req.body.descripcertif,
      niveau: req.body.niveau,

    });
    
    await CV.save();
    res.status(200).send({ msg: "CV added", CV });
  } catch (error) {
    res.status(500).send("couldn't add cv");
  }
};

exports.Getcvs = async (req, res) => {
  try {
    const CV = await cv.find();
    res.status(200).send({ msg: "list of CVs", CV });
  } catch (error) {
    res.status(500).send("couldn't get CVS");
  }
};

exports.Delcv = async (req, res) => {
  try {
    await cv.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "deleted CV" });
  } catch (error) {
    res.status(500).send("couldn't delete CV");
  }
};

exports.Editcv = async (req, res) => {
  try {
    const CV = await cv.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body } },
      { new: true }
    );
    res.status(200).send({ msg: "updated CV", CV });
  } catch (error) {
    res.status(500).send("couldn't update CV");
  }
};

exports.GetOnecv = async (req, res) => {
  try {
    const CV = await cv.findById(req.params.id);
    
    res.status(200).send({ msg: "my CV", CV });
  } catch (error) {
    res.status(500).send("couldn't get my CV");
  }
};
