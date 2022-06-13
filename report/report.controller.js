const ReportModel = require("./report.model");

// get

async function getReport(req, res) {
  try {
    let id = req.params.id;
    if (id) {
      let report = await ReportModel.findOne({ _id: id });
      return res.status(200).send(report);
    }

    return res.status(400).send("id is not fine");
  } catch (err) {
    res.status(400).send(err);
  }
}
async function getReport1(req, res) {
  try {
    const contact = await ReportModel.find({});
    return res.status(200).send(contact);
  } catch (err) {
    res.status(400).send(err);
  }
}
// filter uchun
async function getReportFilter(req, res) {
  try {
    const report = await ReportModel.find({});
    const foo = report.filter(
      (e) =>
        new Date(e.fullFData).getFullYear() === req.body.year &&
        new Date(e.fullFData).getMonth()+1=== req.body.month
    );
    if (foo) {
      return res.status(200).send(foo);
    } else {
      return res.status(200).send("report");
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
    return res.status(200).send(contact);
  } catch (err) {
    res.status(400).send(err);
  }
}

// update / put

async function updateReport(req, res) {
  try {
    let userId = req.params.id;
    let repo = await ReportModel.findOne({ _id: userId });
    // console.log(repo)
    repo.userName = req.body.userName;
    repo.userFish = req.body.userFish;
    repo.userlav = req.body.userlav;
    repo.services = req.body.services;
    let foo = await repo.save();
    return res.status(200).send(foo);
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
