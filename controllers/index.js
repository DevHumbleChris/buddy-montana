const client = require("twilio")(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN
);
const bot = require("../utils/bot");
const { trigger } = require("../utils/trigger");
const { reply } = require("../utils/reply");

module.exports = {
  hello: async (req, res) => {
    try {
      await client.messages
        .create({
          body: req.body.message,
          from: "whatsapp:+14155238886",
          to: "whatsapp:+254768879348",
        })
        .then((message) => {
          res.json({
            message,
          });
        })
        .done();
      res.json({
        message: "Hello",
      });
    } catch (error) {
      res.status(400).json({
        code: 400,
        message: error.message,
      });
    }
  },
  reply: async (req, res) => {
    try {
      const response = await bot(trigger, reply, req.body.Body)
      response && await client.messages
      .create({
        body: response,
        from: "whatsapp:+14155238886",
        to: "whatsapp:+254768879348",
      })
      .then((message) => {
        res.json({
          message,
        });
      })
      .done();
    } catch (error) {
      console.log(error.message);
      res.status(400).json({
        code: 400,
        message: error.message,
      });
    }
  },
  callback: async (req, res) => {
    try {
    } catch (error) {
      console.log(error.message);
      res.status(400).json({
        code: 400,
        message: error.message,
      });
    }
  },
};
