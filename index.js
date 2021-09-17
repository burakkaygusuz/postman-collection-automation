const newman = require("newman");
const collection = require("./collections/postman_collection.json");

newman.run(
  {
    collection: collection,
    reporters: ["cli", "html"],
    insecure: false,
    color: "on",
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("Postman collection run complete!");
  }
);
