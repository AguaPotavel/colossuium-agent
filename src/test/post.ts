
const agentId = "90f3c4a0-18a2-0538-8c27-98dda0bcfec0";

const body = 
   "{ \"fighter1\": { \"text\": \"I'll use the collapsing pillars as cover, throwing poisoned daggers while retreating toward the oil slick.\", \"stats\": { \"health\": 100, \"stamina\": 90, \"strength\": 80, \"agility\": 115, \"speed\": 110, \"sneaking\": 95, \"integrity\": 85 }, \"name\": \"Viper\", \"status_effects\": [] }, \"fighter2\": { \"text\": \"I'll charge through your projectiles with my tower shield, driving you into the corner where the scorpion nests are triggered.\", \"stats\": { \"health\": 100, \"stamina\": 100, \"strength\": 115, \"agility\": 75, \"speed\": 85, \"sneaking\": 50, \"integrity\": 95 }, \"name\": \"Juggernaut\", \"status_effects\": [] }, \"environment\": { \"hazards_active\": [\"collapsing_pillars\", \"oil_slick\"], \"crowd_mood\": \"bloodthirsty\" }}"
  
const response = await fetch(
  `http://localhost:3000/${agentId}/message`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: body,
      userId: "user",
      userName: "User",
    }),
  }
);
