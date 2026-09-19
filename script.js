/* =========================================================
   SPLICED — COMPLETE JAVASCRIPT
   Lessons / Diagrams / Guided Ordering / Sequencing
   Assessments / Review List / Progress
   ========================================================= */

"use strict";

let learningMode = localStorage.getItem("splicedLearningMode") || "guided";

/* =========================================================
   DOM HELPERS
   ========================================================= */

const $ = selector => document.querySelector(selector);

const $$ = selector => [...document.querySelectorAll(selector)];

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[character]));
}

/* =========================================================
   MODULE DATA

   Each step contains:
   [title, instruction, visual cue]

   These are schematic training procedures.
   Exact construction follows the instructor's specification.
   ========================================================= */

const MODULES = [
    {
        name: "Rat Tail / Pigtail Joint",

        media: {
            photo: "assets/images/actual/rat-tail-actual.webp",
            clip: "assets/media/gifs/rat-tail-demo.gif",
            photoAlt: "AI-generated illustrative procedural reference of the Rat Tail / Pigtail Joint for visual learning support",
            clipAlt: "Short looping procedural demonstration for Rat Tail / Pigtail Joint"
        },

        purpose:
            "Join conductor ends into one shared twisted tail.",

        feature:
            "The prepared ends point in the same direction and twist together.",

        mistake:
            "Twisting only one wire around a straight partner instead of twisting both together.",

        check:
            "Both conductors share an even twist without a loose end.",

        steps: [
            [
                "Prepare the Conductors",
                "Use disconnected practice wires. Inspect both ends and prepare the wire stripper, pliers, and cutter.",
                "Two separate conductor ends are ready."
            ],
            [
                "Strip the Insulation",
                "Remove the instructor-specified length of insulation from both ends without nicking the metal.",
                "The exposed ends have matching working lengths."
            ],
            [
                "Align the Conductors",
                "Place the exposed ends side by side, pointing in the same direction. Hold the insulation shoulders level.",
                "Both tips point toward the same direction."
            ],
            [
                "Twist the Conductors",
                "Hold the conductors together and twist the exposed portions evenly with pliers, following the class demonstration.",
                "Both conductors form one shared twisted tail."
            ],
            [
                "Inspect and Finish",
                "Check the even twist and trim sharp excess as instructed. Have the joint checked before applying the specified insulating finish.",
                "Inspect the entire twisted portion before covering it."
            ]
        ]
    },

    {
        name: "Western Union Short-Tie",

        media: {
            photo: "assets/images/actual/western-union-short-tie-actual.webp",
            clip: "assets/media/gifs/western-union-short-tie-demo.gif",
            photoAlt: "AI-generated illustrative procedural reference of the Western Union Short-Tie for visual learning support",
            clipAlt: "Short looping procedural demonstration for Western Union Short-Tie"
        },

        purpose:
            "Extend two conductor ends using a compact in-line splice.",

        feature:
            "Each free end wraps around the opposite standing conductor.",

        mistake:
            "Wrapping one side and leaving the other side unsecured.",

        check:
            "Both sides have close, orderly wraps and the standing wires remain in line.",

        steps: [
            [
                "Prepare the Conductors",
                "Use disconnected samples. Strip the specified length from both ends without damaging the metal.",
                "Exposed ends face one another."
            ],
            [
                "Cross the Conductors",
                "Overlap and cross the exposed ends while leaving enough free length to wrap on both sides.",
                "A short overlap forms at the center."
            ],
            [
                "Form the Initial Bend",
                "Bend each free end around the opposite conductor to establish the central interlock.",
                "The ends turn toward opposite standing conductors."
            ],
            [
                "Wrap the First Conductor",
                "Hold the interlock and make close turns of conductor A around the straight portion of conductor B.",
                "The first set of wraps forms on the right."
            ],
            [
                "Wrap the Second Conductor",
                "Wrap conductor B around the straight portion of conductor A on the opposite side.",
                "The second set of wraps completes the left side."
            ],
            [
                "Inspect and Finish",
                "Inspect both sets of turns, trim as instructed, and obtain the required check before insulating.",
                "Both sides of the compact splice are complete."
            ]
        ]
    },

    {
        name: "Western Union Long-Tie",

        media: {
            photo: "assets/images/actual/western-union-long-tie-actual.webp",
            clip: "assets/media/gifs/western-union-long-tie-demo.gif",
            photoAlt: "AI-generated illustrative procedural reference of the Western Union Long-Tie for visual learning support",
            clipAlt: "Short looping procedural demonstration for Western Union Long-Tie"
        },

        purpose:
            "Extend conductor ends using an elongated central tie.",

        feature:
            "A longer central interlock distinguishes it from the short-tie form.",

        mistake:
            "Making a compact center when the lesson requires a long tie.",

        check:
            "The elongated center and both sets of end wraps are present.",

        steps: [
            [
                "Prepare the Conductors",
                "Use disconnected samples and prepare the longer exposed working lengths specified by your instructor.",
                "Enough exposed length is available for the longer center."
            ],
            [
                "Cross the Conductors",
                "Cross the prepared ends with enough overlap for the extended tie and both end wraps.",
                "The overlap spans a longer center region."
            ],
            [
                "Form the Long Tie",
                "Intertwine the overlapped portions to form the elongated central tie shown in the class demonstration.",
                "The center contains an extended intertwined section."
            ],
            [
                "Wrap the First Side",
                "Wrap conductor A around the opposite standing conductor beyond the long center.",
                "The first end turns sit beyond the central tie."
            ],
            [
                "Wrap the Second Side",
                "Wrap conductor B around the other standing conductor while keeping the center intact.",
                "The opposite end turns complete the connection."
            ],
            [
                "Inspect and Finish",
                "Check the long center and both end wraps. Trim and apply the specified finish after inspection.",
                "The long center remains distinct from the end wraps."
            ]
        ]
    },

    {
        name: "Plain Tap Joint",

        media: {
            photo: "assets/images/actual/plain-tap-actual.webp",
            clip: "assets/media/gifs/plain-tap-demo.gif",
            photoAlt: "AI-generated illustrative procedural reference of the Plain Tap Joint for visual learning support",
            clipAlt: "Short looping procedural demonstration for Plain Tap Joint"
        },

        purpose:
            "Connect one branch conductor to a continuous main conductor.",

        feature:
            "One tap wraps around the exposed middle of an uncut main.",

        mistake:
            "Cutting the main conductor instead of exposing its middle section.",

        check:
            "The main stays continuous and the branch turns sit close together.",

        steps: [
            [
                "Prepare the Main Conductor",
                "On a disconnected training sample, expose the specified middle section of the main without cutting it.",
                "The main conductor continues from left to right."
            ],
            [
                "Prepare the Tap Conductor",
                "Strip the specified working length from the branch end without nicking it.",
                "The branch tip is exposed below the main."
            ],
            [
                "Position the Tap",
                "Place the branch against the exposed main at approximately a right angle.",
                "The conductors form a T-shaped arrangement."
            ],
            [
                "Start the Wrap",
                "Bend the free branch end over and around the main to start the first turn.",
                "The first turn establishes the wrapping direction."
            ],
            [
                "Complete the Wrap",
                "Continue close, orderly turns around the main following the specified class procedure.",
                "The branch turns lie beside one another."
            ],
            [
                "Inspect and Finish",
                "Check the continuous main and branch turns. Remove sharp excess and finish as specified after inspection.",
                "One branch connection is complete."
            ]
        ]
    },

    {
        name: "Knotted Tap Joint",

        media: {
            photo: "assets/images/actual/knotted-tap-actual.webp",
            clip: "assets/media/gifs/knotted-tap-demo.gif",
            photoAlt: "AI-generated illustrative procedural reference of the Knotted Tap Joint for visual learning support",
            clipAlt: "Short looping procedural demonstration for Knotted Tap Joint"
        },

        purpose:
            "Form a branch connection with a locking knot before the turns.",

        feature:
            "The branch forms a locking loop around the main before wrapping.",

        mistake:
            "Skipping the knot and making only a plain tap.",

        check:
            "The locking knot is present and the following turns are orderly.",

        steps: [
            [
                "Prepare the Conductors",
                "Use disconnected samples. Expose a middle section of the uncut main and the specified length of the branch end.",
                "The main and branch have exposed working areas."
            ],
            [
                "Position the Tap Conductor",
                "Place the branch at the exposed main and leave enough working length to form the locking loop.",
                "The branch meets the main before looping."
            ],
            [
                "Form the Knot",
                "Carry the branch around the main and back around its own standing portion to form the locking knot shown in class.",
                "The returning loop locks around the branch stem."
            ],
            [
                "Make the Required Turns",
                "After the knot, wrap the free branch end around the main in close turns.",
                "The turns follow the locking loop."
            ],
            [
                "Trim the End",
                "Trim only the excess end specified by your instructor without cutting into the knot or wraps.",
                "The projecting free tail is shortened."
            ],
            [
                "Inspect and Finish",
                "Check the knot and turns before applying the specified finishing method.",
                "Both the knot and wrapped section remain secure."
            ]
        ]
    },

    {
        name: "Aerial Tap Joint",

        media: {
            photo: "assets/images/actual/aerial-tap-actual.webp",
            clip: "assets/media/gifs/aerial-tap-demo.gif",
            photoAlt: "AI-generated illustrative procedural reference of the Aerial Tap Joint for visual learning support",
            clipAlt: "Short looping procedural demonstration for Aerial Tap Joint"
        },

        purpose:
            "Study a tap configuration with a bent branch and short wrapped section.",

        feature:
            "A bent branch passes over the main before the tap turns are formed.",

        mistake:
            "Beginning the turns before positioning and bending the branch.",

        check:
            "The branch bend is formed and the turns engage the main.",

        steps: [
            [
                "Prepare the Conductors",
                "Use disconnected training samples. Expose the specified main section and branch end.",
                "The exposed main remains continuous."
            ],
            [
                "Position the Conductors",
                "Bring the branch toward the main in the orientation shown in your class demonstration.",
                "The branch approaches the main at an angle."
            ],
            [
                "Form the Bend",
                "Bend the free branch end over the main before making the turns.",
                "A hooked bend passes over the main."
            ],
            [
                "Wrap the Tap",
                "Make the specified tap turns around the main while holding the branch position.",
                "The short wrapped portion follows the bend."
            ],
            [
                "Inspect the Connection",
                "Inspect the bend, turns, and conductor surfaces before covering the joint.",
                "The exposed construction can still be inspected."
            ],
            [
                "Complete the Finish",
                "Apply the finishing method required by the instructor after the construction is checked.",
                "The inspected joint is ready for its specified finish."
            ]
        ]
    },

    {
        name: "Fixture Joint",

        media: {
            photo: "assets/images/actual/fixture-joint-actual.webp",
            clip: "assets/media/gifs/fixture-joint-demo.gif",
            photoAlt: "AI-generated illustrative procedural reference of the Fixture Joint for visual learning support",
            clipAlt: "Short looping procedural demonstration for Fixture Joint"
        },

        purpose:
            "Join a fixture lead to a supporting branch conductor in a training sample.",

        feature:
            "The fixture lead wraps first; the supporting conductor then folds over the turns.",

        mistake:
            "Forgetting to fold the supporting conductor over the initial wraps.",

        check:
            "The fixture lead is wrapped and the supporting end is folded as demonstrated.",

        steps: [
            [
                "Prepare the Conductors",
                "Use disconnected samples. Prepare the fixture lead and supporting conductor to the specified lengths.",
                "The fixture lead is thinner in the schematic."
            ],
            [
                "Wrap the Fixture Wire",
                "Wrap the prepared fixture lead around the supporting conductor as demonstrated.",
                "The fixture lead surrounds the supporting conductor."
            ],
            [
                "Bend the Branch Conductor",
                "Fold the free end of the supporting conductor back over the initial turns.",
                "The supporting end folds back to retain the turns."
            ],
            [
                "Complete the Wrap",
                "Complete the remaining fixture-lead wraps around the folded section as shown in class.",
                "The fixture lead engages the folded section."
            ],
            [
                "Apply the Required Finish",
                "Check the exposed construction first, then apply the specified insulating finish.",
                "Inspect before covering the metal."
            ],
            [
                "Inspect the Joint",
                "Inspect the finished training joint for complete coverage, damage, and projecting ends.",
                "The finished joint receives a final check."
            ]
        ]
    },

    {
        name: "Cross Joint",

        media: {
            photo: "assets/images/actual/cross-joint-actual.webp",
            clip: "assets/media/gifs/cross-joint-demo.gif",
            photoAlt: "AI-generated illustrative procedural reference of the Cross Joint for visual learning support",
            clipAlt: "Short looping procedural demonstration for Cross Joint"
        },

        purpose:
            "Connect two branch conductors beside one another on one main.",

        feature:
            "Two separate taps occupy adjacent locations on a continuous main.",

        mistake:
            "Forming only the first tap and leaving the second branch unsecured.",

        check:
            "Both adjacent taps are complete and the main remains uncut.",

        steps: [
            [
                "Prepare the Conductors",
                "Use disconnected samples. Expose the main connection area and prepare both branch ends.",
                "One main and two separate branches are visible."
            ],
            [
                "Position the First Tap",
                "Place the first branch at one side of the prepared main section.",
                "The first branch is positioned."
            ],
            [
                "Complete the First Tap",
                "Wrap the first branch around the main following the plain-tap sequence.",
                "The first set of turns is complete."
            ],
            [
                "Position the Second Tap",
                "Place the second branch beside the first connection with room for its own turns.",
                "The second branch occupies the adjacent position."
            ],
            [
                "Complete the Second Tap",
                "Wrap the second branch around the main without disturbing the first connection.",
                "The second set of turns completes the second tap."
            ],
            [
                "Inspect and Finish",
                "Check both taps and the main, then apply the specified finishing method.",
                "Two separate completed taps can be identified."
            ]
        ]
    }
];

/* =========================================================
   APPLICATION STATE
   ========================================================= */

const PROFILES_KEY = "splicedLearnerProfilesV1";
const LEGACY_PROFILE_KEYS = ["splicedUser", "splicedAccountsV2"];
const SESSION_KEY = "splicedSession";
const PROGRESS_KEY = "splicedProgress";

let currentUser = null;
let selectedModule = 0;
let currentStep = 0;
let currentPage = "home";

let learning = {};
let points = 0;
let badges = 0;
let completedModules = new Set();

let quizModule = 0;
let quizDrafts = {};
let quizMode = "post";

let sequenceDrafts = {};
let selectedSequencePosition = null;
let sequenceReturnModule = null;

let nextRound = null;

let playbackTimer = null;
let animationSpeed = 1;
let zoomed = false;
let toastTimer = null;

/* =========================================================
   STORAGE
   ========================================================= */

function readJSON(key, fallback = null) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch {
        return fallback;
    }
}

function writeJSON(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch {
        notify(
            "Unable to save on this browser. Check available storage and browser permissions."
        );
        return false;
    }
}

function progressKey(username) {
    return `${PROGRESS_KEY}_${username.toLowerCase()}`;
}

function normalizeProfileName(value) {
    return String(value || "")
        .replace(/[\u0000-\u001f\u007f<>]/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 40);
}

function validProfileName(value) {
    return value.length >= 2 && value.length <= 40;
}

function profileFromStored(value) {
    const candidate = typeof value === "string"
        ? value
        : value && typeof value === "object"
            ? value.username || value.nickname
            : "";

    const username = normalizeProfileName(candidate);

    return validProfileName(username) ? { username } : null;
}

function removeStorageKey(key) {
    try {
        localStorage.removeItem(key);
    } catch {
        // A blocked storage area should not prevent the lesson from opening.
    }
}

function getProfiles() {
    const current = readJSON(PROFILES_KEY, null);
    const candidates = Array.isArray(current) ? [...current] : [];

    // Migrate only the learner name from the previous prototype. Obsolete
    // account fields are intentionally ignored and then removed after a
    // successful write. Existing progress keys continue to use the name.
    const legacyList = readJSON(LEGACY_PROFILE_KEYS[1], []);
    if (Array.isArray(legacyList)) {
        candidates.push(...legacyList);
    }
    candidates.push(readJSON(LEGACY_PROFILE_KEYS[0], null));

    const profiles = [];
    const seen = new Set();

    candidates.forEach(value => {
        const profile = profileFromStored(value);
        if (!profile) {
            return;
        }

        const key = profile.username.toLowerCase();
        if (!seen.has(key)) {
            seen.add(key);
            profiles.push(profile);
        }
    });

    const legacyExists = LEGACY_PROFILE_KEYS.some(key => {
        try {
            return localStorage.getItem(key) !== null;
        } catch {
            return false;
        }
    });

    if (JSON.stringify(current) !== JSON.stringify(profiles) || legacyExists) {
        if (writeJSON(PROFILES_KEY, profiles)) {
            LEGACY_PROFILE_KEYS.forEach(removeStorageKey);
        }
    }

    return profiles;
}

