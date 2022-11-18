/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => Repetition
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// util/util.ts
function getParametersFromSource(source) {
  const parameters = [];
  const regex = /(?<=\{)[^}]+(?=\})/g;
  let match;
  while (match = regex.exec(source)) {
    parameters.push(match[0]);
  }
  return parameters;
}

// main.ts
var DEFAULT_SETTINGS = {};
var Repetition = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    this.registerMarkdownCodeBlockProcessor("repetition", (source, el, ctx) => {
      console.log("source:", source);
      console.log("el:", el);
      console.log("ctx:", ctx);
      const parameters = getParametersFromSource(source);
      console.log("parameters:", parameters);
    });
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
};
