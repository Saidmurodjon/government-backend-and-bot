const ReportModel = require("./report.model");

// get

async function getReport(req, res) {
  try {
    const tashkilot_id = req.headers["tashkilot_id"];
    const report = await ReportModel.find({
      tasdiq: false,
      tashkilot_id: tashkilot_id,
    });

    return res.status(200).send(report);
  } catch (err) {
    res.status(404).send(err);
  }
}
//Bosh sahifa uchun filterlangan reportlar
// .find({$expr:{$eq:[{$month:"$fullFData"},6,{$year:"$fullFData"},2022]}})
async function getReport1(req, res) {
  try {
    const tashkilot_id = req.headers["tashkilot_id"];
    const report = await ReportModel.find({
      tashkilot_id: tashkilot_id,
      date: {
        $gt: req.body.from,
        $lt: req.body.to,
      },
    })
      .skip((req.body.quantity - 1) * req.body.step)
      .limit(req.body.step);
    if (report.length > 0) {
      return res.status(200).send(report);
    } else {
      return res.status(404).send(report);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}
// Hisobot uchun filterlangan reportni hizmatlari
async function getReportFilter(req, res) {
  try {
    const tashkilot_id = req.headers["tashkilot_id"];
    const month = req.body.month;
    const year = req.body.year;
    const report = await ReportModel.find({
      tashkilot_id: tashkilot_id,
      date: {
        $gt: `${year}-${month}`,
        $lt: `${year}-${month * 1 + 1}`,
      },
    });

    if (report && req.body.stat === true) {
      const newArray = [];
      report.map((e) => e.services.map((i) => newArray.push(i)));
      // console.log(newArray);
      return res.status(200).send(newArray);
    } else {
      return res.status(404).send("Not Found");
    }
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
}
async function getReport2(req, res) {
  try {
    let c_userName = req.params.userName;
    if (c_userName) {
      let report = await ReportModel.find({ userName: c_userName });
      return res.status(200).send(report);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

// post

async function addReport(req, res) {
  try {
    const contact = await ReportModel.create(req.body);

    return res.status(201).send(contact);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
}

// update / put

async function updateReport(req, res) {
  try {
    let userId = req.params.id;
    let repo = await ReportModel.findOne({ _id: userId });
    repo.userName = req.body.userName;
    repo.userFish = req.body.userFish;
    repo.userLavozim = req.body.userLavozim;
    repo.services = req.body.services;
    const foo = await repo.save();
    return res.status(205).send(foo);
  } catch (err) {
    return res.status(400).send(err);
  }
}

// delete

async function deleteReport(req, res) {
  try {
    let userId = req.params.id;
    let result = await ReportModel.findByIdAndRemove(userId);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getReport,
  addReport,
  updateReport,
  deleteReport,
  getReport1,
  getReport2,
  getReportFilter,
};
