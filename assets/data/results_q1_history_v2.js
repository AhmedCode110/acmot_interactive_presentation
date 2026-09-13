/* AC-MOT Q1 history v2 — additive data only. Does not replace results.js. */
window.ACMOT = window.ACMOT || {};
window.ACMOT.u2motFinal = {
  prov: 'FINAL_U2MOT_ACMOT_FREEZE_2026-09-14 · held-out VisDrone test-dev · 17 sequences · 6,635 frames',
  commit: '7411211d17cb893f5fcd6be39cd4e5f91cfe1586',
  checkpointSha256: '8cb39ca273dbe620a8551a247b72865ad4f870225351d0937e306980c594c939',
  policySha256: '985491bbda4998cdda9bb1005387b52bd6bb837c9cc79109ddf35f8ac12cabc1',
  scriptSha256: '3d5a5c74c4200eefcd5b157f1efd922a811ab6838bcd36a9a2bfd7bf5078f6de',
  configSha256: 'f8fae620ce6c78ea26a8d972eb18150616ac38eaf3c0784f7f709ec70e9b875d',
  baseline: { mota: 53.900, idf1: 69.800, ids: 1239, fp: 41385, fn: 63241, precision: 80.1, recall: 72.4 },
  full: { mota: 53.766786, idf1: 69.849390, ids: 1152, fp: 40155, fn: 64801, precision: 80.399, recall: 71.765 },
  delta: { mota: -0.133214, idf1: 0.049390, ids: -87, fp: -1230, fn: 1560 },
  validation: {
    baseline: { mota: 75.127320, idf1: 75.557816, ids: 1947, fp: 8837, fn: 7091 },
    full: { mota: 75.473798, idf1: 76.577452, ids: 1908, fp: 7992, fn: 7726 },
    delta: { mota: 0.346478, idf1: 1.019636, ids: -39, fp: -845, fn: 635 }
  },
  matchedRuntime: { baselineFps: 3.707, acmotFps: 4.663, improvementPercent: 25.76, baselineMs: 269.730, acmotMs: 214.477 },
  testTier: { easy: 945, easyPct: 14.24, medium: 1270, mediumPct: 19.14, hard: 4420, hardPct: 66.62 },
  valTier: { easy: 1312, easyPct: 46.10, medium: 757, mediumPct: 26.60, hard: 777, hardPct: 27.30 },
  sci: {
    weights: { crowd: 0.12949277455301997, tiny: 0.22174766876599927, edge: 0.43371337893805056, night: 0.05355765312756694, blur: 0.16148852461536325 },
    window: 7, stride: 10,
    oldMid: 0.13534938199219218, oldHigh: 0.28728676236279177,
    mid: 0.5185453065646133, high: 0.5895547895440134,
    valDistribution: { min: 0.341547, q33: 0.518545, median: 0.548972, q67: 0.589555, max: 0.724556 }
  },
  actions: {
    easy: { conf: 0.15, nms: 0.70, width: 1280, height: 704 },
    medium: { conf: 0.12, nms: 0.65, width: 1440, height: 800 },
    hard: { conf: 0.09, nms: 0.60, width: 1600, height: 896 }
  },
  tracker: { high: 0.50, low: 0.10, match: 0.80, buffer: 15 }
};

/* Upgrade only the runtime data object used by the new HTML file. The original source file stays unchanged. */
if (window.ACMOT.u2mot) {
  window.ACMOT.u2mot.status = 'Final frozen evaluation complete';
  window.ACMOT.u2mot.mota = window.ACMOT.u2motFinal.baseline.mota;
  window.ACMOT.u2mot.idf1 = window.ACMOT.u2motFinal.baseline.idf1;
  window.ACMOT.u2mot.ids = window.ACMOT.u2motFinal.baseline.ids;
  window.ACMOT.u2mot.observedFps = 'Official A0 wall throughput ≈ 5.07 FPS; use matched-runtime comparison for algorithmic efficiency claims';
}
