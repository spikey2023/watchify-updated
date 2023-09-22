const PORT = process.env.PORT || 3000;
const app = require("./app");
require("dotenv").config();

const init = async () => {
  try {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