// Keep the old function name available for any locally cached page code.
function getAccounts() {
    return getProfiles();
}

function defaultRecord() {
    return {
        lesson: false,
        viewed: [],
        completedSteps: [],
        lastStep: 0,
        attempts: [],
        preScores: [],
        review: [],
        nextSolved: [],
        safetyAccepted: false,
        mistakeReviewed: false,
        rubric: {
            safety: false,
            preparation: false,
            sequence: false,
            technique: false,
            inspection: false
        }
    };
}

function recordFor(moduleIndex) {
    const name = MODULES[moduleIndex].name;

    if (!learning[name]) {
        learning[name] = defaultRecord();
    }

    return learning[name];
}

function validStepList(value, length, minimum = 0) {
    if (!Array.isArray(value)) {
        return [];
    }

    return [...new Set(
        value.filter(step =>
            Number.isInteger(step) &&
            step >= minimum &&
            step < length
        )
    )];
}

function loadProgress() {
    learning = {};
    points = 0;
    badges = 0;
    completedModules = new Set();

    quizDrafts = {};
    quizMode = "post";
    sequenceDrafts = {};
    nextRound = null;
    sequenceReturnModule = null;
    selectedSequencePosition = null;

    selectedModule = 0;
    currentStep = 0;
    quizModule = 0;

    if (!currentUser) {
        return;
    }

    const saved = readJSON(progressKey(currentUser.username), {});

    if (!saved || typeof saved !== "object") {
        return;
    }

    points = Math.max(0, Number(saved.points) || 0);
    badges = Math.max(0, Number(saved.badges) || 0);

    const knownNames = MODULES.map(module => module.name);

    completedModules = new Set(
        Array.isArray(saved.completedModules)
            ? saved.completedModules.filter(name => knownNames.includes(name))
            : []
    );

    MODULES.forEach((module, index) => {
        const old = saved.learning?.[module.name];

        if (!old || typeof old !== "object") {
            return;
        }

        learning[module.name] = {
            lesson: Boolean(old.lesson),

            viewed:
                validStepList(old.viewed, module.steps.length),

            completedSteps:
                validStepList(old.completedSteps, module.steps.length),

            lastStep:
                Math.max(
                    0,
                    Math.min(
                        Number(old.lastStep) || 0,
                        module.steps.length - 1
                    )
                ),

            attempts:
                Array.isArray(old.attempts)
                    ? old.attempts.filter(attempt =>
                        attempt &&
                        Number.isInteger(attempt.score) &&
                        attempt.score >= 0 &&
                        attempt.score <= 10
                    )
                    : [],

            preScores:
                Array.isArray(old.preScores)
                    ? old.preScores.filter(attempt =>
                        attempt &&
                        Number.isInteger(attempt.score) &&
                        attempt.score >= 0 &&
                        attempt.score <= 10
                    )
                    : [],

            review:
                validStepList(old.review, module.steps.length),

            nextSolved:
                validStepList(old.nextSolved, module.steps.length, 1),

            safetyAccepted: Boolean(old.safetyAccepted),
            mistakeReviewed: Boolean(old.mistakeReviewed),

            rubric: {
                safety: Boolean(old.rubric?.safety),
                preparation: Boolean(old.rubric?.preparation),
                sequence: Boolean(old.rubric?.sequence),
                technique: Boolean(old.rubric?.technique),
                inspection: Boolean(old.rubric?.inspection)
            }
        };
    });

    const lastModuleIndex = MODULES.findIndex(
        module => module.name === saved.lastModule
    );

    if (lastModuleIndex >= 0) {
        selectedModule = lastModuleIndex;
        currentStep = recordFor(selectedModule).lastStep;
    }
}

function saveProgress() {
    if (!currentUser) {
        return;
    }

    writeJSON(
        progressKey(currentUser.username),
        {
            version: 3,
            points,
            badges,
            completedModules: [...completedModules],
            lastModule: MODULES[selectedModule].name,
            learning
        }
    );
}

function acceptSafety(accepted) {
    const record = recordFor(selectedModule);

    record.safetyAccepted = Boolean(accepted);
    saveProgress();
    renderPractice();
}

function toggleStepComplete(completed) {
    const record = recordFor(selectedModule);

    record.completedSteps = record.completedSteps || [];

    if (completed && !record.completedSteps.includes(currentStep)) {
        record.completedSteps.push(currentStep);
    }

    if (!completed) {
        record.completedSteps = record.completedSteps.filter(
            step => step !== currentStep
        );
    }

    saveProgress();
    renderPractice();
}

function toggleStepHint() {
    const hint = $("#stepHint");
    const button = $("#stepHintButton");

    if (!hint || !button) {
        return;
    }

    hint.hidden = !hint.hidden;
    button.textContent = hint.hidden ? "Show Hint" : "Hide Hint";
}

function rubricScore(index) {
    const rubric = recordFor(index).rubric || {};

    return [
        rubric.safety,
        rubric.preparation,
        rubric.sequence,
        rubric.technique,
        rubric.inspection
    ].filter(Boolean).length;
}

function openRubric(index) {
    const module = MODULES[index];
    const record = recordFor(index);
    const rubric = record.rubric || {};
    const modal = $("#rubricModal");

    if (!modal) {
        return;
    }

    modal.hidden = false;
    modal.innerHTML = `
        <article class="rubric-modal" role="dialog" aria-modal="true" aria-labelledby="rubricTitle">
            <span class="eyebrow">PRACTICAL PERFORMANCE RUBRIC</span>
            <h2 id="rubricTitle">${escapeHTML(module.name)}</h2>
            <p>
                Use this checklist with an instructor or during self-review.
                A checked item means the performance was observed or verified.
            </p>

            ${[
                ["safety", "Safety and preparation", "Uses disconnected samples and follows safety reminders."],
                ["preparation", "Material preparation", "Prepares the conductor ends and tools correctly."],
                ["sequence", "Procedural sequence", "Performs the steps in the correct first-to-last order."],
                ["technique", "Construction technique", "Positions, bends, wraps, and trims as demonstrated."],
                ["inspection", "Final inspection", "Checks the completed joint and finishing method."],
            ].map(item => `
                <label class="rubric-item">
                    <input
                        type="checkbox"
                        data-rubric="${item[0]}"
                        ${rubric[item[0]] ? "checked" : ""}
                    >
                    <span><strong>${item[1]}</strong><br>${item[2]}</span>
                </label>
            `).join("")}

            <div class="button-row">
                <button class="primary" onclick="saveRubric(${index})">
                    Save Rubric
                </button>
                <button class="secondary" onclick="closeRubric()">
                    Close
                </button>
            </div>
        </article>
    `;
}

function saveRubric(index) {
    const record = recordFor(index);
    const rubric = {};

    $("#rubricModal").querySelectorAll("[data-rubric]").forEach(input => {
        rubric[input.dataset.rubric] = input.checked;
    });

    record.rubric = rubric;
    saveProgress();
    closeRubric();
    renderProgress();
    notify(`Practical rubric saved: ${rubricScore(index)}/5 criteria.`);
}

function closeRubric() {
    const modal = $("#rubricModal");

    if (modal) {
        modal.hidden = true;
        modal.innerHTML = "";
    }
}

/* =========================================================
   AUTHENTICATION
   ========================================================= */

function formMessage(id, message, type = "error") {
    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    element.textContent = message;
    element.className = `form-message ${type}`;
}

function renderProfileChoices() {
    const list = $("#returningProfiles");
    const buttons = $("#profileButtons");

    if (!list || !buttons) {
        return;
    }

    const profiles = getProfiles();
    buttons.replaceChildren();
    list.hidden = profiles.length === 0;

    profiles.forEach(profile => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "secondary profile-choice";
        button.textContent = `Continue as ${profile.username}`;
        button.addEventListener("click", () => startLearner(profile.username));
        buttons.append(button);
    });
}

function showAuthForm() {
    const form = $("#profileForm");
    if (form) {
        form.hidden = false;
    }
    renderProfileChoices();
}

function startLearner(name) {
    const username = normalizeProfileName(name);

    if (!validProfileName(username)) {
        formMessage(
            "profileMessage",
            "Use a nickname with 2–40 characters."
        );
        return;
    }

    const profiles = getProfiles();
    const existing = profiles.find(profile =>
        profile.username.toLowerCase() === username.toLowerCase()
    );

    if (!existing) {
        profiles.push({ username });
        writeJSON(PROFILES_KEY, profiles);
    }

    currentUser = existing || { username };
    writeJSON(SESSION_KEY, { username: currentUser.username });
    loadProgress();
    openApplication();
}

function handleProfileStart(event) {
    event.preventDefault();
    startLearner($("#profileName").value);
}

function openApplication() {
    $("#authPage").hidden = true;
    $("#mainApplication").hidden = false;
    $("#userLabel").textContent = currentUser.username;

    navigate("home");
}

function logout() {
    stopPlayback();
    saveProgress();

    try {
        localStorage.removeItem(SESSION_KEY);
    } catch {
        // The page can still return to the login screen.
    }

    currentUser = null;
    learning = {};
    points = 0;
    badges = 0;
    completedModules = new Set();
    quizDrafts = {};
    sequenceDrafts = {};
    nextRound = null;
    sequenceReturnModule = null;

    $("#mainApplication").hidden = true;
    $("#authPage").hidden = false;

    const form = $("#profileForm");
    if (form) {
        form.reset();
    }
    formMessage("profileMessage", "");
    showAuthForm();
}

