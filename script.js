let BASE_URL = "";

/* LOADER */
function showLoader() {
    document.getElementById("loader").style.display = "flex";
}

function hideLoader() {
    document.getElementById("loader").style.display = "none";
}

/* ERROR */
function showError(msg) {
    const box = document.getElementById("errorBox");
    box.style.display = "block";
    box.innerText = msg;
}

function hideError() {
    document.getElementById("errorBox").style.display = "none";
}

/* URL BUILDER */
function buildUrl() {
    let host = document.getElementById("host").value.trim();
    if (!host) return null;
    if (!host.startsWith("http")) host = "http://" + host;
    return host;
}

/* CONNECT VM */
async function startMonitor() {

    hideError();
    showLoader();

    const host = buildUrl();
    if (!host) {
        hideLoader();
        showError("Enter IP or domain");
        return;
    }

    try {

        const res = await fetch(`${host}/api/metrics`);
        if (!res.ok) throw new Error("Invalid VM");

        const data = await res.json();
        if (!data?.data) throw new Error("Bad response");

        BASE_URL = host;

        // SET ACTIVE VM
        document.getElementById("vmTag").innerText =
            `${data.data.hostname} (${host})`;

        // SHOW UI
        document.getElementById("activeBar").style.display = "flex";
        document.getElementById("dashboard").classList.add("active");
        document.getElementById("inputBar").style.display = "none";

        await refreshAll();

    } catch (err) {
        showError("❌ Invalid VM or not reachable");
    } finally {
        hideLoader();
    }
}

/* REMOVE VM */
function removeVM() {

    BASE_URL = "";

    document.getElementById("host").value = "";

    document.getElementById("activeBar").style.display = "none";
    document.getElementById("dashboard").classList.remove("active");
    document.getElementById("inputBar").style.display = "flex";

    document.getElementById("vmTag").innerText = "";
}

/* REFRESH ALL */
async function refreshAll() {
    await loadSystem();
    await loadCpu();
    await loadMemory();
    await loadDisk();
    await loadLogs();
}

/* SYSTEM */
async function loadSystem() {
    const res = await fetch(`${BASE_URL}/api/metrics`);
    const data = await res.json();

    document.getElementById("system").innerHTML = `
        Host: ${data.data.hostname}<br/>
        OS: ${data.data.platform}<br/>
        Uptime: ${data.data.uptimeSeconds}s
    `;
}

/* CPU */
async function loadCpu() {
    const res = await fetch(`${BASE_URL}/api/cpu`);
    const data = await res.json();
    document.getElementById("cpu").innerText = `${data.cpuUsagePercent}%`;
}

/* MEMORY */
async function loadMemory() {
    const res = await fetch(`${BASE_URL}/api/memory`);
    const data = await res.json();

    document.getElementById("memory").innerHTML = `
        Used: ${data.usedGB} GB<br/>
        Free: ${data.freeGB} GB<br/>
        Usage: ${data.usagePercent}%
    `;
}

/* DISK */
async function loadDisk() {
    const res = await fetch(`${BASE_URL}/api/disk`);
    const data = await res.json();

    document.getElementById("disk").innerHTML =
        data.map(d => `${d.mount}: ${d.usagePercent}%`).join("<br/>");
}

/* LOGS */
async function loadLogs() {
    const res = await fetch(`${BASE_URL}/api/logs`);
    const data = await res.json();

    document.getElementById("logsCard").innerHTML =
        `<pre>${data.logs.join("\n")}</pre>
        <button onclick="loadLogs()">Refresh Logs</button>`;
}


