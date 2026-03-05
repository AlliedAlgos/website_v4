// combined.js

async function buildSeasonsData() {
    return [
        {
            year: "2025-2026",
            title: "Unearthed",
            description: "This year we reached 2,000 people through YouTube, 3D models, and our website.",
            image: "../images/seasons/yr_25-26.jpg",
            alt: "Team Allied Algorithms in 2025-2026",
            hoursSpent: "4000",
            peopleImpacted: "2500",
            missionsCompleted: "13",
        },
        {
            year: "2024-2025",
            title: "Submerged",
            description:
                "Our team dedicated this year to the development of a new robot design, alongside our innovation project. We had no changes to the team and presented our work to the board of education.",
            image: "../images/seasons/yr_24-25.jpg",
            alt: "2024-2025 Submerged season",
        },
        {
            year: "2023-2024",
            title: "Masterpiece",
            description:
                "The Masterpiece season was unforgettable. We designed, built, and programmed our robot and made it to states.",
            image: "../images/seasons/yr_23-24.jpg",
            alt: "2023-2024 Masterpiece season",
        },
        {
            year: "2022-2023",
            title: "SUPERPOWERED",
            description:
                "We explored the future of energy, innovating solutions while growing our teamwork and programming skills.",
            image: "../images/seasons/yr_22-23.jpg",
            alt: "2022-2023 SUPERPOWERED season",
        },
        {
            year: "2021-2022",
            title: "CARGO CONNECT",
            description:
                "We reimagined global transportation, learning about logistics while building a reliable competition robot.",
            image: "../images/seasons/yr_21-22.jpg",
            alt: "2021-2022 CARGO CONNECT season",
        },
        {
            year: "2020-2021",
            title: "RePlay",
            description:
                "Our first season! We learned the basics of building, programming, and teamwork.",
            image: "../images/seasons/yr_20-21.jpg",
            alt: "2020-2021 RePlay season",
        },
    ];
}

// ---------------- UI Helpers ----------------

function statCard(label, value) {
    return `
        <div class="bg-slate-900/80 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-xl transition text-center">
            <p class="text-slate-400 mb-2">${label}</p>
            <h3 class="text-4xl font-bold text-blue-400">${value || "N/A"}</h3>
        </div>
    `;
}

// ---------------- Render Functions ----------------

function renderCurrentSeason(season) {
    const el = document.getElementById("current-season");
    if (!el) return;

    el.innerHTML = `
        <div class="text-center mb-12">
            <h2 class="text-4xl font-extrabold text-blue-400">
                ${season.year} Season
            </h2>
            <p class="text-slate-300 text-lg mt-2">
                ${season.title}
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            ${statCard("Hours Spent", season.hoursSpent)}
            ${statCard("People Impacted", season.peopleImpacted)}
            ${statCard("Missions Completed", season.missionsCompleted)}
        </div>

        <div class="max-w-3xl mx-auto text-center text-lg text-slate-300 leading-relaxed">
            ${season.description}
        </div>
    `;
}

function renderPastSeasons(seasons) {
    const container = document.getElementById("past-seasons-container");
    if (!container) return;

    container.innerHTML = `
    `;

    seasons.slice(1).forEach((s, i) => {
        const reverse = i % 2 ? "md:flex-row-reverse" : "md:flex-row";

        container.innerHTML += `
            <div class="flex flex-col ${reverse} gap-6 mb-12 items-stretch">
                <img
                    src="${s.image}"
                    alt="${s.alt}"
                    class="w-full md:w-1/2 h-64 rounded-2xl object-cover shadow-lg"
                />

                <div class="bg-slate-900/80 backdrop-blur rounded-2xl p-8 md:w-1/2 shadow-lg flex flex-col justify-center">
                    <h4 class="text-blue-400 text-sm font-semibold uppercase tracking-wide">
                        ${s.year}
                    </h4>
                    <h2 class="text-2xl font-bold mb-4">
                        ${s.title}
                    </h2>
                    <p class="text-slate-300 leading-relaxed">
                        ${s.description}
                    </p>
                </div>
            </div>
        `;
    });
}

// ---------------- Init ----------------

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const seasons = await buildSeasonsData();
        renderCurrentSeason(seasons[0]);
        renderPastSeasons(seasons);
    } catch (err) {
        console.error("Failed to render seasons:", err);
    }
});
