/* =========================================================
   SPLICED — COMPLETE JAVASCRIPT
   Lessons / Diagrams / Guided Ordering / Sequencing
   Assessments / Review List / Progress
   ========================================================= */

"use strict";

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

        purpose:
            "Join conductor ends into one shared twisted tail.",

        feature:
            "The prepared ends point in the same direction and twist together.",

        mistake:
            "Twisting only one wire around a straight partner instead of twisting both together.",

        check:
            "Both conductors share an even twist without a loose end.",

        video: {
            title: "How to make a Rat Tail Joint",
            id: "rKo9cAE6mow",
            focus:
                "Observe how the prepared ends are brought together and twisted."
        },

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

        purpose:
            "Extend two conductor ends using a compact in-line splice.",

        feature:
            "Each free end wraps around the opposite standing conductor.",

        mistake:
            "Wrapping one side and leaving the other side unsecured.",

        check:
            "Both sides have close, orderly wraps and the standing wires remain in line.",

        video: {
            title: "How to make a Western Union Short Tie Splice",
            id: "xDdd0nKSdaM",
            focus:
                "Focus on the compact interlock and the wraps on both sides."
        },

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

        purpose:
            "Extend conductor ends using an elongated central tie.",

        feature:
            "A longer central interlock distinguishes it from the short-tie form.",

        mistake:
            "Making a compact center when the lesson requires a long tie.",

        check:
            "The elongated center and both sets of end wraps are present.",

        video: {
            title: "How to make a Western Union Long Tie Splice",
            id: "yvfDbxJu6JE",
            focus:
                "Compare the longer central tie with the short-tie module."
        },

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

        purpose:
            "Connect one branch conductor to a continuous main conductor.",

        feature:
            "One tap wraps around the exposed middle of an uncut main.",

        mistake:
            "Cutting the main conductor instead of exposing its middle section.",

        check:
            "The main stays continuous and the branch turns sit close together.",

        video: {
            title:
                "Plain Tap Joint | Tap Joint | Tee Joint | Electrical Wire Joints",
            id: "0iLMnMxsfOA",
            focus:
                "Follow the branch position and the turns around the main conductor."
        },

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

        purpose:
            "Form a branch connection with a locking knot before the turns.",

        feature:
            "The branch forms a locking loop around the main before wrapping.",

        mistake:
            "Skipping the knot and making only a plain tap.",

        check:
            "The locking knot is present and the following turns are orderly.",

        video: {
            title: "How to make a Knotted Tap Joint",
            id: "LgutDYme_Ks",
            focus:
                "Watch the locking knot before the branch wrapping is completed."
        },

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

        purpose:
            "Study a tap configuration with a bent branch and short wrapped section.",

        feature:
            "A bent branch passes over the main before the tap turns are formed.",

        mistake:
            "Beginning the turns before positioning and bending the branch.",

        check:
            "The branch bend is formed and the turns engage the main.",

        video: {
            title: "How to make an Aerial Tap Joint",
            id: "vAGdDlnrJ-Y",
            focus:
                "Observe the branch bend and the following tap turns."
        },

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

        purpose:
            "Join a fixture lead to a supporting branch conductor in a training sample.",

        feature:
            "The fixture lead wraps first; the supporting conductor then folds over the turns.",

        mistake:
            "Forgetting to fold the supporting conductor over the initial wraps.",

        check:
            "The fixture lead is wrapped and the supporting end is folded as demonstrated.",

        video: {
            title: "FIXTURE JOINT/SPLICE",
            id: "OqFfzMWpRaU",
            focus:
                "Look for the fixture-wire wraps and the supporting conductor folded over them."
        },

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

        purpose:
            "Connect two branch conductors beside one another on one main.",

        feature:
            "Two separate taps occupy adjacent locations on a continuous main.",

        mistake:
            "Forming only the first tap and leaving the second branch unsecured.",

        check:
            "Both adjacent taps are complete and the main remains uncut.",

        video: {
            title: "How to make an Ordinary Cross Joint",
            id: "_alUDl-Td4M",
            focus:
                "Identify the two adjacent branch connections on the main conductor."
        },

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

const ACCOUNT_KEY = "splicedUser";
const ACCOUNTS_KEY = "splicedAccountsV2";
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

