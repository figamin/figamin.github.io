// Example subset (add all 100 if you want full replica)
const questions = [
  "1. Black Souls: It's a degenerate, incell game that encourages vulgar behavior, including lolicon. And other degenerate additives.",
  "2. Blue Archive: Racist fandom full of filipino femboys.",
  "3. Okegom: RPG game where there's incest, ,beastality, lolicon, SA with an underaged protagonist. It's like The Coffin of Andy and Leyley but worse.",
  "4: Demon Roots: It's like black souls with more lolicon and fetishizes LGBTQ.",
  "5: Saya No uta: The Kid Sm@shing game.",
  "6: Phase Connect vtubers: Most of them are lolicons or at least defend it. One of them even played Black Souls.",
  "7. Clinical Trial: The creator is a proshitter.",
  "8. Touhou: The fans listen to the music from a game involving characters that look like minors.",
  "9. Demonphobia: Fetish Guro Gooner Game.",
  "10. The Citadel/Beyond Citadel: Another Fetish Guro Gooner Game. Plus with shotacon incest.",
  "11 Rance: The protagonist is a grapist and many of his fans defend him.",
  "12. Full Metal Daemon Muramasa: Basically the same as Rance but edgy.",
  "13. Heaven Burns Red: lolicon protagonist and fetishizes lgbtq.",
  "14. Degrees of Lewdity: Proshipper game containing SA and beastality.",
  "15. Monster Girl Quest: Shotacon SA game.",
  "16. Subahibi: A game with disturbing content and a lot of unnecessary sex scenes.",
  "17. Totono: a game with heroine that had sex with underage boys and people defend her.",
  "18. Tsukihime : lot's of unnecessary sex scenes.",
  "19. Dies Irae: It's a NAZI game along with it being gooner.",
  "20. AO3 website: The creators and most of the community are full of proshitters.",
  { type: "text", content: "Other media worth avoiding:" },
  "LonaRPG",
  "Sequel(LeafGeometry)",
  "TCOAAL",
  "Jokezm and Renata",
  "Funger (funger 2 is okay only",
  "Celesphonia",
  "NPC Dreams",
  "Sayonara Zetsubou Sensei",
  "Pray Game",
  "Demonbane",
  "Fruits of grisaia",
  "Muv luv",
  "Aokana",
  "Majikoi",
  "Sayooshi",
  "Higurashi and Umineko",
  "Black Butler",
  "Mahoako",
  "Omori",
  "Mary Skelter",
  "Runia: Fairy Tale of the Forgotten Ruins",
  "Boku no Kanojo Wa Gatenkei",
  "Robotomi Kopeoreisyeon",
  "Togainu no Chi, DRAMAtical Murder, Sweetpool and all the other Nitro Chiral Games",
  "Dasaku",
  "Euphoria",
  "Gore Screaming Show",
  "ZeroEra",
  "Diddyronpa",
  "Diddygatari",
  "Sadistic Blood",
  "King Exit",
  "Nekopara",
];

// Render questions
const container = document.getElementById("questions");

questions.forEach((q, index) => {
  const div = document.createElement("div");

  // If it's a special text line (no checkbox)
  if (typeof q === "object" && q.type === "text") {
    div.className = "separator";
    div.innerText = q.content;
  } else {
    div.className = "question";
    div.innerHTML = `
      <label>
        <input type="checkbox" name="q${index}">
        ${q}
      </label>
    `;
  }

  container.appendChild(div);
});

// Calculate score
function calculateScore() {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  
  let checkedCount = 0;

  checkboxes.forEach(cb => {
    if (cb.checked) checkedCount++;
  });

  const total = checkboxes.length;

  // Percentage-based score (like Rice Purity style)
  const score = Math.round(100 - (checkedCount / total) * 100);

  document.getElementById("score").innerText =
    `Your PEDO media score: ${score}`;
}