function restoreSession() {
    const session = readJSON(SESSION_KEY);

    if (!session || typeof session.username !== "string") {
        return;
    }

    const account = getProfiles().find(user =>
        user.username.toLowerCase() === session.username.toLowerCase()
    );

    if (!account) {
        return;
    }

    currentUser = account;
    loadProgress();
    openApplication();
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function navigate(page) {
    const target = document.getElementById(page);

    if (!target || !target.classList.contains("page")) {
        return;
    }

    stopPlayback();
    currentPage = page;

    $$(".page").forEach(section => {
        section.classList.toggle("active", section.id === page);
    });

    const activeMenu = page === "nextPractice" ? "practice" : page;

    $$("nav button[data-page]").forEach(button => {
        const active = button.dataset.page === activeMenu;

        button.classList.toggle("active", active);

        if (active) {
            button.setAttribute("aria-current", "page");
        } else {
            button.removeAttribute("aria-current");
        }
    });

    if (page === "learn") {
        closeLesson();
    }

    if (page === "practice") {
        renderPractice();
    }

    if (page === "challenge") {
        ensureSequence(selectedModule);
        renderSequence();
    }

    if (page === "assessment") {
        renderQuiz();
    }

    if (page === "progress") {
        renderProgress();
    }

    if (page === "teacher") {
        renderTeacherProgress();
    }

    if (page === "nextPractice") {
        renderNextPractice();
    }

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
}

function notify(message) {
    const toast = $("#toast");

    clearTimeout(toastTimer);

    toast.textContent = message;
    toast.hidden = false;

    toastTimer = setTimeout(() => {
        toast.hidden = true;
    }, 4200);
}

function showHowItWorks() {
    const element = $("#howItWorks");

    element.hidden = !element.hidden;

    if (!element.hidden) {
        element.scrollIntoView({
            block: "nearest",
            behavior: "auto"
        });
    }
}

function moduleSelect(id, selected, handler) {
    return `
        <div class="module-select">
            <label for="${id}">Choose module</label>

            <select
                id="${id}"
                onchange="${handler}(Number(this.value))"
            >
                ${MODULES.map((module, index) => `
                    <option
                        value="${index}"
                        ${index === selected ? "selected" : ""}
                    >
                        ${escapeHTML(module.name)}
                    </option>
                `).join("")}
            </select>
        </div>
    `;
}

/* =========================================================
   MODULE STATUS
   ========================================================= */

function bestScore(index) {
    return Math.max(
        0,
        ...recordFor(index).attempts.map(attempt => attempt.score)
    );
}

function learningPathComplete(index) {
    const module = MODULES[index];
    const record = recordFor(index);

    return (
        record.lesson &&
        record.viewed.length === module.steps.length &&
        completedModules.has(module.name) &&
        bestScore(index) >= 8
    );
}

/* =========================================================
   MODULE CARDS AND LESSONS
   ========================================================= */

function diagramWithReference(moduleIndex, stepIndex, animate = false) {
    const module = MODULES[moduleIndex];
    const media = module?.media || {};
    const image = media.photo || "";
    const alt = `Illustrative finished-splice reference for ${module?.name || "selected module"}`;

    return `
        <div class="diagram-hover-reference" tabindex="0" aria-label="Illustration. Hover or focus to view the illustrative finished-splice reference.">
            ${wireDiagram(moduleIndex, stepIndex, animate)}
            <div class="diagram-hover-card" role="img" aria-label="${escapeHTML(alt)}">
                <span class="hover-reference-label">Illustrative Reference</span>
                <img src="${escapeHTML(image)}" alt="${escapeHTML(alt)}" loading="lazy" decoding="async">
                <small>${escapeHTML(module?.name || "")}</small>
            </div>
            <span class="hover-reference-hint">Hover / focus for finished-splice reference</span>
        </div>
    `;
}

function jumpToLessonStep(stepIndex) {
    const target = document.getElementById(`lesson-step-${stepIndex}`);
    if (!target) return;
    target.open = true;
    target.scrollIntoView({behavior: "smooth", block: "start"});
}

function setAboutTab(tab) {
    document.querySelectorAll('[data-about-panel]').forEach(panel => {
        panel.hidden = panel.dataset.aboutPanel !== tab;
    });
    document.querySelectorAll('[data-about-tab]').forEach(button => {
        const active = button.dataset.aboutTab === tab;
        button.classList.toggle('active', active);
        button.setAttribute('aria-selected', active ? 'true' : 'false');
    });
}

function renderModules() {
    $("#lessonCards").innerHTML = MODULES.map((module, index) => {
        const record = recordFor(index);

        const status = learningPathComplete(index)
            ? "Learning path complete"
            : record.lesson
                ? "Lesson read"
                : "Ready to learn";

        return `
            <article class="lesson-card">
                <span class="eyebrow">
                    MODULE ${String(index + 1).padStart(2, "0")}
                </span>

                <div class="module-thumbnail">
                    ${diagramWithReference(index, module.steps.length - 1)}
                </div>

                <h2>${escapeHTML(module.name)}</h2>
                <p>${escapeHTML(module.purpose)}</p>

                <div class="tags">
                    <span class="tag">${module.steps.length} steps</span>
                    <span class="tag">10 questions</span>
                    <span class="tag">${status}</span>
                </div>

                <button class="primary" onclick="openLesson(${index})">
                    Open Lesson →
                </button>
            </article>
        `;
    }).join("");
}

function mediaReferenceCard(index, compact = false) {
    const module = MODULES[index];
    const media = module.media || {};

    return `
        <section class="media-reference-card" aria-label="Actual reference and short demonstration">
            <div class="media-card-heading">
                <div>
                    <span class="eyebrow">ILLUSTRATIVE REFERENCE + SHORT DEMONSTRATION</span>
                    <h3>Connect the illustration to the real wire</h3>
                    <p>Compare the simplified diagram with a clearly labeled illustrative reference, then replay the short local demonstration before practice.</p>
                </div>
                <span class="offline-badge">No YouTube required</span>
            </div>

            <div class="media-reference-grid">
                <figure class="actual-photo-frame">
                    <img
                        src="${escapeHTML(media.photo || "")}" 
                        alt="${escapeHTML(media.photoAlt || (module.name + " actual reference"))}"
                        loading="lazy"
                        onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
                    >
                    <div class="media-placeholder" hidden>
                        <strong>Illustrative reference slot</strong>
                        <span>${escapeHTML(module.name)}</span>
                        <small>Add or replace with an instructor-verified training-sample photo when available.</small>
                    </div>
                    <figcaption>AI-generated illustrative reference • compare with instructor-verified samples</figcaption>
                </figure>

                <figure class="demo-clip-frame">
                    <img
                        src="${escapeHTML(media.clip || "")}" 
                        alt="${escapeHTML(media.clipAlt || (module.name + " short demonstration"))}"
                        loading="lazy"
                        onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
                    >
                    <div class="media-placeholder" hidden>
                        <strong>10–15 second demo slot</strong>
                        <span>${escapeHTML(module.name)}</span>
                        <small>Add the module animated procedural illustration here. Show one major action at a time.</small>
                    </div>
                    <figcaption>Animated procedural illustration • loops automatically while visible</figcaption>
                </figure>
            </div>

            ${compact ? "" : `
                <p class="small-text media-guidance">
                    Use disconnected practice conductors only. The local clip is a review aid, not a substitute for instructor-supervised laboratory performance. Exact strip lengths, turns, conductor sizes, and finishing requirements should follow the validated class specification.
                </p>
            `}
        </section>
    `;
}

function openLesson(index) {
    if (!MODULES[index]) {
        return;
    }

    selectedModule = index;
    sequenceReturnModule = null;

    navigate("learn");

    $("#lessonCards").hidden = true;
    $("#lessonViewer").hidden = false;

    const module = MODULES[index];
    const record = recordFor(index);

    $("#lessonViewer").innerHTML = `
        <button class="secondary" onclick="closeLesson()">
            ← All Modules
        </button>

        <header class="lesson-header">
            <span class="eyebrow">MODULE ${index + 1} • LESSON</span>
            <h2>${escapeHTML(module.name)}</h2>
            <p>${escapeHTML(module.purpose)}</p>
        </header>

        <nav class="lesson-step-quicknav panel" aria-label="Quick step navigation">
            <div>
                <span class="eyebrow">STEP-BY-STEP QUICK ACCESS</span>
                <strong>Jump directly to a procedure step</strong>
                <p class="small-text">Use this selector so you do not need to scroll through the whole lesson.</p>
            </div>
            <select aria-label="Choose a procedure step" onchange="jumpToLessonStep(Number(this.value))">
                <option value="" selected disabled>Choose step…</option>
                ${module.steps.map((item, stepIndex) => `
                    <option value="${stepIndex}">Step ${stepIndex + 1}: ${escapeHTML(item[0])}</option>
                `).join("")}
            </select>
        </nav>

        <div class="lesson-layout">
            <figure>
                ${diagramWithReference(index, module.steps.length - 1)}
                <figcaption>
                    Completed configuration • schematic, not to scale
                </figcaption>
            </figure>

            <article class="panel">
                <h3>Learning Objectives</h3>

                <ul>
                    <li>Identify the defining arrangement of the joint.</li>
                    <li>Explain and arrange its procedural steps.</li>
                    <li>Recognize construction errors before finishing.</li>
                </ul>

                <h3>What Makes It Different?</h3>
                <p>${escapeHTML(module.feature)}</p>
            </article>
        </div>

        <aside class="note">
            <strong>Before Practical Work</strong>

            <p>
                Use disconnected training samples under instructor supervision.
                Prepare a wire stripper, pliers, and side cutter.
                Follow the specified wire type, strip length, turns,
                and finishing method.
            </p>

            <p>
                Diagram colors identify different conductors;
                they are not installation color codes.
            </p>
        </aside>

        ${mediaReferenceCard(index)}

        <h2>Read the Procedure</h2>

        <div class="lesson-steps">
            ${module.steps.map((step, stepIndex) => `
                <details id="lesson-step-${stepIndex}" ${stepIndex === 0 ? "open" : ""}>
                    <summary>
                        ${stepIndex + 1}. ${escapeHTML(step[0])}
                    </summary>

                    <div class="lesson-step-body">
                        <figure>
                            ${diagramWithReference(index, stepIndex)}
                            <figcaption>${escapeHTML(step[2])}</figcaption>
                        </figure>

                        <div>
                            <p>${escapeHTML(step[1])}</p>

                            <button
                                class="secondary"
                                onclick="openPracticeStep(${index}, ${stepIndex})"
                            >
                                Practice This Step
                            </button>
                        </div>
                    </div>
                </details>
            `).join("")}
        </div>

        <div class="two-columns">
            <aside class="note">
                <h3>Common Mistake</h3>
                <p>${escapeHTML(module.mistake)}</p>
            </aside>

            <aside class="note">
                <h3>Quality Check</h3>
                <p>${escapeHTML(module.check)}</p>
            </aside>
        </div>

        <aside class="curriculum-note">
            <strong>Competency alignment</strong>
            <p><strong>CHED/TUP:</strong> higher-education and local course context. <strong>DepEd EIM:</strong> baseline instructional curriculum reference where applicable. <strong>TESDA EIM NC II:</strong> technical competency/performance-standard reference. Exact construction and safety requirements follow the instructor-validated procedure.</p>
        </aside>

        <section class="mode-selector panel">
            <div>
                <span class="eyebrow">DIFFERENTIATED LEARNING</span>
                <h3>Choose your support level</h3>
                <p><strong>Guided Mode</strong> keeps prompts and learning support visible. <strong>Independent Mode</strong> reduces explanatory cues so you can recall the procedure with less support.</p>
            </div>
            <div class="button-row">
                <button class="${learningMode === "guided" ? "primary" : "secondary"}" onclick="setLearningMode('guided')">Guided Mode</button>
                <button class="${learningMode === "independent" ? "primary" : "secondary"}" onclick="setLearningMode('independent')">Independent Mode</button>
            </div>
        </section>

        <div class="button-row">
            <button class="primary" onclick="markLessonRead(${index})">
                ${record.lesson
                    ? "✓ Lesson Read — Open Practice"
                    : "Mark Lesson Read & Practice →"}
            </button>

            <button class="secondary" onclick="openAssessment(${index})">
                Take Assessment
            </button>
        </div>
    `;

    saveProgress();
}

function closeLesson() {
    $("#lessonCards").hidden = false;
    $("#lessonViewer").hidden = true;
    renderModules();
}

function markLessonRead(index) {
    recordFor(index).lesson = true;
    saveProgress();
    startModule(index);
}

/* =========================================================
   GUIDED PRACTICE
   ========================================================= */

function startModule(index) {
    if (!MODULES[index]) {
        return;
    }

    selectedModule = index;
    currentStep = recordFor(index).lastStep;
    sequenceReturnModule = null;

    navigate("practice");
}

function selectPractice(index) {
    startModule(index);
}

function openPracticeStep(index, step) {
    if (!MODULES[index]?.steps[step]) {
        return;
    }

    selectedModule = index;
    currentStep = step;
    sequenceReturnModule = null;

    navigate("practice");
}

function renderPractice() {
    const module = MODULES[selectedModule];
    const record = recordFor(selectedModule);

    currentStep = Math.max(
        0,
        Math.min(currentStep, module.steps.length - 1)
    );

    const step = module.steps[currentStep];

    if (currentUser) {
        if (!record.viewed.includes(currentStep)) {
            record.viewed.push(currentStep);
        }

        record.lastStep = currentStep;
        saveProgress();
    }

    const savedForReview = record.review.includes(currentStep);
    const stepComplete = record.completedSteps.includes(currentStep);
    const safetyAccepted = Boolean(record.safetyAccepted);

    $("#practiceContent").innerHTML = `
        ${moduleSelect(
            "practiceModule",
            selectedModule,
            "selectPractice"
        )}

        <section class="practice-step-dock panel" aria-label="Step-by-step procedure">
            <div class="practice-step-dock-head">
                <div>
                    <span class="eyebrow">STEP-BY-STEP PROCEDURE</span>
                    <strong>Choose a step — visible immediately</strong>
                </div>
                <span class="tag">Step ${currentStep + 1} of ${module.steps.length}</span>
            </div>
            <div class="practice-step-tabs" role="tablist">
                ${module.steps.map((item,index)=>`
                    <button type="button" role="tab"
                        class="practice-step-tab ${index===currentStep?"current":""}"
                        aria-selected="${index===currentStep}"
                        onclick="jumpStep(${index})">
                        <span>Step ${index+1}</span>
                        <small>${escapeHTML(item[0])}</small>
                    </button>`).join("")}
            </div>
            <div class="practice-current-instruction">
                <div>
                    <span class="eyebrow">CURRENT STEP</span>
                    <h2>${escapeHTML(step[0])}</h2>
                    <p>${escapeHTML(step[1])}</p>
                </div>
                <div class="button-row">
                    <button class="secondary" onclick="previousStep()" ${currentStep===0?"disabled":""}>← Previous</button>
                    <button class="secondary" onclick="replayVisual()">↻ Replay</button>
                    <button class="primary" onclick="nextStep()" ${!stepComplete||!safetyAccepted?"disabled":""}>
                        ${currentStep===module.steps.length-1?"What Comes Next? →":"Next Step →"}
                    </button>
                </div>
            </div>
        </section>

        <aside class="safety-panel">
            <strong>Safety reminder before practical work</strong>
            <p class="small-text">
                Use disconnected training samples only. Wear the required PPE,
                follow your instructor's specifications, and never practice on
                a live circuit.
            </p>
            <label>
                <input
                    type="checkbox"
                    onchange="acceptSafety(this.checked)"
                    ${safetyAccepted ? "checked" : ""}
                >
                <span>I understand the safety reminder and will follow instructor supervision.</span>
            </label>
        </aside>

        <div class="practice-layout">
            <article class="panel">
                <div class="step-meta">
                    <strong>
                        STEP ${currentStep + 1} / ${module.steps.length}
                    </strong>

                    <span class="tag">${escapeHTML(module.name)}</span>
                </div>

                <div class="wire-legend">
                    <span class="wire-a">● A / main conductor</span>
                    <span class="wire-b">● B / branch conductor</span>

                    ${selectedModule === 7 ? `
                        <span class="wire-c">● Second branch</span>
                    ` : ""}
                </div>

                <div id="visualStage" class="visual-stage">
                    ${wireDiagram(selectedModule, currentStep, true)}
                </div>

                <p class="note" aria-live="polite">
                    ${escapeHTML(step[2])}
                </p>

                <label class="step-check">
                    <input
                        type="checkbox"
                        onchange="toggleStepComplete(this.checked)"
                        ${stepComplete ? "checked" : ""}
                    >
                    <span>I understand and can describe this step.</span>
                </label>

                <section class="practice-section visual-controls-section">
                    <h3 class="practice-section-title">Visual Controls</h3>

                    <div class="visual-toolbar">
                        <button class="secondary" onclick="replayVisual()">
                            ↻ Replay
                        </button>

                        <button
                            id="pauseActionButton"
                            class="secondary"
                            aria-pressed="false"
                            onclick="pauseAction()"
                        >
                            Pause Action
                        </button>

                        <button
                            id="zoomButton"
                            class="secondary"
                            aria-pressed="false"
                            onclick="toggleZoom()"
                        >
                            Close-up
                        </button>

                        <label class="speed-control" for="motionSpeed">
                            <span>Speed</span>

                            <select
                                id="motionSpeed"
                                onchange="setAnimationSpeed(Number(this.value))"
                            >
                                <option
                                    value="0.5"
                                    ${animationSpeed === 0.5 ? "selected" : ""}
                                >
                                    0.5×
                                </option>

                                <option
                                    value="1"
                                    ${animationSpeed === 1 ? "selected" : ""}
                                >
                                    1×
                                </option>

                                <option
                                    value="1.5"
                                    ${animationSpeed === 1.5 ? "selected" : ""}
                                >
                                    1.5×
                                </option>
                            </select>
                        </label>
                    </div>

                    <details class="before-after-details">
                        <summary>Compare Before and After</summary>

                        <div class="before-after">
                            <figure>
                                <figcaption>Before this step</figcaption>
                                ${wireDiagram(selectedModule, currentStep - 1)}
                            </figure>

                            <figure>
                                <figcaption>After this step</figcaption>
                                ${wireDiagram(selectedModule, currentStep)}
                            </figure>
                        </div>
                    </details>
                </section>

                <p class="small-text">
                    Schematic training view. Turns and dimensions are illustrative.
                </p>
            </article>

            <article class="panel">
                <span class="eyebrow">OBSERVE & UNDERSTAND</span>

                <h2>${escapeHTML(step[0])}</h2>
                <p>${escapeHTML(step[1])}</p>

                <section class="practice-section step-guidance">
                    <h3 class="practice-section-title">Step Guidance</h3>

                    <button
                        id="stepHintButton"
                        class="secondary"
                        type="button"
                        onclick="toggleStepHint()"
                    >
                        Show Hint
                    </button>

                    <div id="stepHint" class="hint-box" hidden>
                        <strong>Hint</strong>
                        <p>${escapeHTML(step[2])}</p>
                    </div>

                    <aside class="note">
                        <strong>Look For</strong>
                        <p>${escapeHTML(step[2])}</p>
                    </aside>
                </section>

                <section class="practice-section step-navigation">
                    <h3 class="practice-section-title">Detailed Step List (Optional)</h3>

                    <div class="step-list">
                    ${module.steps.map((item, index) => `
                        <button
                            class="step-link ${
                                index === currentStep ? "current" : ""
                            }"
                            ${
                                index === currentStep
                                    ? 'aria-current="step"'
                                    : ""
                            }
                            onclick="jumpStep(${index})"
                        >
                            <span>
                                ${record.completedSteps.includes(index)
                                    ? "✓"
                                    : record.viewed.includes(index)
                                        ? "•"
                                        : index + 1}
                            </span>

                            ${escapeHTML(item[0])}
                        </button>
                    `).join("")}
                    </div>

                    <div class="button-row practice-actions primary-actions">
                    <button
                        class="secondary"
                        onclick="previousStep()"
                        ${currentStep === 0 ? "disabled" : ""}
                    >
                        ← Previous
                    </button>

                    <button
                        class="primary"
                        onclick="nextStep()"
                        ${!stepComplete || !safetyAccepted ? "disabled" : ""}
                        title="Check the safety reminder and step checklist first."
                    >
                        ${currentStep === module.steps.length - 1
                            ? "What Comes Next? →"
                            : "Next Step →"}
                    </button>
                    </div>

                    ${!stepComplete || !safetyAccepted ? `
                        <p class="small-text action-note">
                            Complete the safety reminder and step checklist to unlock the next step.
                        </p>
                    ` : ""}
                </section>

                <section class="practice-section learning-tools-section">
                    <h3 class="practice-section-title">Learning Tools</h3>

                    <div class="practice-actions secondary-actions">
                        <button
                            id="playStepsButton"
                            class="secondary"
                            aria-pressed="${Boolean(playbackTimer)}"
                            onclick="togglePlayback()"
                        >
                            ${playbackTimer
                                ? "Pause Auto-play"
                                : "▶ Auto-play Steps"}
                        </button>

                        <button
                            class="secondary"
                            onclick="openLesson(${selectedModule})"
                        >
                            Read Lesson
                        </button>
                    </div>
                </section>

                <aside class="step-support">
                    <h3 class="practice-section-title">Learning Support</h3>

                    <button
                        class="secondary"
                        onclick="addReviewStep(
                            ${selectedModule},
                            ${currentStep},
                            this
                        )"
                        ${savedForReview ? "disabled" : ""}
                    >
                        ${savedForReview
                            ? "✓ Saved to My Review List"
                            : "Need More Practice — Save This Step"}
                    </button>

                    <div class="button-row practice-actions support-actions">
                        <button
                            class="secondary"
                            onclick="startNextPractice(${selectedModule})"
                        >
                            Practice: What Comes Next?
                        </button>

                        ${sequenceReturnModule === selectedModule ? `
                            <button
                                class="primary"
                                onclick="returnToSequence()"
                            >
                                Return to My Sequence
                            </button>
                        ` : ""}

                        ${nextRound?.module === selectedModule ? `
                            <button
                                class="secondary"
                                onclick="resumeNextPractice()"
                            >
                                Resume Guided Ordering
                            </button>
                        ` : ""}
                    </div>
                </aside>

                ${mediaReferenceCard(selectedModule, true)}
            </article>
        </div>
    `;

    $("#visualStage").style.setProperty(
        "--motion-duration",
        `${3 / animationSpeed}s`
    );

    zoomed = false;
}

function jumpStep(step) {
    if (!MODULES[selectedModule].steps[step]) {
        return;
    }

    stopPlayback();
    currentStep = step;
    renderPractice();
}

function previousStep() {
    if (currentStep > 0) {
        jumpStep(currentStep - 1);
    }
}

function nextStep() {
    stopPlayback();

    const record = recordFor(selectedModule);

    if (
        !record.safetyAccepted ||
        !record.completedSteps.includes(currentStep)
    ) {
        notify("Acknowledge the safety reminder and complete the step checklist first.");
        return;
    }

    if (currentStep < MODULES[selectedModule].steps.length - 1) {
        currentStep++;
        renderPractice();
    } else {
        startNextPractice(selectedModule);
    }
}

