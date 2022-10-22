hljs.registerLanguage("back", (hljs) => ({
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
}));
