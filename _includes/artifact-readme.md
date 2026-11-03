# CAV 2027 Artifact: [PAPER TITLE]

## Requirements

- RAM: [FILL IN]
- CPU cores: [FILL IN]
- Internet: [NO / YES, and what for]
- Time: [smoke test], [full review]

## What this artifact reproduces

| Paper element    | Status         | Step                                  |
|------------------|----------------|---------------------------------------|
| Table 1          | Reproduced     | 1                                     |
| Figures 1–3      | Reproduced     | 2, 3                                  |
| Figure 4         | Reproduced     | 4 (needs internet)                    |
| Theorem 5        | Reproduced     | 5                                     |
| Figure 5         | Optional       | 6 (needs AcmeVerifier license)        |
| Table 2          | Not reproduced | Proprietary models; our raw output is in `ref_output_full/table2.csv` |

Absolute runtimes depend on hardware; the trends should match the paper.

## Installation and smoke test

```sh
cd artifact/
./install.sh
./run-smoke.sh results/output-smoke.csv    # ~10 minutes
cd results/
./generate_table1.sh output-smoke.csv
./generate_fig1.sh output-smoke.csv
./generate_figs2_3.sh output-smoke.csv
rocqc thm5_proof_short.v
```

All commands should succeed, and `rocqc` should exit with code 0.
Reference output is in `ref_output_smoke/`.
If something fails, please include the relevant part of `smoke.log` in your review.

## Reproducing the results

Run the full suite (~1 week) or a representative subset (~4 hours):

```sh
./run_full.sh results/output.csv
./run_short.sh results/output.csv
```

Then, from `results/`:

1. `./generate_table1.sh output.csv` prints Table 1.
2. `./generate_fig1.sh output.csv` writes Figure 1 to `fig1.svg`.
3. `./generate_figs2_3.sh output.csv` writes Figures 2 and 3 to `fig2.png` and `fig3.pdf`.
4. `./generate_fig4.sh survey/data.xml` writes Figure 4 to `fig4.svg` (contacts Acme Inc.).
5. `rocqc thm5_proof.v` verifies Theorem 5 (exit code 0).
6. Optional, with AcmeVerifier installed (~1 hour):
   ```sh
   export ACME_VER_PATH=<path to binary> ACME_VER_LICENSE_KEY=<key>
   ./run_acme.sh output_acme.csv && ./generate_fig5.sh output_acme.csv
   ```
   writes Figure 5 to `fig5.gif`.

Reference output is in `ref_output_full/`.
