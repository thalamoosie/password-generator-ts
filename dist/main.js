#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { generatePassword, } = require("./components/password-generator/passwordGen");
const inquirer = require("inquirer");
const gradient = require("gradient-string");
const chalk = require("chalk");
const figlet = require("figlet");
const introText = `M00seGen 1.0`;
const displayIntro = function () {
    figlet(introText, (err, data) => {
        if (err) {
            console.log("oops");
            return;
        }
        console.log(gradient.pastel.multiline(data));
        console.log(gradient.pastel(`Email / Password Generator / Positive Vibes`));
    });
};
generatePassword(10, true, true, true);
