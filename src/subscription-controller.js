const express = require("express");
const router = express.Router();

// Fake in-memory data (no DB integration)
const users = [
  { id: "user_67890", active: true },
  { id: "user_99999", active: false },
];

const plans = [
  { id: "plan_12345", name: "Premium Plan", active: true },
  { id: "plan_00000", name: "Inactive Plan", active: false },
];

let subscriptions = [];

router.post("/subscriptions", (req, res) => {
  const { userId, selectedPlanId } = req.body;

  const user = users.find((u) => u.id === userId);
  const plan = plans.find((p) => p.id === selectedPlanId);

  const subscription = {
    userId,
    planId: selectedPlanId,
    planName: plan ? plan.name : "Unknown",
    startDate: new Date().toISOString(),
  };
  subscriptions.push(subscription);
  res.json(subscription);
});

module.exports = router;