function replayVisual() {
    const stage = $("#visualStage");

    if (!stage) {
        return;
    }

    stage.innerHTML = wireDiagram(
        selectedModule,
        currentStep,
        true
    );

    stage.style.setProperty(
        "--motion-duration",
        `${3 / animationSpeed}s`
    );

    zoomed = false;

    $("#zoomButton").textContent = "Close-up";
    $("#zoomButton").setAttribute("aria-pressed", "false");

    $("#pauseActionButton").textContent = "Pause Action";
    $("#pauseActionButton").setAttribute("aria-pressed", "false");
}

function pauseAction() {
    const svg = $("#visualStage svg");

    if (!svg) {
        return;
    }

    const paused = svg.classList.toggle("motion-paused");
    const button = $("#pauseActionButton");

    button.textContent = paused ? "Resume Action" : "Pause Action";
    button.setAttribute("aria-pressed", String(paused));
}

function toggleZoom() {
    const svg = $("#visualStage svg");

    if (!svg) {
        return;
    }

    zoomed = !zoomed;

    svg.setAttribute(
        "viewBox",
        zoomed ? "140 75 355 230" : "0 0 640 360"
    );

    $("#zoomButton").textContent = zoomed ? "Full View" : "Close-up";
    $("#zoomButton").setAttribute("aria-pressed", String(zoomed));
}

function setAnimationSpeed(speed) {
    if (![0.5, 1, 1.5].includes(speed)) {
        return;
    }

    stopPlayback();
    animationSpeed = speed;
    replayVisual();
}

function stopPlayback() {
    if (playbackTimer) {
        clearInterval(playbackTimer);
        playbackTimer = null;
    }

    const button = $("#playStepsButton");

    if (button) {
        button.textContent = "▶ Auto-play Steps";
        button.setAttribute("aria-pressed", "false");
    }
}

function togglePlayback() {
    if (playbackTimer) {
        stopPlayback();
        return;
    }

    const last = MODULES[selectedModule].steps.length - 1;

    if (currentStep >= last) {
        currentStep = 0;
    }

    playbackTimer = setInterval(() => {
        if (currentPage !== "practice" || currentStep >= last) {
            stopPlayback();
            return;
        }

        currentStep++;
        renderPractice();

        if (currentStep >= last) {
            stopPlayback();
        }
    }, 7000 / animationSpeed);

    renderPractice();
}

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        stopPlayback();
    }
});

/* =========================================================
   PROCEDURAL SVG DIAGRAMS

   The new action is traced once.
   Before/after images show the accumulated configuration.
   ========================================================= */

function wireDiagram(moduleIndex, stepIndex, animate = false) {
    const module = MODULES[moduleIndex];
    const last = module.steps.length - 1;
    const step = Math.max(-1, Math.min(stepIndex, last));

    const A = "#efaa69";
    const B = "#8cc9e3";
    const C = "#c8ade3";

    const parts = [];

    function path(data, color, width = 9, moving = false) {
        return `
            <path
                d="${data}"
                fill="none"
                stroke="${color}"
                stroke-width="${width}"
                stroke-linecap="round"
                stroke-linejoin="round"
                ${
                    moving && animate
                        ? 'class="wire-motion" pathLength="1"'
                        : ""
                }
            />
        `;
    }

    function line(data, color, moving = false) {
        parts.push(path(data, color, 9, moving));
    }

    function sleeve(data, color) {
        parts.push(path(data, color, 19));
    }

    function label(x, y, text) {
        parts.push(`
            <text
                x="${x}"
                y="${y}"
                fill="#d9dfe2"
                font-size="16"
                font-family="Arial, sans-serif"
            >
                ${escapeHTML(text)}
            </text>
        `);
    }

    function coil(x, y, count, direction = 1) {
        let data = `M ${x} ${y}`;

        for (let i = 0; i < count; i++) {
            data += `
                q ${7 * direction} -25 ${14 * direction} 0
                q ${-7 * direction} 25 ${-14 * direction} 0
                l ${17 * direction} 0
            `;
        }

        return data;
    }

    function coilTail(x, y, count, direction = 1) {
        return coil(x, y, count, direction)
            .replace(/^M\s+[\d.-]+\s+[\d.-]+/, "");
    }

    // RAT TAIL / PIGTAIL

    if (moduleIndex === 0) {
        const aligned = step >= 2;
        const twisted = step >= 3;

        const yA = aligned ? 163 : 118;
        const yB = aligned ? 181 : 237;

        line(`M55 ${yA} H260`, A);
        line(`M55 ${yB} H260`, B);

        sleeve(`M55 ${yA} H170`, "#9d673d");
        sleeve(`M55 ${yB} H170`, "#476f82");

        if (twisted) {
            line(
                "M260 163 Q285 143 310 174 T360 174 T410 174 T460 174",
                A,
                step === 3
            );

            line(
                "M260 181 Q285 204 310 174 T360 174 T410 174 T460 174",
                B,
                step === 3
            );
        } else {
            line(`M260 ${yA} H465`, A, step === 2);
            line(`M260 ${yB} H465`, B, step === 2);

            if (step < 1) {
                sleeve(`M260 ${yA} H465`, "#9d673d");
                sleeve(`M260 ${yB} H465`, "#476f82");
            }
        }

        label(65, 75, "Conductor A");
        label(65, 290, "Conductor B");

        label(
            315,
            75,
            twisted
                ? "Shared twisted tail"
                : aligned
                    ? "Aligned ends"
                    : "Separate ends"
        );
    }

    // WESTERN UNION SHORT / LONG TIE

    else if (moduleIndex === 1 || moduleIndex === 2) {
        const longTie = moduleIndex === 2;

        if (step < 1) {
            line("M45 135 H330", A);
            line("M595 225 H310", B);

            sleeve("M45 135 H155", "#9d673d");
            sleeve("M595 225 H485", "#476f82");

            if (step < 0) {
                sleeve("M155 135 H330", "#9d673d");
                sleeve("M485 225 H310", "#476f82");
            }
        } else {
            line("M45 180 H245", A);
            line("M595 180 H390", B);

            sleeve("M45 180 H150", "#9d673d");
            sleeve("M595 180 H490", "#476f82");

            if (step === 1) {
                line("M245 180 L405 110", A, true);
                line("M390 180 L230 250", B, true);
            } else {
                line(
                    longTie
                        ? "M245 180 Q265 151 285 180 T325 180 T365 180 L390 180"
                        : "M245 180 Q290 150 320 180 L390 180",
                    A,
                    step === 2
                );

                line(
                    longTie
                        ? "M390 180 Q370 209 350 180 T310 180 T270 180 L245 180"
                        : "M390 180 Q345 210 320 180 L245 180",
                    B,
                    step === 2
                );

                line(
                    step >= 3
                        ? coil(390, 180, 4)
                        : "M390 180 L420 115",
                    A,
                    step === 3
                );

                line(
                    step >= 4
                        ? coil(245, 180, 4, -1)
                        : "M245 180 L210 250",
                    B,
                    step === 4
                );
            }
        }

        label(60, 75, "A");
        label(540, 285, "B");

        label(
            215,
            65,
            longTie ? "Elongated center tie" : "Compact center tie"
        );
    }

    // FIXTURE JOINT

    else if (moduleIndex === 6) {
        line(
            step >= 2
                ? "M50 170 H410 Q445 170 420 145 L280 145"
                : "M50 170 H460",
            A,
            step === 2
        );

        sleeve("M50 170 H150", "#9d673d");

        const fixturePath = step >= 1
            ? `M210 295 L255 170 ${coilTail(
                255,
                170,
                step >= 3 ? 7 : 4
            )}`
            : "M210 295 L300 220";

        parts.push(
            path(
                fixturePath,
                B,
                6,
                step === 1 || step === 3
            )
        );

        sleeve("M210 295 L225 265", "#476f82");

        label(70, 75, "Supporting conductor A");
        label(335, 285, "Fixture lead B");
    }

    // TAP JOINTS AND CROSS JOINT

    else {
        line("M45 160 H595", A);

        sleeve("M45 160 H145", "#9d673d");
        sleeve("M495 160 H595", "#9d673d");

        if (step < 0) {
            sleeve("M145 160 H495", "#9d673d");
        }

        if (moduleIndex === 7) {
            const firstTap = step >= 2
                ? `M230 300 V160 ${coilTail(230, 160, 4)}`
                : step >= 1
                    ? "M230 300 V125"
                    : "M230 300 V215";

            const secondTap = step >= 4
                ? `M395 40 V160 ${coilTail(395, 160, 4)}`
                : step >= 3
                    ? "M395 40 V195"
                    : "M395 40 V100";

            line(firstTap, B, step === 1 || step === 2);
            line(secondTap, C, step === 3 || step === 4);

            sleeve("M230 300 V265", "#476f82");
            sleeve("M395 40 V75", "#78618b");

            label(70, 60, "Continuous main A");
            label(65, 325, "First tap B");
            label(435, 65, "Second tap C");
        } else {
            const knotted = moduleIndex === 4;
            const aerial = moduleIndex === 5;

            const positionStep = moduleIndex === 3 ? 2 : 1;
            const bendStep = moduleIndex === 3 ? 3 : 2;
            const wrapStep = moduleIndex === 3 ? 4 : 3;

            let branchPath;

            if (step < positionStep) {
                branchPath = "M250 295 L290 215";
            } else {
                branchPath = aerial
                    ? "M190 295 L295 160 L325 100"
                    : "M285 295 V110";
            }

            if (step >= bendStep) {
                branchPath = knotted
                    ? "M285 295 V185 C240 190 245 120 292 137 C340 151 315 212 275 198 L310 160"
                    : aerial
                        ? "M190 295 L295 160 Q310 100 330 160"
                        : "M285 295 V160 Q300 110 315 160";
            }

            if (step >= wrapStep) {
                const startX = knotted ? 310 : aerial ? 330 : 315;

                branchPath += coilTail(
                    startX,
                    160,
                    aerial ? 3 : 5
                );
            }

            if (knotted && step === 3) {
                branchPath += " L445 205";
            }

            line(
                branchPath,
                B,
                step === positionStep ||
                step === bendStep ||
                step === wrapStep ||
                (knotted && step === 4)
            );

            sleeve(
                aerial && step >= positionStep
                    ? "M190 295 L214 265"
                    : step < positionStep
                        ? "M250 295 L265 265"
                        : "M285 295 V265",
                "#476f82"
            );

            if (moduleIndex === 3 && step < 1) {
                sleeve("M250 295 L290 215", "#476f82");
            }

            label(70, 70, "Continuous main A");
            label(355, 300, "Branch B");

            if (knotted && step >= bendStep) {
                label(165, 100, "Locking loop");
            }
        }
    }

    if (step === last) {
        parts.push(`
            <rect
                x="155"
                y="95"
                width="325"
                height="135"
                rx="18"
                fill="none"
                stroke="#a5d4b4"
                stroke-width="2"
                stroke-dasharray="6 6"
            />
        `);

        label(185, 345, "Inspect the connection");
    }

    const description = step < 0
        ? "Before preparation"
        : module.steps[step][2];

    return `
        <svg
            class="wire-diagram"
            viewBox="0 0 640 360"
            role="img"
            aria-label="${escapeHTML(module.name + ": " + description)}"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>
                ${escapeHTML(module.name + ": " + description)}
            </title>

            <rect
                width="640"
                height="360"
                rx="14"
                fill="#202629"
            />

            ${parts.join("")}
        </svg>
    `;
}

/* =========================================================
   WHAT COMES NEXT?
   ========================================================= */

function shuffle(array) {
    for (let index = array.length - 1; index > 0; index--) {
        const random = Math.floor(Math.random() * (index + 1));

        [array[index], array[random]] = [
            array[random],
            array[index]
        ];
    }

    return array;
}

function startNextPractice(index = selectedModule) {
    if (!MODULES[index]) {
        return;
    }

    selectedModule = index;
    sequenceReturnModule = null;

    nextRound = {
        module: index,
        index: 0,
        choices: [],
        solved: false,
        tries: 0,
        message: "",
        resultType: ""
    };

    prepareNextQuestion();
    navigate("nextPractice");
}

function prepareNextQuestion() {
    if (!nextRound) {
        return;
    }

    const module = MODULES[nextRound.module];
    const target = nextRound.index + 1;

    if (target >= module.steps.length) {
        return;
    }

    const distractors = module.steps
        .map((_, index) => index)
        .filter(index =>
            index !== target &&
            index !== nextRound.index
        );

    shuffle(distractors);

    nextRound.choices = shuffle([
        target,
        ...distractors.slice(0, 2)
    ]);

    nextRound.solved = false;
    nextRound.tries = 0;
    nextRound.message = "";
    nextRound.resultType = "";
}

function renderNextPractice() {
    if (!nextRound) {
        $("#nextPracticeContent").innerHTML = `
            <article class="support-card">
                <p>Start guided ordering for the selected module.</p>

                <button
                    class="primary"
                    onclick="startNextPractice(${selectedModule})"
                >
                    Begin Practice
                </button>
            </article>
        `;

        return;
    }

    const round = nextRound;
    const module = MODULES[round.module];
    const total = module.steps.length - 1;

    if (round.index >= total) {
        $("#nextPracticeContent").innerHTML = `
            <article class="support-card">
                <span class="eyebrow">GUIDED ORDERING COMPLETE</span>

                <h2>${escapeHTML(module.name)}</h2>

                <p>
                    You practiced all ${total} step-to-step connections.
                    Now arrange the complete procedure independently.
                </p>

                <div class="button-row">
                    <button
                        class="primary"
                        onclick="startSequencingChallenge(${round.module}, true)"
                    >
                        Full Sequencing Challenge →
                    </button>

                    <button
                        class="secondary"
                        onclick="startNextPractice(${round.module})"
                    >
                        Practice Again
                    </button>
                </div>

                <p class="small-text">
                    This guided activity allows hints and retries.
                    It is separate from the module assessment.
                </p>
            </article>
        `;

        return;
    }

    const current = module.steps[round.index];

    $("#nextPracticeContent").innerHTML = `
        <article class="support-card">
            <span class="eyebrow">
                GUIDED ORDERING • ${round.index + 1} / ${total}
            </span>

            <h2>${escapeHTML(module.name)}</h2>

            <div class="next-layout">
                <figure>
                    ${diagramWithReference(round.module, round.index)}

                    <figcaption>
                        Current step: ${escapeHTML(current[0])}
                    </figcaption>
                </figure>

                <div>
                    <h3 id="nextQuestionTitle">
                        What comes immediately after this step?
                    </h3>

                    <p>${escapeHTML(current[1])}</p>

                    <div
                        class="next-options"
                        role="group"
                        aria-labelledby="nextQuestionTitle"
                    >
                        ${round.choices.map((choice, index) => `
                            <button
                                class="secondary next-option"
                                onclick="answerNextStep(${choice})"
                                ${round.solved ? "disabled" : ""}
                            >
                                <span>${String.fromCharCode(65 + index)}</span>
                                ${escapeHTML(module.steps[choice][0])}
                            </button>
                        `).join("")}
                    </div>

                    <div
                        id="nextFeedback"
                        class="feedback ${round.resultType}"
                        role="status"
                        ${round.message ? "" : "hidden"}
                    >
                        ${round.message}
                    </div>

                    <div class="button-row">
                        <button
                            class="secondary"
                            onclick="reviewNextCurrentStep()"
                        >
                            Review Current Step
                        </button>

                        <button
                            class="primary"
                            onclick="advanceNextQuestion()"
                            ${round.solved ? "" : "disabled"}
                        >
                            ${round.index === total - 1
                                ? "Finish Guided Practice"
                                : "Continue →"}
                        </button>
                    </div>
                </div>
            </div>
        </article>
    `;
}

function answerNextStep(choice) {
    if (
        !nextRound ||
        nextRound.solved ||
        !nextRound.choices.includes(choice)
    ) {
        return;
    }

    const round = nextRound;
    const module = MODULES[round.module];
    const target = round.index + 1;

    round.tries++;

    if (choice === target) {
        round.solved = true;
        round.resultType = "success";

        const record = recordFor(round.module);

        if (!record.nextSolved.includes(target)) {
            record.nextSolved.push(target);
        }

        round.message = `
            <strong>
                ✓ Correct: ${escapeHTML(module.steps[target][0])}
            </strong>

            <p>${escapeHTML(module.steps[target][1])}</p>
        `;

        saveProgress();
    } else {
        round.resultType = "warning";

        round.message = `
            <strong>Review your choice.</strong>

            <p>
                “${escapeHTML(module.steps[choice][0])}”
                belongs at position ${choice + 1}.
                Look for the step immediately after
                “${escapeHTML(module.steps[round.index][0])}”.
            </p>

            <p>
                <strong>Hint:</strong>
                ${escapeHTML(module.steps[target][2])}
            </p>

            <button
                class="secondary"
                onclick="addReviewStep(${round.module}, ${target}, this)"
            >
                Save Related Step for Review
            </button>
        `;
    }

    renderNextPractice();
}

