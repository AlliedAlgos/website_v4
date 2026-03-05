import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Supabase config
const SUPABASE_URL = "https://eyxhddkoqotedgucpfbz.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_h4nlL7bfvrg-amPOoqyhTw_CJjsVfJc";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function renderMembers() {
  const container = document.getElementById("members-container");
  container.innerHTML = "";

  const { data: members, error } = await supabase
    .from("members")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
    container.innerHTML = "<p class='text-red-400'>Failed to load members.</p>";
    return;
  }

  members.forEach((member, index) => {
    const card = document.createElement("div");
    card.className = `
      animate-fade-in
      bg-gray-900/70 border border-white/15 backdrop-blur-xl rounded-3xl
      shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300
      flex flex-col items-center text-center p-8
    `;
    card.style.animationDelay = `${index * 100}ms`;

    card.innerHTML = `
      <div class="relative w-64 h-72 rounded-3xl overflow-hidden bg-black before:absolute before:inset-[-5px]]">
        <img src="${member.img || ''}" alt="${member.name}" class="w-full h-full object-cover rounded-2xl relative z-10" />
      </div>
      <div class="mt-6 text-white">
        <h3 class="text-2xl font-semibold mb-1">${member.name}</h3>
        <p class="text-cyan-400 font-medium">${member.role}</p>
        <p class="mt-2 text-gray-300">${member.des || ""}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

window.renderMembers = renderMembers;