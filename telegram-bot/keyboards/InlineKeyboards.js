module.exports = {
  setMainInlineKey: new Array(
    new Array(
      {
        text: "Meeting",
        callback_data: "meet",
      },
      {
        text: "Qurilmalar",
        callback_data: "devices",
      },
      {
        text: "Service",
        callback_data: "service",
      }
    )
  ),
  setInlineKey: new Array(
    new Array(
      {
        text: "yo'q",
        callback_data: "no",
      },
      {
        text: "Ha",
        callback_data: "ok",
      }
    )
  ),
  setInlineMeet: new Array(
    new Array(
      {
        text: "Ortga",
        callback_data: "no",
      },
      {
        text: "Meeting",
        url: "https://zoom.us/",
      }
    )
  ),
  setInlineServiceTrue: new Array(
    new Array({
      text: "Tasdiqlash",
      callback_data: "tasdiq",
    })
  ),
  setOldService: new Array(
    new Array(
      {
        text: "Ortga",
        callback_data: "no",
      },
      {
        text: "Avvalgi chaqiruvlar",
        callback_data: "oldService",
      }
    )
  ),
  setBack: new Array(
    new Array({
      text: "Ortga",
      callback_data: "no",
    })
  ),
};