function advanceNextQuestion() {
    if (!nextRound || !nextRound.solved) {
        return;
    }

    nextRound.index++;
    prepareNextQuestion();
    renderNextPractice();
}

function reviewNextCurrentStep() {
    if (!nextRound) {
        return;
    }

    selectedModule = nextRound.module;
    currentStep = nextRound.index;

    navigate("practice");
}

function resumeNextPractice() {
    if (!nextRound) {
        return;
    }

    selectedModule = nextRound.module;
    navigate("nextPractice");
}

/* =========================================================
   FULL SEQUENCING CHALLENGE
   ========================================================= */

function ensureSequence(index, reset = false) {
    const name = MODULES[index].name;

    if (!sequenceDrafts[name] || reset) {
        let order = MODULES[index].steps.map((_, step) => step);

        shuffle(order);

        // Avoid beginning with an already correct arrangement.
        if (order.every((value, position) => value === position)) {
            [order[0], order[1]] = [order[1], order[0]];
        }

        sequenceDrafts[name] = {
            order,
            checks: 0,
            complete: false,
            feedback: "",
            feedbackType: "",
            reviewStep: null
        };
    }

    return sequenceDrafts[name];
}

function startSequencingChallenge(
    index = selectedModule,
    reset = false
) {
    if (!MODULES[index]) {
        return;
    }

    selectedModule = index;
    selectedSequencePosition = null;
    sequenceReturnModule = null;

    ensureSequence(index, reset);
    navigate("challenge");
}

function selectChallengeModule(index) {
    startSequencingChallenge(index);
}

function renderSequence() {
    const module = MODULES[selectedModule];
    const draft = ensureSequence(selectedModule);

    $("#challengeContent").innerHTML = `
        ${moduleSelect(
            "challengeModule",
            selectedModule,
            "selectChallengeModule"
        )}

        <article class="panel">
            <div class="step-meta">
                <h2>${escapeHTML(module.name)}</h2>
                <span class="tag">${draft.checks} checks this round</span>
            </div>

            <button
                class="secondary"
                onclick="startNextPractice(${selectedModule})"
            >
                Guided Warm-up: What Comes Next?
            </button>

            <button
                class="secondary"
                onclick="showMistakeSimulation()"
            >
                🔎 Mistake Simulation
            </button>

            <div id="mistakeSimulation" class="mistake-simulation" hidden></div>

            <ol class="sequence-list">
                ${draft.order.map((step, position) => `
                    <li
                        class="sequence-card ${
                            selectedSequencePosition === position
                                ? "selected"
                                : ""
                        }"
                        draggable="${!draft.complete}"
                        ondragstart="dragSequence(event, ${position})"
                        ondragend="event.currentTarget.classList.remove('dragging')"
                        ondragover="event.preventDefault()"
                        ondrop="dropSequence(event, ${position})"
                    >
                        <span class="sequence-position">
                            ${position + 1}
                        </span>

                        <button
                            class="sequence-title"
                            onclick="selectSequence(${position})"
                            aria-pressed="${
                                selectedSequencePosition === position
                            }"
                            ${draft.complete ? "disabled" : ""}
                        >
                            ${escapeHTML(module.steps[step][0])}
                        </button>

                        <div class="sequence-controls">
                            <button
                                class="secondary"
                                aria-label="Move ${
                                    escapeHTML(module.steps[step][0])
                                } up"
                                onclick="moveSequence(${position}, -1)"
                                ${
                                    position === 0 || draft.complete
                                        ? "disabled"
                                        : ""
                                }
                            >
                                ↑
                            </button>

                            <button
                                class="secondary"
                                aria-label="Move ${
                                    escapeHTML(module.steps[step][0])
                                } down"
                                onclick="moveSequence(${position}, 1)"
                                ${
                                    position === draft.order.length - 1 ||
                                    draft.complete
                                        ? "disabled"
                                        : ""
                                }
                            >
                                ↓
                            </button>
                        </div>
                    </li>
                `).join("")}
            </ol>

            <div class="button-row">
                <button
                    class="primary"
                    onclick="checkSequence()"
                    ${draft.complete ? "disabled" : ""}
                >
                    ${draft.complete ? "✓ Sequence Completed" : "Check Sequence"}
                </button>

                <button
                    class="secondary"
                    onclick="startSequencingChallenge(${selectedModule}, true)"
                >
                    Shuffle / Try Again
                </button>

                <button
                    class="secondary"
                    onclick="startModule(${selectedModule})"
                >
                    Review Demonstration
                </button>
            </div>

            <div
                class="feedback ${draft.feedbackType}"
                role="status"
                ${draft.feedback ? "" : "hidden"}
            >
                ${draft.feedback}
            </div>

            ${
                Number.isInteger(draft.reviewStep) && !draft.complete
                    ? `
                        <div class="button-row">
                            <button
                                class="secondary"
                                onclick="reviewSequenceStep(${draft.reviewStep})"
                            >
                                Review Related Step
                            </button>

                            <button
                                class="secondary"
                                onclick="addReviewStep(
                                    ${selectedModule},
                                    ${draft.reviewStep},
                                    this
                                )"
                            >
                                Save Step for Review
                            </button>
                        </div>
                    `
                    : ""
            }

            ${draft.complete ? `
                <div class="button-row">
                    <button
                        class="primary"
                        onclick="openAssessment(${selectedModule})"
                    >
                        Take Module Assessment →
                    </button>
                </div>
            ` : ""}
        </article>
    `;
}

function showMistakeSimulation() {
    const module = MODULES[selectedModule];
    const target = $("#mistakeSimulation");

    if (!target) {
        return;
    }

    target.hidden = !target.hidden;

    if (target.hidden) {
        return;
    }

    target.innerHTML = `
        <h3>Can you identify the common mistake?</h3>
        <p>
            Compare the two simplified views. The first view represents an
            incomplete or incorrect construction. The second shows what the
            learner should check before finishing.
        </p>

        <div class="mistake-simulation-grid">
            <figure>
                ${diagramWithReference(selectedModule, Math.max(0, module.steps.length - 2))}
                <figcaption>Review the step before final inspection.</figcaption>
            </figure>

            <figure>
                ${diagramWithReference(selectedModule, module.steps.length - 1)}
                <figcaption>Expected construction for inspection.</figcaption>
            </figure>
        </div>

        <aside class="feedback warning">
            <strong>Common mistake:</strong>
            <p>${escapeHTML(module.mistake)}</p>
            <strong>Quality check:</strong>
            <p>${escapeHTML(module.check)}</p>
        </aside>

        <button class="secondary" onclick="markMistakeReviewed(this)">
            I understand this error
        </button>
    `;
}

function markMistakeReviewed(button) {
    const record = recordFor(selectedModule);
    record.mistakeReviewed = true;
    saveProgress();
    button.textContent = "✓ Error reviewed";
    button.disabled = true;
}

function clearSequenceFeedback(draft) {
    draft.feedback = "";
    draft.feedbackType = "";
    draft.reviewStep = null;
}

function swapSequence(first, second) {
    const draft = ensureSequence(selectedModule);

    if (
        draft.complete ||
        !Number.isInteger(first) ||
        !Number.isInteger(second) ||
        first < 0 ||
        second < 0 ||
        first >= draft.order.length ||
        second >= draft.order.length ||
        first === second
    ) {
        return;
    }

    [draft.order[first], draft.order[second]] = [
        draft.order[second],
        draft.order[first]
    ];

    selectedSequencePosition = null;
    clearSequenceFeedback(draft);
    renderSequence();
}

function selectSequence(position) {
    const draft = ensureSequence(selectedModule);

    if (draft.complete) {
        return;
    }

    if (selectedSequencePosition === null) {
        selectedSequencePosition = position;
        renderSequence();
        return;
    }

    if (selectedSequencePosition === position) {
        selectedSequencePosition = null;
        renderSequence();
        return;
    }

    swapSequence(selectedSequencePosition, position);
}

function moveSequence(position, direction) {
    swapSequence(position, position + direction);
}

function dragSequence(event, position) {
    if (ensureSequence(selectedModule).complete) {
        event.preventDefault();
        return;
    }

    event.dataTransfer.setData(
        "text/plain",
        JSON.stringify({
            module: selectedModule,
            position
        })
    );

    event.dataTransfer.effectAllowed = "move";
    event.currentTarget.classList.add("dragging");
}

function dropSequence(event, position) {
    event.preventDefault();

    try {
        const dragged = JSON.parse(
            event.dataTransfer.getData("text/plain")
        );

        if (dragged.module === selectedModule) {
            swapSequence(dragged.position, position);
        }
    } catch {
        // Ignore data that did not originate from a sequence card.
    }
}

function checkSequence() {
    const module = MODULES[selectedModule];
    const draft = ensureSequence(selectedModule);

    if (draft.complete) {
        return;
    }

    draft.checks++;

    const firstWrong = draft.order.findIndex(
        (step, position) => step !== position
    );

    if (firstWrong === -1) {
        draft.complete = true;
        draft.feedbackType = "success";
        draft.reviewStep = null;

        draft.feedback = `
            <strong>✓ Correct Sequence!</strong>

            <p>
                You arranged all ${module.steps.length} procedures
                in the expected order.
            </p>
        `;

        if (!completedModules.has(module.name)) {
            completedModules.add(module.name);
            points += 100;
            badges++;

            draft.feedback += `
                <p>First completion reward: 100 points and one badge.</p>
            `;
        } else {
            draft.feedback += `
                <p>
                    Practice completed again.
                    The first-completion reward has already been recorded.
                </p>
            `;
        }

        saveProgress();
    } else {
        const expected = module.steps[firstWrong];
        const placed = module.steps[draft.order[firstWrong]];

        draft.feedbackType = "warning";
        draft.reviewStep = firstWrong;

        draft.feedback = `
            <strong>Review Position ${firstWrong + 1}</strong>

            <p>
                You placed “${escapeHTML(placed[0])}” here.
                This position needs “${escapeHTML(expected[0])}”.
            </p>

            <p>${escapeHTML(expected[1])}</p>

            <p>
                ${
                    firstWrong > 0
                        ? `In this module, it follows
                           “${escapeHTML(module.steps[firstWrong - 1][0])}”.`
                        : "Prepare the conductors before moving to the later actions."
                }
            </p>
        `;
    }

    renderSequence();
}

function reviewSequenceStep(step) {
    if (!MODULES[selectedModule].steps[step]) {
        return;
    }

    sequenceReturnModule = selectedModule;
    currentStep = step;

    navigate("practice");
}

function returnToSequence() {
    if (sequenceReturnModule === null) {
        return;
    }

    selectedModule = sequenceReturnModule;
    sequenceReturnModule = null;

    // The existing order remains in sequenceDrafts.
    navigate("challenge");
}

/* =========================================================
   MY REVIEW LIST
   ========================================================= */

function addReviewStep(index, step, button = null) {
    if (!MODULES[index]?.steps[step]) {
        return;
    }

    const record = recordFor(index);

    if (!record.review.includes(step)) {
        record.review.push(step);
        record.review.sort((first, second) => first - second);
        saveProgress();
    }

    if (button) {
        button.textContent = "✓ Saved to My Review List";
        button.disabled = true;
    }

    notify("Step saved to My Review List in Progress.");
}

function removeReviewStep(index, step) {
    if (!MODULES[index]) {
        return;
    }

    const record = recordFor(index);

    record.review = record.review.filter(item => item !== step);

    saveProgress();
    renderProgress();
    notify("Step removed from your review list.");
}

function openReviewStep(index, step) {
    openPracticeStep(index, step);
}

function reviewListMarkup() {
    const entries = MODULES.flatMap((module, index) =>
        recordFor(index).review.map(step => ({
            module,
            index,
            step
        }))
    );

    const solvedConnections = MODULES.reduce(
        (total, _, index) => total + recordFor(index).nextSolved.length,
        0
    );

    const totalConnections = MODULES.reduce(
        (total, module) => total + module.steps.length - 1,
        0
    );

    return `
        <section class="panel review-list" aria-labelledby="reviewListTitle">
            <h2 id="reviewListTitle">
                My Review List
                <span class="tag">${entries.length} steps</span>
            </h2>

            <p>
                Save difficult steps with “Need More Practice”.
                Remove them from this list when you are ready.
            </p>

            ${entries.length ? `
                <ul>
                    ${entries.map(entry => `
                        <li class="review-item">
                            <div>
                                <strong>
                                    ${escapeHTML(entry.module.name)}
                                </strong>

                                <p>
                                    Step ${entry.step + 1}:
                                    ${escapeHTML(
                                        entry.module.steps[entry.step][0]
                                    )}
                                </p>
                            </div>

                            <div class="button-row">
                                <button
                                    class="primary"
                                    onclick="openReviewStep(
                                        ${entry.index},
                                        ${entry.step}
                                    )"
                                >
                                    Review Again
                                </button>

                                <button
                                    class="secondary"
                                    onclick="removeReviewStep(
                                        ${entry.index},
                                        ${entry.step}
                                    )"
                                >
                                    Remove from Review List
                                </button>
                            </div>
                        </li>
                    `).join("")}
                </ul>
            ` : `
                <aside class="note">
                    No saved steps yet. Use the save button in guided practice
                    whenever you need more review.
                </aside>
            `}

            <p class="small-text">
                Guided ordering:
                ${solvedConnections}/${totalConnections}
                step-to-step connections practiced correctly across your attempts.
                Hints and retries are allowed. This is separate from your
                assessment score.
            </p>
        </section>
    `;
}

/* =========================================================
   QUESTION BANK
   10 QUESTIONS PER MODULE / 80 TOTAL

   1 purpose
   1 identifying feature
   5 sequencing questions
   1 error diagnosis
   1 quality check
   1 preparation question
   ========================================================= */

function buildQuestionBank(moduleIndex) {
    const module = MODULES[moduleIndex];
    const questions = [];

    const otherModules = [1, 2, 3].map(offset =>
        MODULES[(moduleIndex + offset) % MODULES.length]
    );

    function add(question, correct, distractors, explanation) {
        const options = [
            { text: correct, correct: true },
            ...distractors.map(text => ({
                text,
                correct: false
            }))
        ];

        // Rotate the correct-answer position across questions.
        const shift = questions.length % options.length;

        for (let index = 0; index < shift; index++) {
            options.push(options.shift());
        }

        questions.push({
            question,
            options: options.map(option => option.text),
            answer: options.findIndex(option => option.correct),
            explanation
        });
    }

    add(
        `What is the purpose of the ${module.name}?`,
        module.purpose,
        otherModules.map(item => item.purpose),
        module.purpose
    );

    add(
        "Which feature identifies this configuration?",
        module.feature,
        otherModules.map(item => item.feature),
        module.feature
    );

    for (let index = 0; index < 5; index++) {
        const target = index === 4
            ? module.steps.length - 1
            : index;

        let question;

        if (target === 0) {
            question = "Which procedure comes first in this module?";
        } else if (target === module.steps.length - 1) {
            question = "Which procedure comes last in this module?";
        } else {
            question =
                `What comes immediately after “${module.steps[target - 1][0]}”?`;
        }

        add(
            question,
            module.steps[target][0],

            module.steps
                .filter((_, stepIndex) => stepIndex !== target)
                .slice(0, 3)
                .map(step => step[0]),

            `Step ${target + 1}: ${module.steps[target][1]}`
        );
    }

    add(
        "Which action is a construction error for this joint?",
        module.mistake,
        [
            "Preparing the specified working lengths.",
            "Following the demonstrated sequence.",
            "Checking the exposed construction before covering it."
        ],
        `Avoid this mistake: ${module.mistake}`
    );

    add(
        "Which observation belongs in the quality check?",
        module.check,
        otherModules.map(item => item.check),
        module.check
    );

    add(
        `Before practicing the ${module.name}, which preparation is appropriate?`,

        "Use disconnected training samples and the instructor-specified procedure.",

        [
            "Use a connected circuit to see whether the joint works.",
            "Choose strip lengths only from the size of the drawing.",
            "Ignore conductor damage if the final shape looks correct."
        ],

        "These diagrams are schematic. Practice uses disconnected samples and class specifications."
    );

    return questions;
}

