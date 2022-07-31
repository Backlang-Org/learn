import * as path from "node:path";
import * as fs from "node:fs";
import { marked } from "marked";
import pkg from "prismjs";
import ebnf from "prismjs/components/prism-ebnf.js";
import bash from "prismjs/components/prism-bash.js";
const { highlight, languages } = pkg;

const otherUsedLanguages = [ebnf, bash];

var markdownFiles;
var renderedHtml;

console.log("[1/3]  🗃️   Fetching all Markdown Files in 'content'..");

GetAllMarkdownFiles();

console.log("[2/3]  🎨  Rendering Markdown Files..");

RenderMarkdownFiles();

console.log("[3/3]  📖  Export HTML in 'dist'..");

ExportRenderedHtml();

/* STEP 1 */

function GetAllMarkdownFiles() {
  function getFilesFromDir(dir, fileTypes) {
    var filesToReturn = new Map();
    function walkDir(currentPath) {
      var files = fs.readdirSync(currentPath);
      for (var i in files) {
        var curFile = path.join(currentPath, files[i]);
        if (
          fs.statSync(curFile).isFile() &&
          fileTypes.indexOf(path.extname(curFile)) != -1
        ) {
          filesToReturn.set(
            curFile.replace(dir, ""),
            fs.readFileSync(curFile, "utf8").toString()
          );
        } else if (fs.statSync(curFile).isDirectory()) {
          walkDir(curFile);
        }
      }
    }
    walkDir(dir);
    return filesToReturn;
  }

  markdownFiles = getFilesFromDir("./content", [".md"]);
}

/* STEP 2 */

function RenderMarkdownFiles() {
  var autoloader = Prism.plugins.autoloader;
  if (autoloader) {
    autoloader.loadLanguages("ebnf");
  }

  languages["back"] = {
    comment: {
      pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: true,
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: true,
      greedy: true,
    },
    boolean: /\b(?:false|true)\b/,
    annotation: {
      pattern: /@\w*(\([^)]*\))?/,
      lookbehind: true,
      alias: "punctuation",
    },
    keyword: [
      /\b(?:inline|this|const|global|in|continue|return|where|type|mut|import|module|using|as|struct|class|interface|let|prop|get|set|implement|of|for|switch|case|break|when|if|else|match|with|while|static|operator|private|protected|public|internal|abstract|override|func|macro|constructor|destructor|enum|union|bitfield|default|sizeof|and|or)\b/,
      /\b(?:bool|char|string|obj|f(?:16|32|64)|[ui](?:8|16|32|64)|none)\b/,
    ],
  };

  marked.setOptions({
    highlight: (code, lang) => {
      if (languages[lang]) {
        return highlight(code, languages[lang], lang);
      } else {
        return code;
      }
    },
  });

  var rendered = new Map();
  for (var [name, value] of markdownFiles.entries()) {
    rendered.set(name, marked.parse(value));
  }

  renderedHtml = rendered;
}

/* STEP 3 */

function ExportRenderedHtml() {
  for (var [name, value] of renderedHtml.entries()) {
    let newPathName = "dist" + name.slice("content".length);
    let newPath = path.join(
      process.cwd(),
      newPathName.substring(
        0,
        newPathName.length - path.extname(newPathName).length
      ) + ".html"
    );
    let dir = path.dirname(newPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(
      newPath,
      value,
      {
        encoding: "utf8",
        flag: "w+",
      },
      function (err) {
        if (err) return console.error(err);
        console.log(`Finished exporting '${newPath}'`);
      }
    );
  }
}
