"use strict";

require("make-promises-safe");
require("dotenv").config();

// Require Third-party Dependencies
const { get } = require("httpie");

// Require Internal Dependencies
const packages = require("./packages.json");

// CONSTANTS
const kTimeOut = 3_000;

// https://docs.npmjs.com/creating-and-viewing-authentication-tokens
// you can use a root .env file
const kTokenNpm = process.env.NPM_TOKEN;

async function fetchRegistryData(name) {
    try {
        const { data } = await get(`https://registry.npmjs.org/${name}`, {
            headers: {
                Authorization: `Basic ${Buffer.from(kTokenNpm).toString("base64")}`
            },
            timeout: kTimeOut
        });

        return data;
    }
    finally {
        ref.done++;
    }
}

const ref = { done: 0 };
const timer = setInterval(() => console.log(`one sec interval, done: ${ref.done}`), 1000);
console.log(`Start with ${packages.length} packages to fetch!`);
Promise.allSettled(packages.map((name) => fetchRegistryData(name, ref)))
    .then(() => {
        clearInterval(timer);
        console.log("done!");
    })
    .catch(console.error);