const QUESTION_BANK = MODULES.map((_, index) =>
    buildQuestionBank(index)
);

/* =========================================================
   ASSESSMENT
   ========================================================= */

function quizDraft(index) {
    const key = `${quizMode}_${index}`;

    if (!quizDrafts[key]) {
        quizDrafts[key] = {
            answers: [],
            submitted: false,
            score: null
        };
    }

    return quizDrafts[key];
}

function openAssessment(index) {
    if (!MODULES[index]) {
        return;
    }

    quizModule = index;
    quizMode = "post";
    navigate("assessment");
}

function openDiagnostic(index) {
    if (!MODULES[index]) {
        return;
    }

    quizModule = index;
    quizMode = "pre";
    navigate("assessment");
}

function selectAssessmentModule(index) {
    quizModule = index;
    renderQuiz();
}

function selectQuizMode(mode) {
    if (mode !== "pre" && mode !== "post") {
        return;
    }

    quizMode = mode;
    renderQuiz();
}

function renderQuiz() {
    const module = MODULES[quizModule];
    const questions = QUESTION_BANK[quizModule];
    const draft = quizDraft(quizModule);

    const answered = draft.answers.filter(Number.isInteger).length;

    $("#quizBox").innerHTML = `
        ${moduleSelect(
            "assessmentModule",
            quizModule,
            "selectAssessmentModule"
        )}

        <div class="button-row assessment-modes">
            <button
                class="${quizMode === "pre" ? "primary" : "secondary"}"
                onclick="selectQuizMode('pre')"
            >
                Diagnostic Pre-Test
            </button>

            <button
                class="${quizMode === "post" ? "primary" : "secondary"}"
                onclick="selectQuizMode('post')"
            >
                Module Assessment
            </button>
        </div>

        <h2>${escapeHTML(module.name)}</h2>

        <p class="note">
            ${quizMode === "pre"
                ? "Diagnostic only: this baseline does not add points or badges."
                : "Post-assessment: this result contributes to the module progress record."}
        </p>

        <p>
            10 multiple-choice questions • Target: 8/10 (80%)
        </p>

        <p id="answerCount" aria-live="polite">
            ${answered} of 10 answered
        </p>

        ${questions.map((question, index) => `
            <fieldset class="quiz-question" id="question${index}">
                <legend>
                    ${index + 1}. ${escapeHTML(question.question)}
                </legend>

                ${question.options.map((option, optionIndex) => `
                    <label class="quiz-option">
                        <input
                            type="radio"
                            name="q${index}"
                            value="${optionIndex}"
                            onchange="chooseQuizAnswer(${index}, ${optionIndex})"
                            ${
                                draft.answers[index] === optionIndex
                                    ? "checked"
                                    : ""
                            }
                            ${draft.submitted ? "disabled" : ""}
                        >

                        <span>${escapeHTML(option)}</span>
                    </label>
                `).join("")}

                ${draft.submitted ? `
                    <div class="answer-review ${
                        draft.answers[index] === question.answer
                            ? "correct"
                            : ""
                    }">
                        <strong>
                            ${
                                draft.answers[index] === question.answer
                                    ? "✓ Correct"
                                    : "Review"
                            }
                            —
                            ${escapeHTML(question.options[question.answer])}
                        </strong>

                        <p>${escapeHTML(question.explanation)}</p>
                    </div>
                ` : ""}
            </fieldset>
        `).join("")}

        <button
            class="primary"
            onclick="submitQuiz()"
            ${draft.submitted ? "disabled" : ""}
        >
            ${draft.submitted
                ? "Assessment Submitted"
                : "Submit Assessment →"}
        </button>

        <div
            id="quizResult"
            class="feedback"
            role="status"
            ${draft.submitted ? "" : "hidden"}
        >
            ${draft.submitted ? quizResultMarkup() : ""}
        </div>

        ${draft.submitted ? `
            <div class="button-row">
                <button class="secondary" onclick="retryQuiz()">
                    Try Again
                </button>

                <button
                    class="secondary"
                    onclick="openLesson(${quizModule})"
                >
                    Review Lesson
                </button>

                <button
                    class="primary"
                    onclick="navigate('progress')"
                >
                    View Progress
                </button>
            </div>
        ` : ""}
    `;
}

function chooseQuizAnswer(question, answer) {
    const draft = quizDraft(quizModule);

    if (draft.submitted) {
        return;
    }

    draft.answers[question] = answer;

    $("#answerCount").textContent =
        `${draft.answers.filter(Number.isInteger).length} of 10 answered`;
}

function quizResultMarkup() {
    const draft = quizDraft(quizModule);
    const attempts = recordFor(quizModule).attempts.length;

    return `
        <strong>
            ${draft.score}/10 • ${draft.score * 10}%
            • ${draft.score >= 8 ? "Target Reached" : "Keep Practicing"}
        </strong>

        <p>
            Best score: ${bestScore(quizModule)}/10
            • Attempts: ${attempts}
        </p>

        ${quizMode === "pre" ? `
            <p>
                This pre-test is your baseline. Complete the lessons and take
                the module assessment later to compare your progress.
            </p>
        ` : ""}

        <p>
            Review the explanation beside each question.
            Assessment points follow your best score,
            so retries do not duplicate rewards.
        </p>
    `;
}

function submitQuiz() {
    const draft = quizDraft(quizModule);
    const questions = QUESTION_BANK[quizModule];

    if (draft.submitted) {
        return;
    }

    const missing = questions.findIndex((_, index) =>
        !Number.isInteger(draft.answers[index])
    );

    if (missing >= 0) {
        const result = $("#quizResult");

        result.hidden = false;
        result.textContent =
            "Please answer all 10 questions before submitting.";

        $(`#question${missing} input`).focus();
        return;
    }

    const previousBest = bestScore(quizModule);

    draft.score = questions.reduce(
        (total, question, index) =>
            total + (draft.answers[index] === question.answer ? 1 : 0),
        0
    );

    draft.submitted = true;

    const attempt = {
        score: draft.score,
        date: new Date().toISOString()
    };

    if (quizMode === "pre") {
        recordFor(quizModule).preScores.push(attempt);
    } else {
        recordFor(quizModule).attempts.push(attempt);
    }

    if (quizMode === "post") {
        points += Math.max(0, draft.score - previousBest) * 10;

        if (previousBest < 8 && draft.score >= 8) {
            badges++;
        }
    }

    saveProgress();
    renderQuiz();

    $("#quizResult").scrollIntoView({
        block: "center",
        behavior: "auto"
    });
}

function retryQuiz() {
    quizDrafts[`${quizMode}_${quizModule}`] = {
        answers: [],
        submitted: false,
        score: null
    };

    renderQuiz();

    $("#quizBox").scrollIntoView({
        block: "start",
        behavior: "auto"
    });
}

/* =========================================================
   PROGRESS
   ========================================================= */

function continueModule(index) {
    const module = MODULES[index];
    const record = recordFor(index);

    if (!record.lesson) {
        openLesson(index);
        return;
    }

    if (!record.preScores.length) {
        openDiagnostic(index);
        return;
    }

    if (record.viewed.length < module.steps.length) {
        const firstUnviewed = module.steps.findIndex(
            (_, step) => !record.viewed.includes(step)
        );

        openPracticeStep(index, firstUnviewed);
        return;
    }

    if (!completedModules.has(module.name)) {
        startSequencingChallenge(index);
        return;
    }

    openAssessment(index);
}

function nextActionLabel(index) {
    const module = MODULES[index];
    const record = recordFor(index);

    if (!record.lesson) {
        return "Read Lesson";
    }

    if (!record.preScores.length) {
        return "Take Diagnostic";
    }

    if (record.viewed.length < module.steps.length) {
        return "Continue Practice";
    }

    if (!completedModules.has(module.name)) {
        return "Practice Sequence";
    }

    return bestScore(index) >= 8
        ? "Review Assessment"
        : "Take Assessment";
}

function formatAttemptDate(date) {
    const parsed = new Date(date);

    return Number.isNaN(parsed.getTime())
        ? "Date unavailable"
        : parsed.toLocaleString();
}

function renderProgress() {
    const completedPaths = MODULES.filter(
        (_, index) => learningPathComplete(index)
    ).length;

    const readLessons = MODULES.filter(
        (_, index) => recordFor(index).lesson
    ).length;

    const attempted = MODULES
        .map((_, index) => index)
        .filter(index => recordFor(index).attempts.length > 0);

    const average = attempted.length
        ? Math.round(
            attempted.reduce(
                (total, index) => total + bestScore(index) * 10,
                0
            ) / attempted.length
        )
        : null;

    const diagnosticModules = MODULES
        .map((_, index) => index)
        .filter(index => recordFor(index).preScores.length > 0);

    const diagnosticAverage = diagnosticModules.length
        ? Math.round(
            diagnosticModules.reduce(
                (total, index) => total + recordFor(index).preScores.at(-1).score * 10,
                0
            ) / diagnosticModules.length
        )
        : null;

    $("#progressContent").innerHTML = `
        <div class="stats-grid">
            <article class="stat">
                <strong>${points}</strong>
                <span>Points</span>
            </article>

            <article class="stat">
                <strong>${completedPaths}/8</strong>
                <span>Learning paths completed</span>
            </article>

            <article class="stat">
                <strong>${badges}</strong>
                <span>Badges earned</span>
            </article>

            <article class="stat">
                <strong>${average === null ? "—" : average + "%"}</strong>
                <span>Average best assessment score</span>
            </article>

            <article class="stat">
                <strong>${diagnosticAverage === null ? "—" : diagnosticAverage + "%"}</strong>
                <span>Average diagnostic score</span>
            </article>
        </div>

        <article class="panel">
            <h2>${completedPaths} of 8 Learning Paths Completed</h2>

            <progress
                max="8"
                value="${completedPaths}"
                aria-label="Learning paths completed"
            ></progress>

            <p>
                ${readLessons}/8 lessons read
                • ${completedModules.size}/8 sequencing challenges completed
                • ${attempted.length}/8 assessments attempted
            </p>

            <p>
                A completed learning path requires its lesson marked read,
                every guided step viewed, correct sequencing,
                and an assessment score of at least 80%.
            </p>

            <p class="small-text">
                The average uses attempted modules only.
                Viewed steps record exposure, not verified practical skill.
                Progress is saved for this username on this browser.
            </p>
        </article>

        <div class="table-wrap">
            <table class="progress-table">
                <thead>
                    <tr>
                        <th>Module</th>
                        <th>Lesson</th>
                        <th>Steps Viewed</th>
                        <th>Sequence</th>
                        <th>Pre-Test → Best</th>
                        <th>Assessment</th>
                        <th>Practical Rubric</th>
                        <th>Latest / Best</th>
                        <th>Attempts</th>
                        <th>Next Action</th>
                    </tr>
                </thead>

                <tbody>
                    ${MODULES.map((module, index) => {
                        const record = recordFor(index);
                        const latest = record.attempts.at(-1);

                        const assessmentStatus = bestScore(index) >= 8
                            ? "Passed"
                            : latest
                                ? "Below target"
                                : "Not attempted";

                        return `
                            <tr>
                                <th scope="row">
                                    ${escapeHTML(module.name)}

                                    ${learningPathComplete(index) ? `
                                        <span class="completion-label">
                                            ✓ Learning path complete
                                        </span>
                                    ` : ""}
                                </th>

                                <td>${record.lesson ? "Read" : "Not yet"}</td>

                                <td>
                                    ${record.viewed.length}/${module.steps.length}
                                </td>

                                <td>
                                    ${completedModules.has(module.name)
                                        ? "Completed"
                                        : "Not yet"}
                                </td>

                                <td>
                                    ${record.preScores.length
                                        ? `${record.preScores.at(-1).score}/10 → ${bestScore(index)}/10`
                                        : `— → ${bestScore(index)}/10`}
                                </td>

                                <td>${assessmentStatus}</td>

                                <td>
                                    <button
                                        class="secondary small-button"
                                        onclick="openRubric(${index})"
                                    >
                                        ${rubricScore(index)}/5 Criteria
                                    </button>
                                </td>

                                <td>
                                    ${latest
                                        ? `${latest.score}/10 · ${bestScore(index)}/10`
                                        : "—"}
                                </td>

                                <td>${record.attempts.length}</td>

                                <td>
                                    <button
                                        class="secondary small-button"
                                        onclick="continueModule(${index})"
                                    >
                                        ${nextActionLabel(index)}
                                    </button>
                                </td>
                            </tr>
                        `;
                    }).join("")}
                </tbody>
            </table>
        </div>

        ${reviewListMarkup()}

        <details class="history">
            <summary>Assessment History</summary>

            ${attempted.length ? attempted.map(index => `
                <h3>${escapeHTML(MODULES[index].name)}</h3>

                <ol>
                    ${recordFor(index).attempts.map(attempt => `
                        <li>
                            ${escapeHTML(formatAttemptDate(attempt.date))}
                            — ${attempt.score}/10
                            (${attempt.score * 10}%)
                        </li>
                    `).join("")}
                </ol>
            `).join("") : `
                <p>No submitted assessments yet.</p>
            `}
        </details>
    `;
}

/* =========================================================
   INITIALIZATION
   ========================================================= */

function initialize() {
    $("#authDiagram").innerHTML = wireDiagram(0, 3);
    $("#homeDiagram").innerHTML = wireDiagram(1, 5);

    showAuthForm("login");
    restoreSession();
}

initialize();

