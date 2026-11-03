---
layout: page
title: Artifact Evaluation
permalink: /artifacts/
topic: authors
share-description: Artifact evaluation information and deadlines for CAV 2027.
cover-img: "/assets/img/hero/wooden-clogs.jpg"
---

CAV allows authors to submit paper artifacts to strengthen confidence in the validity of the claims in the papers, in the reproducibility of the obtained results, and in the usability of the developed tools by other researchers.

New in CAV 2027: artifact submission is **mandatory for tool papers**, where the artifact needs to receive at least the *Functional* badge.
Artifact submission is strongly encouraged for papers of all the other categories; for those papers, the results of artifact evaluation do not affect paper decisions.

Consequently, CAV 2027 has **two consecutive artifact evaluation rounds**:

- **Round 1 — Tool paper artifacts.**
  Artifacts for tool papers are reviewed in parallel with the paper reviews so that the final acceptance decision for a tool paper can take the artifact evaluation into account.
- **Round 2 — Non-Tool paper artifacts.**
  Artifacts for accepted papers of all other categories are submitted after the paper notification and reviewed in a separate round.

During submission of a paper, authors will be asked whether they plan to submit an artifact.

## Important Dates

Registration and submission deadlines are at 23:59 AoE (Anywhere on Earth).
See the [Call for Papers]({{ "/cfp/" | relative_url }}) for the full paper timeline.

### Artifact Evaluation Round 1: Tool Paper Artifacts

<table>
  <tbody>
    <tr>
      <td>Artifact registration</td>
      <td>{% include deadline-date.html utc="2027-03-09T11:59:00Z" label="Monday, 8 March 2027, 23:59 AoE" %}</td>
    </tr>
    <tr>
      <td>Artifact submission</td>
      <td>{% include deadline-date.html utc="2027-03-12T11:59:00Z" label="Thursday, 11 March 2027, 23:59 AoE" %}</td>
    </tr>
    <tr>
      <td>Smoke test response period</td>
      <td>Monday, 22 March 2027 &ndash; Thursday, 25 March 2027</td>
    </tr>
    <tr>
      <td>Artifact and paper notification</td>
      <td>Friday, 23 April 2027</td>
    </tr>
  </tbody>
</table>

### Artifact Evaluation Round 2: Non-Tool Paper Artifacts

<table>
  <tbody>
    <tr>
      <td>Artifact registration</td>
      <td>{% include deadline-date.html utc="2027-04-27T11:59:00Z" label="Monday, 26 April 2027, 23:59 AoE" %}</td>
    </tr>
    <tr>
      <td>Artifact submission</td>
      <td>{% include deadline-date.html utc="2027-05-04T11:59:00Z" label="Monday, 3 May 2027, 23:59 AoE" %}</td>
    </tr>
    <tr>
      <td>Smoke test response period</td>
      <td>Tuesday, 11 May 2027 &ndash; Friday, 14 May 2027</td>
    </tr>
    <tr>
      <td>Artifact notification</td>
      <td>Friday, 28 May 2027</td>
    </tr>
  </tbody>
</table>

For each artifact-evaluation round, artifact bidding starts at the registration deadline and ends at the submission deadline.

## Submission Site

Artifacts will be submitted via HotCRP.
The submission link will be added here once available.

## Setup

CAV 2027 artifact evaluation will be single-blind.

