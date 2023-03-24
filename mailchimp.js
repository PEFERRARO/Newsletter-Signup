const express = require("express");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const app = express();

mailchimp.setConfig({
    apiKey: "0fe96d183adf8ba1a52508c50617370b-us13",
    server: "us13",
});

async function run() {
    const response = await mailchimp.ping.get();
    console.log(response);
}

run();
app.listen(3000, function () {
    console.log('server is running at 3000');
});