/* SplicEd: paste once at the END of your existing script.js. */
(() => {
    "use strict";
    if (window.splicedInclusiveUIInstalled) return;
    window.splicedInclusiveUIInstalled = true;
    const originalNavigate = window.navigate;
    const originalProgress = window.renderProgress;
    const esc = escapeHTML;
    const count = index => rubricScore(index);

    // Change these paths when you add the actual member photographs.
    const team = [
        ["Andrei N. Valentin", "Leader", "AV", "images/andrei.jpg"],
        ["Chrizmhelo S. Santos", "Member", "CS", "images/chrizmhelo.jpg"],
        ["John Joven C. Baguisa", "Member", "JB", "images/john-joven.jpg"],
        ["Mark John G. Valenzuela", "Member", "MV", "images/mark-john.jpg"],
        ["Neinard D. Ignacio", "Member", "NI", "images/neinard.jpg"]
    ];
    const checklistItems = [
        ["safety", "Safety", "Use disconnected samples and follow the safety reminders."],
        ["preparation", "Preparation", "Prepare the conductor ends and the required tools."],
        ["sequence", "Step order", "Follow the procedure from the first step to the last."],
        ["technique", "Technique", "Position, bend, wrap, and trim as demonstrated."],
        ["inspection", "Final check", "Inspect the completed joint and its finishing method."]
    ];

    function focusOn(selector) {
        const element = $(selector);
        if (element) {
            element.focus({ preventScroll: true });
            element.scrollIntoView({ block: "nearest", behavior: "auto" });
        }
    }

    function navigate(page) {
        originalNavigate(page);
        if (currentPage !== page) return;
        $$("nav button[data-page]").forEach(button => {
            const active = button.dataset.page === page;
            button.classList.toggle("active", active);
            if (active) button.setAttribute("aria-current", "page");
            else button.removeAttribute("aria-current");
        });
        if (page === "practice") focusOn("#practiceStepTitle");
        if (page === "nextPractice") focusOn("#guidedTitle");
    }

    function openGuidedOrder(index = selectedModule) {
        if (nextRound?.module === index) {
            selectedModule = index;
            navigate("nextPractice");
        } else startNextPractice(index);
    }

    function requirementText() {
        const record = recordFor(selectedModule);
        const checked = record.completedSteps.includes(currentStep);
        if (!record.safetyAccepted && !checked)
            return "Confirm the safety reminder above, then tick ‘I understand this step’.";
        if (!record.safetyAccepted) return "Confirm the safety reminder above to continue.";
        if (!checked) return "When you are ready, tick ‘I understand this step’ to continue.";
        return currentStep === MODULES[selectedModule].steps.length - 1
            ? "Ready? Try choosing the next step in Guided Order."
            : "You can now move to the next step.";
    }

    function syncPractice() {
        const record = recordFor(selectedModule);
        const next = $("#practiceNext");
        if (!next) return;
        next.disabled = !record.safetyAccepted || !record.completedSteps.includes(currentStep);
        $("#practiceRequirement").textContent = requirementText();
        $("#safetyStatus").textContent = record.safetyAccepted ? "Confirmed" : "Please confirm";
        $("#practiceCheckedCount").textContent = `${record.completedSteps.length} of ${MODULES[selectedModule].steps.length} steps checked`;
        $("#practiceUnderstandingProgress").value = record.completedSteps.length;
    }

    function acceptSafety(value) {
        recordFor(selectedModule).safetyAccepted = Boolean(value);
        saveProgress();
        syncPractice();
    }

    function toggleStepComplete(value) {
        const record = recordFor(selectedModule);
        record.completedSteps = record.completedSteps.filter(step => step !== currentStep);
        if (value) record.completedSteps.push(currentStep);
        record.completedSteps.sort((a, b) => a - b);
        saveProgress();
        syncPractice();
        const status = $(`#practiceStepStatus${currentStep}`);
        if (status) status.textContent = value ? "Checked" : "Viewed";
    }

    function toggleSavedStep(index, step, button) {
        const record = recordFor(index);
        const saved = record.review.includes(step);
        record.review = saved ? record.review.filter(item => item !== step)
            : [...record.review, step].sort((a, b) => a - b);
        saveProgress();
        button.textContent = saved ? "Save Step for Review" : "Saved — Remove from Review";
        button.setAttribute("aria-pressed", String(!saved));
        notify(saved ? "Step removed from My Review List." : "Step saved. Find My Review List in Progress.");
    }

    function savedStepButton(index, step) {
        const saved = recordFor(index).review.includes(step);
        return `<button type="button" class="secondary" aria-pressed="${saved}"
            onclick="toggleSavedStep(${index}, ${step}, this)">
            ${saved ? "Saved — Remove from Review" : "Save Step for Review"}</button>`;
    }

    function renderPractice() {
        const module = MODULES[selectedModule];
        const record = recordFor(selectedModule);
        currentStep = Math.max(0, Math.min(currentStep, module.steps.length - 1));
        const step = module.steps[currentStep];
        const host = $("#practiceContent");
        const sameModule = host.dataset.module === String(selectedModule);
        const openPanels = new Set(sameModule
            ? [...host.querySelectorAll("details[open][data-panel]")].map(item => item.dataset.panel) : []);
        const open = panel => openPanels.has(panel) ? "open" : "";
        if (currentUser) {
            if (!record.viewed.includes(currentStep)) record.viewed.push(currentStep);
            record.lastStep = currentStep;
            saveProgress();
        }
        const hint = currentStep ? `Before this step: ${module.steps[currentStep - 1][0]}. ${module.steps[currentStep - 1][2]}`
            : `Your goal: ${module.purpose}`;
        const returnAction = sequenceReturnModule === selectedModule
            ? '<button type="button" class="secondary" onclick="returnToSequence()">Return to My Sequence</button>'
            : nextRound?.module === selectedModule
                ? '<button type="button" class="secondary" onclick="resumeNextPractice()">Return to Guided Order</button>' : "";

        host.dataset.module = selectedModule;
        host.innerHTML = `
            <div class="study-topbar">
                ${moduleSelect("practiceModule", selectedModule, "selectPractice")}
                ${returnAction}
            </div>
            <nav class="practice-step-strip panel" aria-label="Step-by-step procedure">
                <div class="practice-step-strip-heading"><div><span class="eyebrow">STEP-BY-STEP PROCEDURE</span><strong>Jump directly to any step</strong></div><span class="tag">Step ${currentStep + 1} of ${module.steps.length}</span></div>
                <div class="practice-step-buttons">${module.steps.map((item,index)=>`<button type="button" class="practice-step-button ${index===currentStep?"active":""}" aria-current="${index===currentStep?"step":"false"}" onclick="jumpStep(${index})"><b>Step ${index+1}</b>${learningMode === "guided" ? `<span>${esc(item[0])}</span>` : `<span>Recall step</span>`}</button>`).join("")}</div>
            </nav>
            <details class="study-fold safety-fold" data-panel="safety"
                ${!record.safetyAccepted ? "open" : open("safety")}>
                <summary>Safety reminder <span id="safetyStatus" class="study-status">
                    ${record.safetyAccepted ? "Confirmed" : "Please confirm"}</span></summary>
                <div class="study-fold-body">
                    <p>Use disconnected training wires, wear the required protective equipment,
                    and follow your instructor. Never practise on a live circuit.</p>
                    <label class="study-check"><input type="checkbox" onchange="acceptSafety(this.checked)"
                        ${record.safetyAccepted ? "checked" : ""}>
                        <span>I understand and will follow these safety reminders.</span></label>
                </div>
            </details>
            <article class="panel study-workbench">
                <div class="study-position">
                    <strong>Step ${currentStep + 1} of ${module.steps.length}</strong>
                    <span id="practiceCheckedCount">${record.completedSteps.length} of ${module.steps.length} steps checked</span>
                </div>
                <progress id="practiceUnderstandingProgress" max="${module.steps.length}" value="${record.completedSteps.length}"
                    aria-label="Steps marked understood in this module"></progress>
                <div class="study-columns">
                    <div class="study-demonstration">
                        <div class="wire-legend"><span class="wire-a">A: Main wire</span>
                            <span class="wire-b">B: Second / branch wire</span>
                            ${selectedModule === 7 ? '<span class="wire-c">C: Second branch</span>' : ""}</div>
                        <div class="visual-reference-workspace">
                            <div class="animated-illustration-panel">
                                <span class="visual-panel-label">Animated illustration</span>
                                <div id="visualStage" class="visual-stage">${wireDiagram(selectedModule, currentStep, true)}</div>
                            </div>
                            <figure class="finished-splice-reference">
                                <span class="visual-panel-label">Finished splice reference</span>
                                <img src="${esc(module.media?.photo || '')}"
                                    alt="${esc(module.media?.photoAlt || (module.name + ' finished splice reference'))}"
                                    loading="lazy"
                                    onerror="this.hidden=true; this.nextElementSibling.hidden=false;">
                                <div class="finished-photo-placeholder" hidden>
                                    <strong>${esc(module.name)}</strong>
                                    <span>Actual finished-splice photo</span>
                                    <small>Add the verified training-sample photo in <code>images/modules/</code>.</small>
                                </div>
                                <figcaption>Compare the simplified animation with the finished training sample.</figcaption>
                            </figure>
                        </div>
                        <p class="study-caption">The animation simplifies the motion. Use the finished-splice reference to connect the illustration with the physical wire.</p>
                        <button type="button" class="secondary" onclick="replayVisual()">Replay This Step</button>
                        ${playbackTimer ? `<div class="study-autoplay" role="status">Auto-play is on.
                            <button type="button" class="secondary" onclick="togglePlayback()">Pause Auto-play</button></div>` : ""}
                        <div class="visual-tools-inline" aria-label="Animation controls">
                            <div class="visual-tools-label"><strong>Animation controls</strong><span>Control the illustration while you study.</span></div>
                            <div class="study-tools">
                                <button type="button" id="pauseActionButton" class="secondary"
                                    aria-pressed="false" onclick="pauseAction()">Pause / Resume</button>
                                <button type="button" id="zoomButton" class="secondary"
                                    aria-pressed="false" onclick="toggleZoom()">Close-up</button>
                                <label class="study-speed" for="motionSpeed">Speed
                                    <select id="motionSpeed" onchange="setAnimationSpeed(Number(this.value))">
                                        ${[[0.5, "0.5×"], [1, "1×"], [1.5, "1.5×"]].map(([value, label]) =>
                                            `<option value="${value}" ${animationSpeed === value ? "selected" : ""}>${label}</option>`).join("")}
                                    </select>
                                </label>
                                <button type="button" id="playStepsButton" class="secondary"
                                    aria-pressed="${Boolean(playbackTimer)}" onclick="togglePlayback()">
                                    ${playbackTimer ? "Pause Steps" : "Play All Steps"}</button>
                            </div>
                        </div>
                        <details class="study-fold" data-panel="compare" ${open("compare")}>
                            <summary>Compare Before and After</summary>
                            <div class="study-fold-body before-after">
                                <figure><figcaption>Before this step</figcaption>${wireDiagram(selectedModule, currentStep - 1)}</figure>
                                <figure><figcaption>After this step</figcaption>${wireDiagram(selectedModule, currentStep)}</figure>
                            </div>
                        </details>
                    </div>
                    <div class="study-instruction">
                        <span class="eyebrow">${learningMode === "guided" ? "GUIDED MODE" : "INDEPENDENT MODE — REDUCED SUPPORT"}</span>
                        <h2 id="practiceStepTitle" tabindex="-1">${esc(step[0])}</h2>
                        ${learningMode === "guided" ? `
                            <p>${esc(step[1])}</p>
                            <aside class="note"><strong>Look for this</strong><p>${esc(step[2])}</p></aside>
                            <details class="study-fold" data-panel="hint" ${open("hint")}>
                                <summary>Show a Hint</summary><div class="study-fold-body"><p>${esc(hint)}</p></div>
                            </details>
                        ` : `
                            <p class="study-caption">Recall how this action should be performed before revealing additional support.</p>
                            <aside class="note independent-mode-note"><strong>Independent Recall</strong>
                                <p>Detailed explanations, look-for cues, and hints are hidden in Independent Mode.</p>
                                <button type="button" class="secondary" onclick="setLearningMode('guided')">I Need Support — Return to Guided Mode</button>
                            </aside>
                        `}
                        <label class="study-check"><input type="checkbox" onchange="toggleStepComplete(this.checked)"
                            ${record.completedSteps.includes(currentStep) ? "checked" : ""}>
                            <span>I understand this step.</span></label>
                        <div class="study-actions">
                            <button type="button" class="secondary" onclick="previousStep()" ${currentStep === 0 ? "disabled" : ""}>Previous Step</button>
                            <button type="button" id="practiceNext" class="primary" onclick="nextStep()"
                                aria-describedby="practiceRequirement"
                                ${!record.safetyAccepted || !record.completedSteps.includes(currentStep) ? "disabled" : ""}>
                                ${currentStep === module.steps.length - 1 ? "Try Guided Order" : "Next Step"}</button>
                        </div>
                        <p id="practiceRequirement" class="study-caption" role="status">${requirementText()}</p>
                        <div class="study-review">${savedStepButton(selectedModule, currentStep)}
                            <p class="study-caption">Saved steps are in Progress → My Review List.</p></div>
                    </div>
                </div>
            </article>
            <details class="study-fold" data-panel="resources" ${open("resources")}>
                <summary>Lesson, Tutorial and More Practice</summary>
                <div class="study-fold-body"><div class="study-actions">
                    <button type="button" class="secondary" onclick="openLesson(${selectedModule})">Read the Lesson</button>
                    <button type="button" class="secondary" onclick="openGuidedOrder(${selectedModule})">What Comes Next?</button>
                    </div>${mediaReferenceCard(selectedModule, true)}</div>
            </details>`;
        $("#visualStage").style.setProperty("--motion-duration", `${3 / animationSpeed}s`);
        zoomed = false;
    }

    function jumpStep(step) {
        if (!MODULES[selectedModule].steps[step]) return;
        stopPlayback();
        currentStep = step;
        renderPractice();
        focusOn("#practiceStepTitle");
    }

    function nextStep() {
        stopPlayback();
        const record = recordFor(selectedModule);
        if (!record.safetyAccepted || !record.completedSteps.includes(currentStep)) {
            syncPractice();
            return;
        }
        if (currentStep < MODULES[selectedModule].steps.length - 1) jumpStep(currentStep + 1);
        else openGuidedOrder(selectedModule);
    }

    // Preserve the existing auto-play engine; keep the visible pause control in sync.
    const originalStopPlayback = window.stopPlayback;
    function stopPlayback() {
        originalStopPlayback();
        $(".study-autoplay")?.remove();
    }

    function prepareNextQuestion() {
        if (!nextRound) return;
        const round = nextRound;
        const target = round.index + 1;
        if (target >= MODULES[round.module].steps.length) return;
        const others = MODULES[round.module].steps.map((_, index) => index)
            .filter(index => index !== target && index !== round.index);
        round.choices = shuffle([target, ...shuffle(others).slice(0, 2)]);
        round.choice = null;
        round.solved = false;
        round.tries = 0;
        round.message = "";
        round.resultType = "";
    }

    function renderNextPractice() {
        if (!nextRound) { startNextPractice(selectedModule); return; }
        const round = nextRound;
        const module = MODULES[round.module];
        const total = module.steps.length - 1;
        const host = $("#nextPracticeContent");
        const selector = moduleSelect("guidedModule", round.module, "openGuidedOrder");
        if (round.index >= total) {
            host.innerHTML = `${selector}<article class="panel study-finish">
                <h2 id="guidedTitle" tabindex="-1">Guided Order Complete</h2>
                <p>${esc(module.name)}</p>
                <p>You answered all ${total} questions. Next, try arranging all the steps in order.</p>
                <div class="study-actions"><button type="button" class="primary"
                    onclick="startSequencingChallenge(${round.module}, true)">Arrange All Steps</button>
                    <button type="button" class="secondary" onclick="startNextPractice(${round.module})">Practise Again</button></div>
                <p class="study-caption">This guided activity is recorded separately from your module assessment.</p>
            </article>`;
            return;
        }
        const current = module.steps[round.index];
        const completed = round.index + (round.solved ? 1 : 0);
        host.innerHTML = `${selector}<article class="panel study-workbench">
            <div class="study-position"><strong>Question ${round.index + 1} of ${total}</strong>
                <span>${completed} of ${total} answered correctly this round</span></div>
            <progress max="${total}" value="${completed}" aria-label="Guided questions completed this round"></progress>
            <div class="study-columns guided-columns">
                <div class="study-current"><span class="eyebrow">CURRENT STEP ${round.index + 1}</span>
                    <h2 id="guidedTitle" tabindex="-1">${esc(current[0])}</h2>
                    <figure>${diagramWithReference(round.module, round.index)}
                        <figcaption>${esc(current[2])}</figcaption></figure>
                    <p>${esc(current[1])}</p>
                </div>
                <div class="study-question">
                    <fieldset class="guided-answers" aria-describedby="guidedInstruction">
                        <legend>What comes next?</legend>
                        <p id="guidedInstruction">Select one answer, then choose Check Answer.</p>
                        ${round.choices.map((choice, index) => `<label class="guided-option ${round.choice === choice ? "is-selected" : ""}">
                            <input type="radio" name="guidedAnswer" value="${choice}"
                                onchange="chooseGuidedAnswer(${choice})" ${round.choice === choice ? "checked" : ""}
                                ${round.solved ? "disabled" : ""}>
                            <span><strong>${String.fromCharCode(65 + index)}.</strong> ${esc(module.steps[choice][0])}
                                ${round.solved && round.choice === choice ? '<small>Correct answer</small>' : ""}</span>
                        </label>`).join("")}
                    </fieldset>
                    <div id="nextFeedback" class="feedback ${round.resultType}" role="status" tabindex="-1"
                        ${round.message ? "" : "hidden"}>${round.message}</div>
                    <div class="study-actions guided-primary">
                        ${round.solved
                            ? `<button type="button" class="primary" onclick="advanceNextQuestion()">${round.index === total - 1 ? "Finish Guided Order" : "Next Question"}</button>`
                            : `<button type="button" id="checkGuidedAnswer" class="primary" onclick="checkGuidedAnswer()"
                                aria-describedby="guidedActionHint" ${Number.isInteger(round.choice) ? "" : "disabled"}>Check Answer</button>`}
                    </div>
                    <p id="guidedActionHint" class="study-caption" role="status">${round.solved ? "Continue when you are ready."
                        : Number.isInteger(round.choice) ? "Your answer is selected. Choose Check Answer when ready." : "Select an answer to enable Check Answer."}</p>
                    <details class="study-fold"><summary>Need Help with This Step?</summary>
                        <div class="study-fold-body"><div class="study-actions">
                            <button type="button" class="secondary" onclick="reviewGuidedStep(${round.index})">Review Current Step</button>
                            ${savedStepButton(round.module, round.index)}
                        </div><p class="study-caption">You can return to this question after reviewing.</p></div>
                    </details>
                </div>
            </div>
        </article>`;
    }

    function chooseGuidedAnswer(choice) {
        if (!nextRound || nextRound.solved || !nextRound.choices.includes(choice)) return;
        nextRound.choice = choice;
        nextRound.message = "";
        nextRound.resultType = "";
        $$(".guided-option").forEach(label => {
            label.classList.toggle("is-selected", Number(label.querySelector("input").value) === choice);
        });
        $("#nextFeedback").hidden = true;
        $("#checkGuidedAnswer").disabled = false;
        $("#guidedActionHint").textContent = "Your answer is selected. Choose Check Answer when ready.";
    }

    function checkGuidedAnswer() {
        if (Number.isInteger(nextRound?.choice)) answerNextStep(nextRound.choice);
    }

    function answerNextStep(choice) {
        if (!nextRound || nextRound.solved || !nextRound.choices.includes(choice)) return;
        const round = nextRound;
        const module = MODULES[round.module];
        const target = round.index + 1;
        round.choice = choice;
        round.tries++;
        if (choice === target) {
            round.solved = true;
            round.resultType = "success";
            if (!recordFor(round.module).nextSolved.includes(target)) recordFor(round.module).nextSolved.push(target);
            round.message = `<strong>Correct — ${esc(module.steps[target][0])}</strong><p>${esc(module.steps[target][1])}</p>`;
            saveProgress();
        } else {
            round.resultType = "warning";
            round.message = `<strong>Not yet — try another answer.</strong>
                <p>“${esc(module.steps[choice][0])}” is step ${choice + 1}. You need the step after
                    “${esc(module.steps[round.index][0])}”.</p>
                <p><strong>Hint:</strong> ${esc(module.steps[target][2])}</p>
                <div class="study-actions"><button type="button" class="secondary"
                    onclick="reviewGuidedStep(${target})">Review Related Step</button>
                    ${savedStepButton(round.module, target)}</div>`;
        }
        renderNextPractice();
        focusOn("#nextFeedback");
    }

    function advanceNextQuestion() {
        if (!nextRound?.solved) return;
        nextRound.index++;
        prepareNextQuestion();
        renderNextPractice();
        focusOn("#guidedTitle");
    }

    function reviewGuidedStep(step) {
        if (!nextRound || !MODULES[nextRound.module].steps[step]) return;
        selectedModule = nextRound.module;
        currentStep = step;
        sequenceReturnModule = null;
        navigate("practice");
    }

    let progressTab = "overview";
    function setProgressTab(tab) {
        progressTab = tab;
        renderProgress();
        const target = document.querySelector(`[data-progress-panel="${tab}"]`);
        if (target) target.focus({preventScroll:true});
    }

    function renderProgress() {
        originalProgress();
        $$("#progressContent th").forEach(cell => {
            if (cell.textContent.trim() === "Practical Rubric") cell.textContent = "Practical Checklist";
        });
        $$('#progressContent button[onclick^="openRubric("]').forEach((button, index) => {
            button.id = `openChecklist${index}`;
            button.textContent = `Open Checklist · ${count(index)}/5 checked`;
            button.setAttribute("aria-label", `Practical checklist for ${MODULES[index].name}: ${count(index)} of 5 items checked`);
        });

        const host = $("#progressContent");
        const children = [...host.children];
        const stats = children.find(el => el.classList?.contains("stats-grid"));
        const summary = children.find(el => el.matches?.("article.panel"));
        const tableWrap = children.find(el => el.classList?.contains("table-wrap"));
        const history = children.find(el => el.classList?.contains("history"));
        const review = children.find(el => el.textContent?.includes("My Review List"));
        const guidedText = children.find(el => el !== review && el.textContent?.includes("Guided ordering:"));

        const bucket = document.createElement("div");
        bucket.className = "progress-tab-shell";
        bucket.innerHTML = `<div class="progress-tabs" role="tablist" aria-label="Progress sections">
            <button role="tab" class="${progressTab==='overview'?'active':''}" aria-selected="${progressTab==='overview'}" onclick="setProgressTab('overview')">Overview</button>
            <button role="tab" class="${progressTab==='modules'?'active':''}" aria-selected="${progressTab==='modules'}" onclick="setProgressTab('modules')">Module Progress</button>
            <button role="tab" class="${progressTab==='review'?'active':''}" aria-selected="${progressTab==='review'}" onclick="setProgressTab('review')">Review & History</button>
        </div>
        <section class="progress-tab-panel" data-progress-panel="${progressTab}" tabindex="-1"></section>`;
        const panel=bucket.querySelector('.progress-tab-panel');
        const add=el=>{if(el) panel.appendChild(el)};
        if(progressTab==='overview'){ add(stats); add(summary); }
        if(progressTab==='modules'){ add(tableWrap); }
        if(progressTab==='review'){ add(review); add(guidedText); add(history); }
        host.replaceChildren(bucket);
    }

    function openRubric(index) {
        if (!MODULES[index]) return;
        const dialog = $("#rubricModal");
        const saved = recordFor(index).rubric || {};
        dialog.innerHTML = `<form onsubmit="event.preventDefault();saveRubric(${index})">
            <h2 id="checklistTitle">Practical Checklist</h2>
            <p><strong>${esc(MODULES[index].name)}</strong></p>
            <p id="checklistDescription">Tick the items you have checked during practical work.
                Use this for self-review or together with your instructor.</p>
            <fieldset class="checklist-items"><legend>Practical work checks</legend>
                ${checklistItems.map(([key, title, description]) => `<label class="study-check">
                    <input type="checkbox" data-rubric="${key}" onchange="updateChecklistCount()" ${saved[key] ? "checked" : ""}>
                    <span><strong>${title}</strong><br>${description}</span></label>`).join("")}
            </fieldset>
            <p id="checklistCount" role="status">${count(index)} of 5 items checked.</p>
            <div class="study-actions"><button type="submit" class="primary">Save Checklist</button>
                <button type="button" class="secondary" onclick="closeRubric()">Cancel</button></div>
            <p class="study-caption">This checklist does not change your assessment score.</p>
        </form>`;
        dialog.showModal();
    }

    function updateChecklistCount() {
        $("#checklistCount").textContent = `${$$("#rubricModal input:checked").length} of 5 items checked.`;
    }

    function saveRubric(index) {
        const saved = {};
        $$("#rubricModal [data-rubric]").forEach(input => { saved[input.dataset.rubric] = input.checked; });
        // Retain the old storage key so existing saved checkmarks still load.
        recordFor(index).rubric = saved;
        saveProgress();
        closeRubric();
        renderProgress();
        focusOn(`#openChecklist${index}`);
        notify(`Practical checklist saved: ${count(index)} of 5 items checked.`);
    }

    function closeRubric() { $("#rubricModal").close(); }

    Object.assign(window, {
        navigate, openGuidedOrder, renderPractice, acceptSafety, toggleStepComplete,
        toggleSavedStep, jumpStep, nextStep, stopPlayback, prepareNextQuestion,
        renderNextPractice, chooseGuidedAnswer, checkGuidedAnswer, answerNextStep,
        advanceNextQuestion, reviewGuidedStep, renderProgress, setProgressTab, openRubric,
        saveRubric, closeRubric, updateChecklistCount
    });

    // Give Guided Order its own active navigation state and resume an existing round.
    const guidedNav = $$("nav button").find(button => button.textContent.trim() === "Guided Order");
    if (guidedNav) {
        guidedNav.dataset.page = "nextPractice";
        guidedNav.setAttribute("onclick", "openGuidedOrder(selectedModule)");
    }
    $("#practice .section-heading h1").textContent = "Step-by-Step Practice";
    $("#practice .section-heading p").textContent = "Study the diagram, read the instruction, then move to the next step at your own pace.";
    $("#nextPractice .section-heading p").textContent = "Choose which step comes next. You can review and try again whenever you need to.";
    $("#practice").classList.add("study-page");
    $("#nextPractice").classList.add("study-page");

    // A native dialog provides keyboard focus containment and Escape to close.
    const dialog = document.createElement("dialog");
    dialog.id = "rubricModal";
    dialog.className = "practical-checklist-dialog";
    dialog.setAttribute("aria-labelledby", "checklistTitle");
    dialog.setAttribute("aria-describedby", "checklistDescription");
    $("#rubricModal").replaceWith(dialog);

    $("#about .team-grid").innerHTML = team.map(([name, role, initials, path]) => `
        <article class="team-card ${role === "Leader" ? "leader-card" : ""}">
            <div class="team-photo"><span aria-hidden="true">${initials}</span>
                <img src="${esc(path)}" alt="${esc(name)}" width="160" height="160"
                    loading="lazy" decoding="async" onerror="this.hidden=true"></div>
            <span class="eyebrow">${role}</span><h3>${esc(name)}</h3>
        </article>`).join("");

    // Refresh a currently open page when this update is pasted into the full source.
    if (currentUser && ["practice", "nextPractice", "progress"].includes(currentPage)) navigate(currentPage);
})();


