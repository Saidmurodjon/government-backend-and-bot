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
//Bosh sahifa uchun filterlangan reportlar
// .find({$expr:{$eq:[{$month:"$fullFData"},6,{$year:"$fullFData"},2022]}})
async function getReport1(req, res) {
  try {
    const report = await ReportModel.find({
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
    // console.log(req.body);
    const report = await ReportModel.find({});

    const foo = report.filter(
      (e) =>
        new Date(e.date).getFullYear() === req.body.year * 1 &&
        new Date(e.date).getMonth()=== req.body.month * 1 &&
        e.tasdiq === true
    );

 
    if (foo && req.body.stat === true) {
      const newArray = [];
      foo.map((e) => e.services.map((i) => newArray.push(i)));
      console.log(newArray);
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
    // O'zgartiriladi !!! malumot qo'shish uchun
    for (let i = 0; i < 50; i++) {
      const x = {
        userName: `Sirojiddin${i}`,
        userFish: "Махмудов Сирожиддин Адхамович",
        userlar: `Сирожиддин${i}`,
        cilientKabinet: `${i}-xona`,
        services: [
          {
            category: "sistema",
            type: "sistema",
          },
          {
            category: "hard",
            type: "hdd",
          },
        ],
        cilientFish: `Doston Valiyev Hoshimjon og'li ${i}`,
        cilientBolim: `bolim${i}`,
        tasdiq: true,
        date: "2022-02-10T22:39:00.746Z",
        chatID: i,
        countYear: i,
        countMonth: i,
        __v: 1,
      };
      const contact = await ReportModel.create(x);
      console.log(contact);
    }
    // return res.status(200).send(contact);
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