We will be awarding three types of badges, aligned with [ACM artifact criteria](https://www.acm.org/publications/policies/artifact-review-and-badging-current):

- **Available**: available on a publicly accessible archival repository with a DOI
- **Functional**: documented, consistent, complete, exercisable
- **Reusable**: artifacts are of a quality that significantly exceeds *Functional*; see below for details

For tool papers, the associated artifact must receive at least the *Functional* badge.

## Obligatory Reviewer Nomination

Every artifact submission, i.e., for tool papers as well as for regular papers, is required to **nominate one distinct reviewer**, who is preferably a co-author and will support the AEC of the corresponding round.
The expected reviewing load is approximately **three artifacts** per reviewer.

Please make sure that the person you nominate is aware of the nomination, has the expertise to review artifacts in the scope of CAV, and is available during the review period of the respective round.
The same person cannot be nominated by two artifact submissions of the same round.
The nominee does not need to be a paper author and might already be a member of the artifact evaluation committee (AEC).

## Use of LLMs

Upon submission, artifact authors are asked whether they consent to reviewers using a large language model (LLM) for the *smoke test*, i.e., for the purpose of "making the artifact work".
Giving this consent is optional and has no influence on the outcome of the evaluation.
Apart from this, LLMs are not used in the artifact evaluation.

## Process

Each artifact evaluation round consists of two phases: the **smoke test** phase and the **full review** phase.

In the **smoke test** phase, reviewers will download artifacts, read the artifact instructions, set up the artifacts on their machines, and attempt to run provided smoke tests.
At this stage, they will not yet verify any claims from the paper.
Any technical difficulties (e.g., the image does not start up, experiment script crashes) will be documented in a smoke test review.
During the smoke test response period, authors may revise the artifact solely to resolve technical issues.

In the **full review** phase, reviewers will evaluate artifacts according to the evaluation criteria with respect to the claims in the papers and decide on the badge(s) awarded to each submission.

Unless the artifact is provided publicly (e.g., on Zenodo, figshare, Dryad), it is considered confidential to the CAV 2027 Artifact Evaluation.
Reviewers are asked to use the artifact only as permitted by the included license.

## Submission Guidelines

A final artifact submission consists of the following items (these are to be provided on the submission page):

- **ID and Title** of the CAV'27 paper submission.
- **Abstract** of the paper and a brief **Description** (1-2 sentences) of the artifact.
- **PDF** of the submitted paper.
  Can be a single blind or a double blind version.
  Artifact evaluation is single blind.
- **URL** at which the artifact package `.zip` file can be downloaded; if you are applying for the *Available* badge, this should be a DOI link.
  To preserve reviewer anonymity, you will be asked to confirm that the authors of the paper cannot track users accessing the URL.
- **SHA256 checksum** of the `.zip` artifact package; on the most popular operating systems, this can be obtained, e.g., by the following commands:
  - Linux: `sha256sum <file>`
  - Windows: `CertUtil -hashfile <file> SHA256`
  - macOS: `shasum -a 256 <file>`
- **Type of Artifact**:
  - Virtual machine image, Docker image, or Package for use with the official VM.
  - Architecture for which the artifact is intended: x86_64, arm64, or both.
  - If your artifact does not fit in these categories, please contact the AE chairs as soon as possible.
- **Requirements**: Please indicate whether your artifact
    - requires external connectivity,
    - uses restrictively licensed software that reviewers might not be able to obtain and run on their own, or
    - assumes specialized hardware that reviewers might not have access to.

    Explain why these requirements exist and suggest possible workarounds where applicable.
- **Requested Badges**: Badges that you are applying for.
- **Nominated Reviewer**: Name, affiliation, and e-mail address of the reviewer you nominate (see [Reviewer Nomination](#obligatory-reviewer-nomination) above).
- **LLM Consent**: Whether you consent to reviewers using LLMs during the smoke test of your artifact (see [Use of LLMs](#use-of-llms) above).

## Packaging Guidelines

Your artifact `.zip` file must contain the following elements:

- A **README** file with at least the following contents:
  - Requirements on the host system (amount of memory, cores, internet connectivity).
  - Detailed instructions for installing the artifact and running the smoke test.
  - Detailed instructions for reproducing the results of the paper.
  - A description of which parts (tables, figures, experimental results) of the paper are reproduced by the artifact, and which are not.

  An [example README template]({{ "/artifacts/readme/" | relative_url }}) for a Functional badge is available to preview, copy, or download.
  For the Reusable badge, more is needed, as described below.
- A **LICENSE** file that at least allows running and examining the artifact within the CAV 2027 Artifact Evaluation.
- The **Artifact contents** in one of the three formats:
  - A **Docker image** — Usually a `.tar` or `.tar.gz` file; not just a `Dockerfile`.
    Consider building a [multi-platform image](https://docs.docker.com/build/building/multi-platform/#build-multi-platform-images) that works for both x86_64 and arm64.
  - A **virtual machine (VM) image** — An `.ova` file that works with the version of [VirtualBox](https://www.virtualbox.org) that is current at the submission deadline.
  - A **package** to be installed in a standard VM image with a DOI, such as the CAV 2027 Artifact Evaluation VM (**TBA**) (in that case, the contents can be directly in the artifact `.zip` file).
    The DOI of the VM image should then be in the README file.

If you are not able to prepare the artifact as above, please contact the AE chairs early for an alternative arrangement.
An example of such a situation is when you cannot provide a VM or Docker image that contains licensed software (e.g., MATLAB) or similar.

Examples of the structure of a `.zip` file with an artifact:

**Docker image**

```
 artifact
 ├── image.tar.gz
 ├── LICENSE.txt
 └── README.md
```

**VM image**

```
 artifact
 ├── image.ova
 ├── LICENSE.txt
 └── README.md
```

**Package for the standard VM image**

```
 artifact
 ├── deb-packages
 │   ├── autoconf_2.72-3ubuntu1_all.deb
 │   ├ ...
 │   └── openmpi-common_5.0.7-1_all.deb
 ├── install.sh
 ├── LICENSE.txt
 ├── pip-packages
 │   ├── asttokens-3.0.0-py3-none-any.whl
 │   ├ ...
 │   └── wcwidth-0.2.14-py2.py3-none-any.whl
 ├── README.md
 ├── run-all.sh
 ├── run-smoke.sh
 └── tool
     ├── CMakeLists.txt
     ├ ...
     └── README.md
```

In the above example, one would use the standard VM image, start the VM, make the artifact files available inside it, run `install.sh` to set things up, and finally use `run-smoke.sh` and `run-all.sh` to run the tests.

## Evaluation Criteria

Reviewers will read the paper and run the artifact to evaluate how well the artifact supports the claims and results of the paper.
The criteria for awarding badges follow the [ACM artifact criteria](https://www.acm.org/publications/policies/artifact-review-and-badging-current) (if you are not familiar with them, please read them carefully before you proceed) with several refinements:

### Available badge

To be *Available*, an artifact needs to satisfy the following requirements:

- Has a DOI that points at a public, open repository.
- Includes a license that at minimum allows anyone to use the artifact to reproduce the results of the paper.

### Functional badge

To be *Functional*, the *documented*, *consistent*, *complete*, and *exercisable* criteria from [ACM artifact criteria](https://www.acm.org/publications/policies/artifact-review-and-badging-current) must be met with the following clarification:

- **Completeness**: in some cases, having an artifact that reproduces all results in a paper is challenged by the need to use:
  * proprietary software whose license does not allow it to be distributed with the artifact, e.g. MATLAB, Microsoft Office, Wolfram Mathematica, or commercial verification tools;
  * non-standard hardware, e.g., FPGAs, GPUs, neuromorphic processors, quantum computers;
  * external services, e.g., LLMs, running computation in the cloud, libraries accessing certain URLs;
  * use cases that cannot be shared with the public, e.g., they are a trade secret or are subject to responsible disclosure at the time of submitting the artifact.

  In these cases, special care needs to be taken when preparing the artifact.
  Possible directions include:
  - replacing proprietary software with a free equivalent, with an option to switch to non-free software (for evaluators with access),
  - using proxies for external services, such as a cache of replies for prompts to LLMs, or
  - omitting inclusion of problematic use cases in the artifact.

Despite the best intentions on both sides, the effect of the changes may still be too large and the results obtained during the artifact evaluation may, in turn, no longer be consistent with the trends in the paper, in which case the *Functional* badge cannot be awarded.
Please contact the AE chairs if you have questions.

### Reusable badge

The *Reusable* badge subsumes the *Functional* badge.
An artifact can receive the *Reusable* badge only if it satisfies all requirements for the *Functional* badge and, in addition, is suitable for use beyond reproducing the experiments in the paper.

As a practical test, a reviewer should be able to perform a reasonable reuse task using only the artifact and its documentation, for example, running a tool on a new input, adding a new benchmark, using a library from another program, modifying an implementation, or extending a formalization.

To qualify as *Reusable*, the artifact must satisfy the following requirements:

* **License.**
  The artifact must have a license that permits its intended forms of reuse and repurposing.
* **Installation and dependencies.**
  The artifact must be installable or buildable in a clean, documented environment.
  Required software, libraries, and version constraints must be documented, and dependencies should be reasonably current unless an older version is inherently required.
  The artifact must not depend on undocumented configuration present only in the supplied VM or Docker image.
* **Use beyond the paper.**
  The documentation must explain how to use the artifact beyond reproducing the paper experiments, including how to use it on new inputs or examples and how to interpret its outputs.
* **Documented interfaces.**
  Relevant command-line options, configuration, APIs, input/output formats, and extension points must be documented sufficiently for independent use.
* **Source and build process.**
  If source code is provided, it must be reasonably structured and documented so that the main components can be understood and modified or extended.
  The documented build process must reproduce the executable or other derived artifact used in the evaluation.
* **Validation.**
  The artifact must provide a practical way to verify that a new installation or build works correctly, such as tests, a validation command, or representative examples.

## General Advice for Creating Artifacts

- **Start early.**
  For tool papers, artifact preparation overlaps with the paper review period, so authors should start preparing the artifact before or soon after paper submission.
  We generally recommend creating the artifact alongside the paper, which makes it easier to keep the two consistent.
  For all other papers, there are fewer than two weeks between the CAV paper notification and the artifact submission deadline, which is not so much time; we advise you to start preparing an artifact already before the paper notification date.
- **Peer review before submitting.**
  You should have a second person (other than the one(s) who prepared the artifact) to try to run it from scratch, as if they are reviewing your artifact.
- **Keep it simple.**
  The provided instructions should allow the results to be reproduced by any computer science graduate with a working knowledge of the command line.
  Do not assume any expertise in your field.
  If appropriate, provide toy examples and instructions on how to use them.
- **Be clear.**
  Be clear about how the outputs obtained using the artifact map to the results in the paper (e.g. "After the scripts finish, the graph in `figs/results-Fig1.pdf` reproduces the graph in Fig. 1 in the paper").
- **Document running times.**
  Provide an estimate of how long each non-trivial step is expected to take, so that reviewers can plan accordingly (for example, by running longer experiments overnight).
  Where possible, provide progress indicators.
  If reproducing the complete results takes several days or longer, also provide a representative subset that can be completed in about 8 hours on a typical laptop.
- **Make it standalone.**
  Avoid connecting to external services as much as possible.
  For instance, include required packages to avoid installing from the Internet (web services can move/terminate over time, packages can be removed, API endpoints can change, free services can become paid).

## Contact

For any questions regarding Artifact Evaluation, please [contact the AE chairs](mailto:t.vandijk@utwente.nl;tim.quatmann@cs.rwth-aachen.de):

{% assign ae_chairs = site.data.organizers.roles | where: "title", "Artifact Evaluation Chairs" %}

{% include organizer-grid.html roles=ae_chairs featured=true featured_title="Artifact Evaluation Chairs" heading_level=3 %}
