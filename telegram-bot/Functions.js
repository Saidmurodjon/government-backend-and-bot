const BotUserModel = require("./users/BotUserModel");
const ReportModel = require("../report/report.model");
const keyboards = require("./keyboards/Keyboards");
const InlineKeyboards = require("./keyboards/InlineKeyboards");
const CilientModel = require("../cilients/cilient.model");
const QRCode = require("qrcode");
const fs = require("fs");
const { CHANNEL_ID } = require("../config");
const chanel_id =CHANNEL_ID;
module.exports = class Functions {
  // User saqlash
  static async setUser(ctx) {
    const chat_id = ctx.message.chat.id;
    // const text = message.text;
    // const contact = message.contact;
    const first_name = ctx.message.from.first_name;
    try {
      const category = await new BotUserModel({
        chatID: chat_id,
        step: 1,
        date: new Date(),
      });
      category.save(category);
      await ctx.telegram.sendMessage(
        chat_id,
        `${first_name} Telefon raqamingizni yuboring!`,
        {
          reply_markup: {
            remove_keyboard: true,
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: keyboards.setKeyboard,
          },
        }
      );
    } catch (err) {
      await ctx.telegram.sendMessage(chat_id, "Hatolik");
    }
  }
  // Contact saqlash
  static async setPhone(contact, ctx, chat_id, user, client) {
    console.log(contact.phone_number);
    try {
      const category = {
        step: 2,
        phone: contact.phone_number,
      };
      const elem = {
        chatID: chat_id,
      };
      await BotUserModel.findByIdAndUpdate(user._id, category);
      await CilientModel.findByIdAndUpdate(client._id, elem);

      await ctx.telegram.sendMessage(chat_id, `Contact yaratildi! `, {
        reply_markup: {
          resize_keyboard: true,
          one_time_keyboard: true,
          inline_keyboard: InlineKeyboards.setMainInlineKey,
        },
      });
    } catch (err) {
      await ctx.telegram.sendMessage(chat_id, "Hatolik");
    }
  }
  // Service chaqirish
  static async setService(ctx, chat_id) {
    try {
      const up = ctx.update.callback_query.message.message_id;
      console.log(up);
      await ctx.editMessageText(
        "Tamirlash hizmatiga murojaat qilmoqchimisiz ?",
        {
          chat_id: chat_id,
          message_id: up,
          reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            inline_keyboard: InlineKeyboards.setInlineKey,
          },
        }
      );
    } catch (err) {
      await ctx.telegram.sendMessage(chat_id, "Meet Hatolik");
      // console.log(err);
    }
  }
  // meet
  static async setMeet(ctx, chat_id) {
    try {
      const up = ctx.update.callback_query.message.message_id;
      await ctx.editMessageText("Quydagi linkni bosing ", {
        chat_id: chat_id,
        message_id: up,
        reply_markup: {
          resize_keyboard: true,
          one_time_keyboard: true,
          inline_keyboard: InlineKeyboards.setInlineMeet,
        },
      });
    } catch (err) {
      await ctx.telegram.sendMessage(chat_id, "Service Hatolik");
    }
  }
  // Qurilmalar ro'yxati
  static async Devices(ctx, chat_id) {
    try {
      const client = await CilientModel.findOne({ chatID: chat_id });
      const up = ctx.update.callback_query.message.message_id;
      await ctx.editMessageText(`Qurilmalar\n 1. Monoblock \n 2. Printer \n 3.Klaviatura \n 4.Sichqoncha`, {
        chat_id: chat_id,
        message_id: up,
        reply_markup: {
          resize_keyboard: true,
          one_time_keyboard: true,
          inline_keyboard: InlineKeyboards.setBack,
        },
      });
    } catch (err) {
      await ctx.telegram.sendMessage(chat_id, "Service Hatolik");
    }
  }
  // New functions setBackService
  static async setBackService(ctx, chat_id) {
    const up = ctx.update.callback_query.message.message_id;
    try {
      await ctx.editMessageText("Siz asosiy Menyudasiz", {
        chat_id: chat_id,
        message_id: up,
        reply_markup: {
          resize_keyboard: true,
          one_time_keyboard: true,
          inline_keyboard: InlineKeyboards.setMainInlineKey,
        },
      });
    } catch (err) {
      await ctx.telegram.sendMessage(chat_id, "Service Hatolik");
    }
  }
  // yangi buyritma yaratish setVerifyService
  static async setVerifyService(ctx, chat_id) {
    const up = ctx.update.callback_query.message.message_id;

    // console.log(chat_id);
    try {
      const user = await CilientModel.findOne({ chatID: chat_id });
      console.log(user);
      if (user) {
        const report = await ReportModel.findOne({
          chatID: chat_id,
          tasdiq: false,
        });
        console.log(report);
        if (report) {
          await ctx.editMessageText("Sizda tugallanmagan hizmatlar mavjud", {
            chat_id: chat_id,
            message_id: up,
            reply_markup: {
              resize_keyboard: true,
              one_time_keyboard: true,
              inline_keyboard: InlineKeyboards.setOldService,
            },
          });
        } else {
          // Report counter start
          const month = new Date().getMonth();
          const year = new Date().getFullYear();
          const countMonth = await ReportModel.find({
            tashkilot_id: user.tashkilot_id,
            date: {
              $gt: `${year}-${month*1+1}`,
              $lt: `${year}-${month * 1 + 2}`,
            },
          });
          // console.log(countMonth.length + "year");
          const countYear = await ReportModel.find({
            tashkilot_id: user.tashkilot_id,
            date: {
              $gt: `${year}-01`,
              $lt: `${year * 1 + 1}-12`,
            },
          });
          // console.log(countYear.length + "year");

          // Report counter start
          console.log(user);
          const category = await new ReportModel({
            userName: "",
            userFish: "",
            userlar: "",
            userLavozim: "",
            tasdiq: false,
            services: [],
            tashkilot_id: user.tashkilot_id,
            chatID: chat_id,
            cilientFish: user.fish,
            cilientBolim: user.bolim,
            cilientKabinet: user.xona,
            countYear: countYear.length + 1,
            countMonth: countMonth.length + 1,
            date: new Date(),
          });
          category.save(category);
          var opts = {
            type: "image/png",
            quality: 0.3,
            margin: 1,
            width: 200,
            // color: {
            //   dark: "#010599FF",
            //   light: "#FFBF60FF",
            // },
          };
          const qrCode = await QRCode.toFile(
            `./uploads/${category._id.toString()}.png`,
            category._id.toString(),
            opts
          );

          await ctx.telegram.sendPhoto(
            chat_id,
            {
              source: `./uploads/${category._id}.png`,
            },
            {
              caption: `Scaner qiling \n Topshiriq No_ ${countYear.length + 1}`,
            }
            // {
            //   reply_markup: {
            //     resize_keyboard: true,
            //     one_time_keyboard: true,
            //     inline_keyboard: InlineKeyboards.setInlineServiceTrue,
            //   },
            // }
          );
          await ctx.telegram.sendMessage(
            chanel_id,

            `<b>Farg'ona viloyat hokimligi</b>
            <b>Tartib raqami: #${countYear.length + 1}</b>
            <b>Ismi: ${user.fish}</b>
            <b>Bo'lim: ${user.bolim}</b>  
            <b>Lavozim: ${user.lavozim}</b>
            <b>Vaqti: ${new Date().toDateString()}</b>
            <b>Holati: #aktiv</b>`,
            { parse_mode: "HTML" }
          );
          fs.unlink(
            (__dirname, `./uploads/${category._id}.png`),
            function (err) {
              if (err) {
                console.error(err);
              }
            }
          );
        }
      }
    } catch (err) {
      await ctx.telegram.sendMessage(chat_id, "Verify Hatolik");
      console.log(err);
    }
  }
  // New functions setServiceTasdiq Tasdiqlangan service delete
  static async setServiceTasdiq(ctx, chat_id) {
    try {
      const up = ctx.update.callback_query.message.message_id;
      const callback_id = ctx.update.callback_query.id;
      console.log(callback_id);
      const user = await CilientModel.findOne({ chatID: chat_id });
      if (user) {
        const report = await ReportModel.findOne({
          chatID: chat_id,
          tasdiq: false,
        });
        // console.log(report.services.length);
        if (report.services.length <= 0) {
          await ctx.answerCbQuery(callback_id, {
            text: "Ushu hizmatni hozir tasdiqlay olmaysiz 🚫",
            show_alert: true,
          });
        } else {
          await ctx.answerCbQuery(callback_id, {
            text: "Dalolotnoma tuzildi 🤝🏻",
            show_alert: true,
          });
          await ctx.telegram.deleteMessage(chat_id, up);
          await ReportModel.findByIdAndUpdate(report._id, { tasdiq: true });
        }
      }

      // console.log(message);
    } catch (err) {
      await ctx.telegram.sendMessage(chat_id, "Service Hatolik");
      // console.log();
    }
  }
  // New functions setServiceTasdiq Tasdiqlangan service delete
  static async setOldService(ctx, chat_id) {
    try {
      const user = await BotUserModel.findOne({ chatID: chat_id });
      if (user) {
        // const client = await CilientModel.findOne({ phone: user.phone });
        const report = await ReportModel.findOne({
          chatID: chat_id,
          tasdiq: false,
        });
        var opts = {
          type: "image/png",
          quality: 0.3,
          margin: 1,
          width: 200,
          // color: {
          //   dark: "#010599FF",
          //   light: "#FFBF60FF",
          // },
        };
        await QRCode.toFile(
          `./uploads/${report._id.toString()}.png`,
          report._id.toString(),
          opts
        );

        await ctx.telegram.sendPhoto(
          chat_id,
          { source: `./uploads/${report._id}.png` },
          {
            caption: `Scaner qiling \n Topshiriq No_ ${report.countYear}`,
            reply_markup: {
              resize_keyboard: true,
              one_time_keyboard: true,
              inline_keyboard: InlineKeyboards.setInlineServiceTrue,
            },
          }
        );
        fs.unlink(
          (__dirname, `./uploads/${report._id}.png`),
          function (err) {
            if (err) {
              console.error(err);
            }
          }
        );
      }

      // console.log(message);
    } catch (err) {
      await ctx.telegram.sendMessage(chat_id, "Service Hatolik");
    }
  }
};
