const messages = [];
let id = 0;
module.exports = {
  create(req, res) {
    const { text, time } = req.body;
    if (text && time) {
      const message = {
        id,
        time,
        text
      };
      id++;
      messages.push(message);
      return res.status(200).json(messages);
    }
    return res.status(500).json('No Dice.');
  },
  read(req, res) {
    return res.status(200).json(messages);
  },
  update(req, res) {
    if (req.body.text && req.params.id) {
      messages.forEach((c, i, a) => {
        if (c.id == req.params.id) {
          c.text = req.body.text;
        }
      });
      return res.status(200).json(messages);
    }
    return req.status(500).json('No Dice');
  },
  remove(req, res) {
    if (req.params.id) {
      for (var i = 0; i < messages.length; i++) {
        if (messages[i].id == req.params.id) {
          messages.splice(i, 1);
        }
      }
      return res.status(200).json(messages);
    }
    return res.status(500).json('No Dice');
  }
};
