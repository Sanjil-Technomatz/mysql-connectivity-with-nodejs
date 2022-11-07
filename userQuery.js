const sequelize = require("./app");
const Books = require("./schema");

const UserQuery = {
  insertUser: async (req, res) => {
    let userObj = {
      title: req.body.title,
      author: req.body.author,
      release_date: req.body.release_date,
      subject: req.body.subject,
    };
    Books.create(userObj)
      .then((r) => {
        return res.json(r);
      })
      .catch((e) => {
        return res.json({
          error: e.message,
        });
      });
  },
  showUser: async (req, res) => {
    const data = await Books.findAll();
    return res.json({
      users: data,
    });
  },
  delete: async (req, res) => {
    const a = await Books.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (a !== 0) {
      return res.json({
        message: "Users data deleted successfully",
      });
    } else {
      return res.json({
        message: "Wrong id no data deleted",
      });
    }
  },
  update: async (req, res) => {
    const data = await Books.update(
      {
        title: req.body.title,
        author: req.body.author,
        release_date: req.body.release_date,
        subject: req.body.subject,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (data[0] > 0) {
      return res.json({
        message: "data updated successfully",
      });
    } else {
      return res.json({
        message: "Nothing to update or wrong id passed",
      });
    }
  },
};
module.exports = UserQuery;
