# AC-MOT Q1 History v2 — Source Map

This file documents the scientific categories used by `acmot_q1_history_v2.html`.

## Safety

- Original `index.html`, `sameh_codex.html`, `styles.css`, `script.js`, `assets/data/results.js`, and all previous files remain unchanged.
- New work is isolated on branch `q1-history-v2-2026-09-14`.
- New numerical data is added through `assets/data/results_q1_history_v2.js`.

## Scientific categories

### Historical internal AC-MOT
Used only to explain development history.

- Baseline Default: MOTA 19.718, HOTA 28.418, IDF1 32.716, IDS 1238, FPS 44.181.
- Full AC-MOT: MOTA 22.999, HOTA 33.017, IDF1 40.021, IDS 994, FPS 37.686.
- TRK_MATCH_090: MOTA 22.953, HOTA 33.328, IDF1 40.656, IDS 946, FPS 38.028.

Label: **Historical custom protocol — not official VisDrone leaderboard.**

### V1 validation
- Trial 24: MOTA 23.0381, HOTA 36.1102, IDF1 40.7578, IDS 270, FPS 37.1686.
- Old A3 reference: MOTA 18.1647, HOTA 33.0640, IDF1 36.2962, IDS 271, FPS 42.0855.

### V2 validation
- Trial 22: MOTA 19.3303, HOTA 31.6514, IDF1 34.2261, IDS 168, FPS 51.4063.
- 49 completed trials.

### UAVDT historical cross-dataset evidence
- Baseline: MOTA 13.841, HOTA 24.085, IDF1 27.887, IDS 558, FP 22974, FPS 65.015.
- V1: MOTA 17.399, HOTA 28.390, IDF1 34.453, IDS 321, FP 22896, FPS 58.353.
- V2: MOTA 16.118, HOTA 26.930, IDF1 32.014, IDS 308, FP 18758, FPS 61.462.

### Latest U2MOT scientific truth
Primary evidence folder:

`AC-MOT-shared/FINAL_U2MOT_ACMOT_FREEZE_2026-09-14`

Pinned U2MOT commit:

`7411211d17cb893f5fcd6be39cd4e5f91cfe1586`

Checkpoint SHA256:

`8cb39ca273dbe620a8551a247b72865ad4f870225351d0937e306980c594c939`

#### Validation — 7 sequences / 2846 frames
Baseline:
- MOTA 75.127320
- IDF1 75.557816
- IDS 1947
- FP 8837
- FN 7091

Full AC-MOT:
- MOTA 75.473798
- IDF1 76.577452
- IDS 1908
- FP 7992
- FN 7726

Delta:
- MOTA +0.346478
- IDF1 +1.019636
- IDS -39
- FP -845
- FN +635

#### Matched runtime
- Fixed baseline: 3.707 FPS / 269.730 ms
- Full AC-MOT: 4.663 FPS / 214.477 ms
- Relative improvement: +25.76%

#### Final held-out test-dev — 17 sequences / 6635 frames
A0 reproduced U2MOT:
- MOTA 53.900
- IDF1 69.800
- IDS 1239
- FP 41385
- FN 63241

Frozen Full AC-MOT:
- MOTA 53.766786
- IDF1 69.849390
- IDS 1152
- FP 40155
- FN 64801

Delta:
- MOTA -0.133214
- IDF1 +0.049390
- IDS -87
- FP -1230
- FN +1560

Correct interpretation: **MOTA and IDF1 are approximately preserved; IDS and FP decrease; FN increases. Do not claim final MOTA superiority.**

#### Test-dev tier behavior
- Easy: 945 frames / 14.24%
- Medium: 1270 frames / 19.14%
- Hard: 4420 frames / 66.62%

## Final claim discipline

Defensible wording:

> AC-MOT is a scene-aware detector-side adaptive control layer that demonstrated transferability from a lightweight YOLOv8n + ByteTrack pipeline to a substantially different YOLOX-X + U2MOT framework. On the frozen U2MOT held-out test, it reduced identity switches and false positives while approximately preserving MOTA and IDF1, with an increase in false negatives.

Do not claim:
- improvement for every tracker;
- improvement in every metric;
- final U2MOT MOTA superiority;
- historical custom results as official leaderboard results;
- guaranteed Q1 acceptance.
