hljs.registerLanguage("back", (hljs) => ({
  name: "Backlang",
  keywords: {
    keyword:
      "inline this const global in continue return where type mut import module using as struct class interface let prop get set implement of for switch case break when if else match with while static operator private protected public internal abstract override func macro constructor destructor enum union bitfield default sizeof and or",
    built_in:
      "bool char string obj f16 f32 f64 u8 u16 u32 u64 i8 i16 i32 i64 none",
    literal: "false true",
  },
  contains: [
    hljs.COMMENT("//", "$"),
    hljs.COMMENT("/\\*", "\\*/"),
    hljs.QUOTE_STRING_MODE,
    hljs.C_NUMBER_MODE,
  ],
}));

hljs.initHighlightingOnLoad();
