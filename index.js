const newman = require("newman");
const collection = require("./collections/postman_collection.json");

newman.run(
  {
    collection: collection,
    reporters: ["cli"],
    insecure: false,
    color: "on",
  },
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Postman collection run complete!");
  }
);