/* =========================================================
   DIFFERENTIATION + EDUCATOR SUPPORT
   ========================================================= */
function setLearningMode(mode) {
    if (!["guided", "independent"].includes(mode)) return;
    learningMode = mode;
    localStorage.setItem("splicedLearningMode", mode);
    notify(mode === "guided"
        ? "Guided Mode enabled — prompts, hints, and detailed step support are available."
        : "Independent Mode enabled — prompts and explanatory cues are reduced for procedural recall.");
    if (currentPage === "learn" && $("#lessonViewer") && !$("#lessonViewer").hidden) openLesson(selectedModule);
    if (currentPage === "practice") renderPractice();
}

function localProfileNames() {
    const profiles = readJSON(PROFILES_KEY, []);
    return Array.isArray(profiles) ? profiles.map(p => typeof p === "string" ? p : (p.username || p.name)).filter(Boolean) : [];
}

function summarizeProgressFor(username) {
    const saved = readJSON(progressKey(username), {});
    const learning = saved.learning || {};
    const completedSequences = new Set(Array.isArray(saved.completedModules) ? saved.completedModules : []);
    let lessons = 0, viewed = 0, totalSteps = 0, sequencing = 0, assessments = 0, scoreSum = 0;
    MODULES.forEach(module => {
        const record = learning[module.name] || {};
        if (record.lesson) lessons++;
        viewed += Array.isArray(record.viewed) ? record.viewed.length : 0;
        totalSteps += module.steps.length;
        if (completedSequences.has(module.name)) sequencing++;
        const attempts = Array.isArray(record.attempts) ? record.attempts : [];
        if (attempts.length) {
            const scores = attempts.map(a => Number(a.score)).filter(Number.isFinite);
            if (scores.length) { assessments++; scoreSum += Math.max(...scores); }
        }
    });
    return { username, lessons, viewed, totalSteps, sequencing, assessments,
        averageScore: assessments ? Number((scoreSum / assessments).toFixed(1)) : null };
}

function renderTeacherProgress() {
    const host = $("#teacherProgressContent");
    if (!host) return;
    const names = localProfileNames();
    if (!names.length) {
        host.innerHTML = `<div class="panel"><p>No learner profiles are saved on this browser yet.</p><p class="small-text">This prototype reads local progress only from profiles stored on the current device and browser.</p></div>`;
        return;
    }
    const rows = names.map(summarizeProgressFor);
    host.innerHTML = `<div class="teacher-table-wrap"><table class="teacher-table"><thead><tr><th>Learner</th><th>Lessons</th><th>Viewed Steps</th><th>Sequencing</th><th>Assessments</th><th>Avg. Best Score</th></tr></thead><tbody>${rows.map(r => `<tr><td>${escapeHTML(r.username)}</td><td>${r.lessons}/${MODULES.length}</td><td>${r.viewed}/${r.totalSteps}</td><td>${r.sequencing}/${MODULES.length}</td><td>${r.assessments}/${MODULES.length}</td><td>${r.averageScore === null ? "—" : `${r.averageScore}/10`}</td></tr>`).join("")}</tbody></table></div><aside class="note"><strong>Prototype Limitation</strong><p>This view summarizes learner progress saved on the current browser and device only. It is not an authenticated cross-device or real-time learning analytics system.</p></aside>`;
}

function exportLocalProgressCSV() {
    const rows = localProfileNames().map(summarizeProgressFor);
    if (!rows.length) { notify("No local learner progress to export."); return; }
    const header = ["Learner", "Lessons Completed", "Viewed Steps", "Total Steps", "Sequencing Completed", "Assessments", "Average Best Score"];
    const csvRows = [header, ...rows.map(r => [r.username, r.lessons, r.viewed, r.totalSteps, r.sequencing, r.assessments, r.averageScore ?? ""])];
    const csv = csvRows.map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], {type:"text/csv;charset=utf-8"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "SplicEd_Local_Progress.csv";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}/* =========================================================
   SPLICED — REAL SUB-TABS
   Learn: Modules / Open Lesson
   Teacher Guide: Teaching Guide / Local Progress
   ========================================================= */

let learnTab = "modules";
let teacherTab = "guide";

/* -------------------------
   LEARN TABS
   ------------------------- */

function setLearnTab(tab) {
    if (!["modules", "lesson"].includes(tab)) return;

    learnTab = tab;

    const modulesPanel = document.getElementById("lessonCards");
    const lessonPanel = document.getElementById("lessonViewer");

    const modulesButton = document.querySelector(
        '[data-learn-tab="modules"]'
    );

    const lessonButton = document.querySelector(
        '[data-learn-tab="lesson"]'
    );

    if (!modulesPanel || !lessonPanel) return;

    const showingModules = tab === "modules";

    modulesPanel.hidden = !showingModules;
    lessonPanel.hidden = showingModules;

    if (modulesButton) {
        modulesButton.classList.toggle("active", showingModules);
        modulesButton.setAttribute(
            "aria-selected",
            String(showingModules)
        );
    }

    if (lessonButton) {
        lessonButton.classList.toggle("active", !showingModules);
        lessonButton.setAttribute(
            "aria-selected",
            String(!showingModules)
        );
    }
}


/* -------------------------
   TEACHER GUIDE TABS
   ------------------------- */

function setTeacherTab(tab) {
    if (!["guide", "progress"].includes(tab)) return;

    teacherTab = tab;

    const guidePanel = document.getElementById(
        "teacherGuidePanel"
    );

    const progressPanel = document.getElementById(
        "teacherProgressPanel"
    );

    const guideButton = document.querySelector(
        '[data-teacher-tab="guide"]'
    );

    const progressButton = document.querySelector(
        '[data-teacher-tab="progress"]'
    );

    if (!guidePanel || !progressPanel) return;

    const showingGuide = tab === "guide";

    guidePanel.hidden = !showingGuide;
    progressPanel.hidden = showingGuide;

    if (guideButton) {
        guideButton.classList.toggle("active", showingGuide);
        guideButton.setAttribute(
            "aria-selected",
            String(showingGuide)
        );
    }

    if (progressButton) {
        progressButton.classList.toggle(
            "active",
            !showingGuide
        );

        progressButton.setAttribute(
            "aria-selected",
            String(!showingGuide)
        );
    }

    if (!showingGuide) {
        renderTeacherProgress();
    }
}


/* =========================================================
   CONNECT EXISTING LESSON FUNCTIONS TO NEW TABS
   ========================================================= */

const splicedOriginalOpenLesson = window.openLesson;

window.openLesson = function(index) {
    if (!MODULES[index]) return;

    /*
       Run your existing Open Lesson function first.
       This preserves all existing lesson content,
       diagrams, objectives, media, etc.
    */
    splicedOriginalOpenLesson(index);

    /*
       Then switch the Learn page to Open Lesson.
    */
    learnTab = "lesson";
    setLearnTab("lesson");
};


const splicedOriginalCloseLesson = window.closeLesson;

window.closeLesson = function() {
    /*
       Run the existing closeLesson logic.
    */
    splicedOriginalCloseLesson();

    /*
       Return to Modules tab.
    */
    learnTab = "modules";
    setLearnTab("modules");
};


/* =========================================================
   KEEP TAB STATE WHEN NAVIGATING
   ========================================================= */

const splicedOriginalNavigateTabs = window.navigate;

window.navigate = function(page) {

    splicedOriginalNavigateTabs(page);

    if (page === "learn") {

        /*
           If no lesson is currently open,
           always show Modules.
        */
        const viewer = document.getElementById(
            "lessonViewer"
        );

        if (!viewer || !viewer.innerHTML.trim()) {
            learnTab = "modules";
        }

        setLearnTab(learnTab);
    }

    if (page === "teacher") {
        setTeacherTab(teacherTab);
    }
};


/* =========================================================
   INITIAL TAB STATE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        setLearnTab("modules");
        setTeacherTab("guide");

    }
);


/* =========================================================
   SPLICED — FINAL SUB-TAB SAFETY
   Prevent blank Open Lesson panel before a module is opened.
   ========================================================= */
(() => {
    "use strict";

    const previousSetLearnTab = window.setLearnTab;

    window.setLearnTab = function(tab) {
        const viewer = document.getElementById("lessonViewer");

        if (tab === "lesson" && (!viewer || !viewer.innerHTML.trim())) {
            tab = "modules";
            if (typeof notify === "function") {
                notify("Open a module first to view its lesson.");
            }
        }

        return previousSetLearnTab(tab);
    };
})();
