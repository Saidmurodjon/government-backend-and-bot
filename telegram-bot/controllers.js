const BotUserModel = require("./users/BotUserModel");
const CilientModel = require("../cilients/cilient.model");
const keyboards = require("./keyboards/Keyboards");
const InlineKeyboards = require("./keyboards/InlineKeyboards");
const Functions = require("./Functions");
module.exports = class Controllers {
  static async MessageController(ctx) {
    const chat_id = ctx.message.chat.id;
    const text = ctx.message.text;
    const contact = ctx.message.contact;
    const first_name = ctx.message.from.first_name;
    console.log(contact);
    const user = await BotUserModel.findOne({ chatID: chat_id });
    if (text === "/start") {
      // const res = await axios.get("http://localhost:5000/service");

      if (!user) {
        await Functions.setUser(ctx);
      } else if (user.step === 1) {
        await ctx.telegram.sendMessage(
          chat_id,
          `Salom ${first_name} foydalanish uchun telefon raqamizni yuboring!`,
          {
            reply_markup: {
              resize_keyboard: true,
              one_time_keyboard: true,
              remove_keyboard: true,
              keyboard: keyboards.setKeyboard,
            },
          }
        );
      } else {
        await ctx.telegram.sendMessage(chat_id, `Salom ${first_name}`, {
          reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            inline_keyboard: InlineKeyboards.setMainInlineKey,
          },
        });
      }
    } else if (contact && user.step === 1) {
      const client = await CilientModel.findOne({ tel: contact.phone_number });

      console.log(client);
      if (
        client
        // client.tel == contact.phone_number ||
        // client.contact == +contact.phone_number
      ) {
        await Functions.setPhone(contact, ctx, chat_id, user, client);
      } else {
        // console.log(contact);
        await ctx.telegram.sendMessage(
          chat_id,
          "Siz botdan foydalana olmaysiz !"
        );
      }
    } else {
      await ctx.telegram.sendMessage(chat_id, "belgilanmagan buyruq!");
    }
  }
  static async InlineController(ctx) {
    const chat_id = ctx.update.callback_query.from.id;
    const user = await BotUserModel.findOne({ chatID: chat_id });
    const up = ctx.update.callback_query;

    // Serwice tekshiruvi boshlandi
    console.log(ctx);
    if (up.data === "service" && user.step === 2) {
      await Functions.setService(ctx, chat_id);
      // await ctx.telegram.deleteMessage(chat_id, message.message.message_id);
    } else if (up.data === "meet") {
      await Functions.setMeet(ctx, chat_id);
    }else if (up.data === "devices") {
      await Functions.Devices(ctx, chat_id);
    }
    // Serwice tekshiruvi tugadi
    //
    if (up.data === "ok") {
      await Functions.setVerifyService(ctx, chat_id);
    } else if (up.data === "no") {
      await Functions.setBackService(ctx, chat_id);
    }
    // service hizmatini tasdiqlash
    if (up.data === "tasdiq") {
      await Functions.setServiceTasdiq(ctx, chat_id);
    }
    if (up.data === "oldService") {
      await Functions.setBackService(ctx, chat_id);
      await Functions.setOldService(ctx, chat_id);
    }
  }
};