function getAccounts() {
    const stored = readJSON(ACCOUNTS_KEY, []);

    const accounts = Array.isArray(stored)
        ? stored.filter(user =>
            user &&
            typeof user.username === "string" &&
            typeof user.password === "string"
        )
        : [];

    // Read the account used by the previous SplicEd version.
    const legacy = readJSON(ACCOUNT_KEY);

    if (
        legacy &&
        typeof legacy.username === "string" &&
        typeof legacy.password === "string" &&
        !accounts.some(user =>
            user.username.toLowerCase() === legacy.username.toLowerCase()
        )
    ) {
        accounts.push(legacy);
    }

    return accounts;
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

function showAuthForm(type) {
    const login = type === "login";

    $("#loginForm").hidden = !login;
    $("#registerForm").hidden = login;

    $("#loginTab").classList.toggle("active", login);
    $("#registerTab").classList.toggle("active", !login);

    $("#loginMessage").textContent = "";
    $("#registerMessage").textContent = "";
}

function formMessage(id, message, type = "error") {
    const element = document.getElementById(id);

    element.textContent = message;
    element.className = `form-message ${type}`;
}

function togglePassword(id, button) {
    const input = document.getElementById(id);
    const show = input.type === "password";

    input.type = show ? "text" : "password";
    button.textContent = show ? "Hide" : "Show";

    button.setAttribute(
        "aria-label",
        show ? "Hide password" : "Show password"
    );
}

function handleRegister(event) {
    event.preventDefault();

    const username = $("#registerUsername").value.trim();
    const confirmUsername = $("#confirmUsername").value.trim();

    const password = $("#registerPassword").value;
    const confirmPassword = $("#confirmPassword").value;

    const gender = $("#gender").value;
    const email = $("#personalEmail").value.trim();

    if (username.length < 3) {
        formMessage(
            "registerMessage",
            "Username must contain at least 3 characters."
        );
        return;
    }

    if (username.toLowerCase() !== confirmUsername.toLowerCase()) {
        formMessage("registerMessage", "Usernames do not match.");
        return;
    }

    if (password.length < 6) {
        formMessage(
            "registerMessage",
            "Password must contain at least 6 characters."
        );
        return;
    }

    if (password !== confirmPassword) {
        formMessage("registerMessage", "Passwords do not match.");
        return;
    }

    const accounts = getAccounts();

    if (
        accounts.some(user =>
            user.username.toLowerCase() === username.toLowerCase()
        )
    ) {
        formMessage(
            "registerMessage",
            "This username is already registered on this browser."
        );
        return;
    }

    accounts.push({
        username,
        password,
        gender,
        email,
        createdAt: new Date().toISOString()
    });

    if (!writeJSON(ACCOUNTS_KEY, accounts)) {
        return;
    }

    $("#registerForm").reset();
    $("#loginUsername").value = username;

    showAuthForm("login");

    formMessage(
        "loginMessage",
        "Account created. You can now log in.",
        "success"
    );
}

function handleLogin(event) {
    event.preventDefault();

    const username = $("#loginUsername").value.trim();
    const password = $("#loginPassword").value;

    const account = getAccounts().find(user =>
        user.username.toLowerCase() === username.toLowerCase() &&
        user.password === password
    );

    if (!account) {
        formMessage(
            "loginMessage",
            "Incorrect username or password."
        );
        return;
    }

    currentUser = account;

    writeJSON(SESSION_KEY, {
        username: account.username
    });

    loadProgress();
    openApplication();
}

function forgotPassword() {
    formMessage(
        "loginMessage",
        "This browser-only prototype does not provide email password recovery. Ask your instructor for assistance or use another demo account."
    );
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
    quizDrafts = {};
    sequenceDrafts = {};
    nextRound = null;
    sequenceReturnModule = null;

    $("#mainApplication").hidden = true;
    $("#authPage").hidden = false;

    $("#loginPassword").value = "";
    showAuthForm("login");
}

function restoreSession() {
    const session = readJSON(SESSION_KEY);

    if (!session || typeof session.username !== "string") {
        return;
    }

    const account = getAccounts().find(user =>
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
                    ${wireDiagram(index, module.steps.length - 1)}
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

function tutorialCard(index, compact = false) {
    const video = MODULES[index].video;
    const url = `https://www.youtube.com/watch?v=${video.id}`;

    return `
        <aside class="tutorial-card">
            <span class="eyebrow">RELATED VIDEO TUTORIAL</span>

            <h3>${escapeHTML(video.title)}</h3>
            <p>${escapeHTML(video.focus)}</p>

            <a
                class="tutorial-link"
                href="${url}"
                target="_blank"
                rel="noopener noreferrer"
            >
                ▶ Watch on YouTube
                <span>(new tab)</span>
            </a>

            ${compact ? "" : `
                <p class="small-text">
                    Internet connection required. Pause and replay alongside
                    the lesson. External demonstrations may use different
                    dimensions or turn counts; follow your instructor's
                    specifications.
                </p>
            `}
        </aside>
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

        <div class="lesson-layout">
            <figure>
                ${wireDiagram(index, module.steps.length - 1)}
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

        ${tutorialCard(index)}

        <h2>Read the Procedure</h2>

        <div class="lesson-steps">
            ${module.steps.map((step, stepIndex) => `
                <details ${stepIndex === 0 ? "open" : ""}>
                    <summary>
                        ${stepIndex + 1}. ${escapeHTML(step[0])}
                    </summary>

                    <div class="lesson-step-body">
                        <figure>
                            ${wireDiagram(index, stepIndex)}
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

        <p class="small-text">
            Terminology reference:
            <a
                href="https://sites.google.com/bicol-u.edu.ph/tle7/lesson-1/learning-outcome-1/common-wire-splices-and-joints"
                target="_blank"
                rel="noopener noreferrer"
            >
                TLE 7 — Common Wire Splices and Joints
            </a>.
            These simplified learning diagrams follow the module sequence.
            Exact construction follows the instructor's demonstration.
        </p>

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
                    <h3 class="practice-section-title">Step Navigation</h3>

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

                ${tutorialCard(selectedModule, true)}
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
                    ${wireDiagram(round.module, round.index)}

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
                ${wireDiagram(selectedModule, Math.max(0, module.steps.length - 2))}
                <figcaption>Review the step before final inspection.</figcaption>
            </figure>

            <figure>
                ${wireDiagram(selectedModule, module.steps.length - 1)}
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
