import { publish } from "gh-pages";

publish(
  "build", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/jatinhemnani01/json2TsTypes.git",
    user: {
      name: "Jatin Hemnani",
      email: "jatinhemnani01.com",
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);
