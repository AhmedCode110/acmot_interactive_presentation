/* =====================================================================
   AC-MOT presentation — SINGLE SOURCE OF TRUTH for every number shown.
   Edit a value here and every chart and bound number updates.
   Each block names its provenance; the label is printed on the slide.
   Sources are listed in README.md ("Where the results come from").
   ===================================================================== */
window.ACMOT = {

  /* Early exploratory detector timing. Values as recorded by the author;
     the raw timing log is NOT archived in the frozen evidence. */
  detectorTiming: {
    prov: 'Early exploratory measurement · raw log not archived',
    rows: [
      ['YOLOv10n', 28.85], ['YOLOv8n', 29.22], ['YOLOv10s', 31.01], ['YOLOv8s', 31.10],
      ['YOLOv10m', 40.90], ['YOLOv8m', 49.75], ['YOLOv8l', 61.46], ['YOLOv9c', 78.62],
      ['YOLOv8x', 79.36], ['YOLOv9e', 122.84]
    ]
  },

  /* Published model-card values (Ultralytics YOLOv8n, COCO val mAP50-95). */
  yolov8nPublished: { mAP: 37.3, paramsM: 3.2 },

  /* Development ablation — legacy v10 evaluator, 17 test-dev sequences.
     Source: acmot_full17_recorded_20260905_170655_summary.csv.
     HOTA here is a legacy proxy (HOTA*), NOT TrackEval HOTA. */
  devAblation: {
    prov: 'Development ablation · legacy v10 evaluator · not comparable with TrackEval results',
    rows: [
      { id: 'A0', name: 'Default baseline',       mota: 35.85, idf1: 47.37, hota: 58.18, recall: 37.34, ids: 2508, fps: 30.81 },
      { id: 'A1', name: '+ Tuned ByteTrack',      mota: 38.50, idf1: 51.18, hota: 60.55, recall: 39.82, ids: 2148, fps: 30.14 },
      { id: 'A2', name: '+ Adaptive conf / NMS',  mota: 40.95, idf1: 52.97, hota: 62.49, recall: 42.39, ids: 2136, fps: 29.84 },
      { id: 'A3', name: '+ Adaptive resolution',  mota: 47.37, idf1: 57.40, hota: 67.44, recall: 49.28, ids: 2695, fps: 28.86 },
      { id: 'A4', name: '+ Deep ReID',            mota: 47.35, idf1: 57.47, hota: 67.41, recall: 49.28, ids: 2737, fps: 28.98 }
    ]
  },

  /* Original AC-MOT final live run — historical custom protocol.
     Source: repo OFFICIAL_RESULTS (config/metrics.py, demo @ 9e3cdc18);
     TRK_MATCH_090 from VERIFICATION_REPORT.md / README_OLD_ACMOT_HISTORY.md. */
  historical: {
    prov: 'Historical custom protocol · live FP16 · YOLOv8n · Tesla T4 · 17 test-dev sequences',
    baseline: { name: 'Baseline_Default', mota: 19.718, hota: 28.418, idf1: 32.716, ids: 1238, fps: 44.181 },
    full:     { name: 'Full AC-MOT',      mota: 22.999, hota: 33.017, idf1: 40.021, ids: 994,  fps: 37.686 },
    match090: { name: 'TRK_MATCH_090',    mota: 22.953, hota: 33.328, idf1: 40.656, ids: 946,  fps: 38.028 }
  },

  /* Original (hand-set) SCI and Smart Calibrator. */
  original: {
    weights: { crowd: 0.30, tiny: 0.30, edge: 0.20, night: 0.10, blur: 0.05 },
    calibrator: { conf0: 0.245, confSlope: 0.050, confMin: 0.19, confMax: 0.28,
                  iou0: 0.490, iouSlope: 0.050, iouMin: 0.40, iouMax: 0.52,
                  sizes: [640, 736, 832], sciMid: 0.35, sciHigh: 0.60 }
  },

  /* V1 — defensible joint Optuna study, VALIDATION (VisDrone2019-MOT-val, 7 seq).
     Source: FROZEN_DEFENSIBLE_ACMOT_CONFIG.json / final freeze doc §7. */
  v1: {
    prov: 'Validation result · VisDrone2019-MOT-val · 7 sequences · custom class-agnostic protocol',
    trial: 24, budget: 50,
    val: { mota: 23.0381, hota: 36.1102, idf1: 40.7578, ids: 270, fps: 37.1686 },
    oldA3val: { mota: 18.165, hota: 33.064, idf1: 36.296, ids: 271, fps: 42.085 },
    weights: { crowd: 0.1294928, tiny: 0.2217477, edge: 0.4337134, night: 0.0535577, blur: 0.1614885 },
    params: { conf_easy: 0.30, conf_hard: 0.40, nms_easy: 0.35, nms_hard: 0.35,
              threshold_mid: 0.13535, threshold_high: 0.28729 }
  },

  /* V2 — two-objective Pareto study (max MOTA, min IDS, FPS >= 25), VALIDATION.
     Planned 50 trials; exactly 49 COMPLETE. Source: final freeze doc §10-12. */
  v2: {
    prov: 'Validation result · V2 Pareto study · 49 completed trials · custom class-agnostic protocol',
    planned: 50, completed: 49, trial: 22,
    /* [trial, MOTA %, IDS] — notable Pareto points listed in the freeze doc */
    pareto: [
      [16, 22.83317, 308], [17, 22.80793, 294], [20, 22.75002, 289], [5, 22.68320, 284],
      [4, 22.60450, 262], [26, 22.09667, 233], [42, 20.66078, 219], [34, 19.84706, 214],
      [22, 19.33031, 168], [10, 18.65914, 160], [3, 17.48756, 148], [43, 15.75470, 142],
      [32, 15.71906, 136], [45, 15.11619, 135], [28, 15.07759, 117], [44, 11.78707, 115],
      [8, 11.53612, 114]
    ],
    val: { mota: 19.3303, hota: 31.6514, idf1: 34.2261, ids: 168, fps: 51.4063, fn: 49301, fp: 4858 },
    weights: { crowd: 0.1646453, tiny: 0.1746265, edge: 0.5076113, night: 0.1206956, blur: 0.0324213 },
    params: { conf_easy: 0.40, conf_hard: 0.40, nms_easy: 0.60, nms_hard: 0.35,
              threshold_mid: 0.29271, threshold_high: 0.66617 }
  },

  /* Held-out VisDrone2019-MOT test-dev (17 seq), custom class-agnostic TrackEval.
     Baseline / Old / V1 from FINAL_TEST_RESULTS_3WORKER.json; V2 from
     V2_TRIAL22_TESTDEV_RESULT.json (post-selection). Freeze doc §8, §13, §14. */
  testdev: {
    prov: 'Held-out test-dev result · 17 sequences · custom class-agnostic AC-MOT TrackEval protocol',
    rows: [
      { id: 'base', name: 'Baseline',    mota: 19.729, hota: 28.430, idf1: 32.724, ids: 1235, fn: 155051, fp: 16308, fps: 36.528 },
      { id: 'old',  name: 'Old AC-MOT',  mota: 23.236, hota: 32.698, idf1: 39.516, ids: 1061, fn: 138967, fp: 25025, fps: 41.957 },
      { id: 'v1',   name: 'V1 Trial 24', mota: 26.948, hota: 33.835, idf1: 41.546, ids: 1184, fn: 136858, fp: 19029, fps: 38.985 },
      { id: 'v2',   name: 'V2 Trial 22', mota: 23.792, hota: 31.218, idf1: 37.870, ids: 919,  fn: 149307, fp: 13632, fps: 46.024 }
    ],
    /* 5000 paired per-sequence bootstrap resamples, seed 42: [estimate, lo95, hi95] */
    bootstrap: {
      v1_vs_base: { mota: [7.22, 5.44, 9.29], hota: [5.41, 4.13, 6.90], idf1: [8.82, 6.90, 11.05], idsRed: [51, -114, 219] },
      v2_vs_base: { mota: [4.06, 0.95, 6.89], hota: [2.79, 0.75, 4.66], idf1: [5.15, 2.03, 8.08], idsRed: [316, 175, 470] },
      v2_vs_v1:   { mota: [-3.16, -6.15, -1.35], hota: [-2.62, -4.00, -1.69], idf1: [-3.68, -5.88, -2.24], idsRed: [265, 82, 502] },
      v1_vs_old:  { mota: [3.71, 2.39, 5.19], idsRed: [-123, -244, -14] }
    }
  },

  /* UAVDT external generalization — zero tuning, frozen systems. Freeze doc §15-19. */
  uavdt: {
    prov: 'External test · UAVDT · 20 sequences / 16,592 frames · zero tuning · frozen systems',
    sequences: 20, frames: 16592,
    rows: [
      { id: 'base', name: 'Baseline',    mota: 13.841, hota: 24.085, idf1: 27.887, ids: 558, fn: 270189, fp: 22974, fps: 65.015 },
      { id: 'v1',   name: 'V1 Trial 24', mota: 17.399, hota: 28.390, idf1: 34.453, ids: 321, fn: 258376, fp: 22896, fps: 58.353 },
      { id: 'v2',   name: 'V2 Trial 22', mota: 16.118, hota: 26.930, idf1: 32.014, ids: 308, fn: 266894, fp: 18758, fps: 61.462 }
    ],
    bootstrap: {
      v1_vs_base: { mota: [3.56, 1.45, 5.81], hota: [4.31, 2.74, 5.71], idf1: [6.57, 3.81, 8.82], idsRed: [237, 104, 377] },
      v2_vs_base: { mota: [2.28, 0.72, 4.16], hota: [2.85, 1.24, 4.35], idf1: [4.13, 1.63, 6.49], idsRed: [250, 110, 404] },
      v2_vs_v1:   { mota: [-1.28, -2.44, -0.20], hota: [-1.46, -2.19, -0.91], idf1: [-2.44, -3.74, -1.37], idsRed: [13, -20, 50], fpRed: [4138, 2335, 6295] }
    }
  },

  /* U2MOT cross-pipeline experiment — reproduction setup as recorded by the author.
     NOT yet part of the frozen AC-MOT evidence. Metrics are pending. */
  u2mot: {
    prov: 'Reproduced U2MOT · setup as recorded by the author · evaluation in progress',
    status: 'Reproduced metrics pending official evaluation',
    mota: null, idf1: null, ids: null, hota: null,
    observedFps: '≈ 5–6 FPS (preliminary observation)',
    setup: [
      ['Repository commit', '7411211d17cb893f5fcd6be39cd4e5f91cfe1586'],
      ['Checkpoint', 'visdrone.pth.tar'],
      ['Checkpoint SHA256', '8cb39ca273dbe620a8551a247b72865ad4f870225351d0937e306980c594c939'],
      ['Dataset', 'VisDrone2019-MOT-test-dev · 17 sequences · 6,635 frames'],
      ['CMC files', '17'],
      ['GPU', 'NVIDIA Tesla T4'],
      ['PyTorch / NumPy', '2.11.0 + CUDA 12.8 / 2.1.3'],
      ['Detector input', '1600 × 896'],
      ['NMS / effective confidence', '0.7 / 0.09'],
      ['Track high / low / match / buffer', '0.5 / 0.1 / 0.8 / 15'],
      ['FP16 · Conv+BN fusion', 'enabled · enabled'],
      ['AC-MOT', 'OFF (baseline reproduction)']
    ]
  }
};
