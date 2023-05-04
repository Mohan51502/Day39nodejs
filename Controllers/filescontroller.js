const FilesRouter = require("express").Router();
const filesystem = require("fs");
const path = require("path");
const { getFileName } = require("../utils/calander");
/**
 * GET, POST, PUT, DELETE, PATCH
 */

/**
 * GET_ALL_COUNTRIES route will fetch all the countries details from 'countries' collections
 */
FilesRouter.post("/createFileSynchronusly", function (req, res, next) {
  const { message } = req.body;
  //const dirname = path.resolve(path.join(__dirname,))
  const path = `./fileSystem/${getFileName(new Date())}`;
  console.log(getFileName(new Date()));
  try {
    filesystem.writeFileSync(path, message || "New File");
    return res.status(200).json({
      message: "File created successfully!!!",
    });
  } catch (error) {
    return res.status(501).json({
      message: "Error creating file!!!",
    });
  }
});

/**
 * GET_ALL_COUNTRIES route will fetch all the countries details from 'countries' collections
 */
FilesRouter.post("/createFile/:name", function (req, res, next) {
  const { message } = req.body;
  const path = `./fileSystem/${getFileName(new Date())}`;
  filesystem.writeFile(path, message || "New File", function (err) {
    if (err) {
      return res.status(501).json({
        message: "Error creating file!!!",
      });
    } else {
      return res.status(200).json({
        message: "File created successfully!!!",
        response: "dasdsa",
      });
    }
  });
});

module.exports = FilesRouter;