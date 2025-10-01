// ---------- BUTTONS CONFIG ----------
const scripts = [
    { name: "Grow A Garden Trade Freeze", code: `loadstring(game:HttpGet("https://pastefy.app/n0IQebNb/raw"))()` },
    { name: "Blox Fruits Trade Freeze", code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/XXUltimateScriptsXX/BloxFruits/refs/heads/main/TradeFreeze"))()` },
    { name: "Steal A Brainrot Spawner", code: `loadstring(game:HttpGet('https://paste.rs/0dDeC'))()` },
    { name: "FeUniversal (Beta, supports 2 games rn, **BEST FOR TROLLING**)", code: `loadstring(game:HttpGet('https://raw.githubusercontent.com/XXUltimateScriptsXX/FeUniversal/refs/heads/main/XxScripthubxXFeV4DECOMPILED'))()` },
    { name: "CoolKid Clan", code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/cfsmi2/c00lguiv1/refs/heads/main/Main.lua", true))()` },
    { name: "Speed Hub X (supports alot of games)", code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/AhmadV99/Speed-Hub-X/main/Speed%20Hub%20X.lua", true))()` },
    { name: "Best Steal A Brainrot Script", code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/XXUltimateScriptsXX/UglyScriptsOnTop/refs/heads/main/UglyOnTopREMADE", true))()` },
];

// ---------- CREATE SCRIPT BUTTONS ----------
const container = document.querySelector(".buttons-container");

scripts.forEach(script => {
    const btn = document.createElement("button");
    btn.classList.add("script-button");
    btn.textContent = script.name;

    btn.addEventListener("click", () => {
        try {
            copyToClipboard(script.code);
            showToast("Copied!");
        } catch (e) {
            console.error("Error executing script:", e);
            showToast("Script Error!");
        }
    });

    container.appendChild(btn);
});

// ---------- TOAST ----------
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.style.opacity = "1";
    setTimeout(() => { toast.style.opacity = "0"; }, 2000);
}

// ---------- COPY TO CLIPBOARD ----------
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try { document.execCommand("copy"); } catch {}
    document.body.removeChild(textarea);
}

// ---------- FADING BACKGROUND ----------
const colors = [[0,0,0], [255,255,255]];

function updateBackground() {
    const ratio = (Math.sin(Date.now() / 3000) + 1) / 2;
    const r = Math.round(colors[0][0]*(1-ratio) + colors[1][0]*ratio);
    const g = Math.round(colors[0][1]*(1-ratio) + colors[1][1]*ratio);
    const b = Math.round(colors[0][2]*(1-ratio) + colors[1][2]*ratio);
    document.body.style.background = `linear-gradient(to bottom, rgb(${r},${g},${b}), rgb(${r},${g},${b}))`;
    requestAnimationFrame(updateBackground);
}
updateBackground();

// ---------- HOW TO USE MENU ----------
const howToUseButton = document.getElementById("howToUseButton");
const howToUseMenu = document.getElementById("howToUseMenu");
const closeMenuButton = document.getElementById("closeMenuButton");

howToUseButton.addEventListener("click", () => { howToUseMenu.style.display = "block"; });
closeMenuButton.addEventListener("click", () => { howToUseMenu.style.display = "none"; });

// Optional: make button visible on white background
howToUseButton.style.border = "2px solid #000";
howToUseButton.style.color = "#fff";
howToUseButton.style.background = "#3498db";
howToUseButton.style.cursor = "pointer";




