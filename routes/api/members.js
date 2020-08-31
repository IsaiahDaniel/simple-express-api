const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const members = require("../../Members");

router.get("/", (req, res) => res.json(members));

router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res
      .status(400)
      .json({ msg: `no member with the id ${req.params.id} was found` });
  }
});

router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: "mattew Doe",
    email: "mattew@gmail.com",
    status: "active",
  };

  if (!newMember.name || !newMember.email) {
    res.json({ msg: "Please enter a name and email" });
  } else {
    members.push(newMember);
    res.json(members);
  }
});

router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {

    

  } else {
    res
      .status(400)
      .json({ msg: `no member with the id ${req.params.id} was found` });
  }
});


router.delete("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id != parseInt(req.params.id)));
  } else {
    res
      .status(400)
      .json({ msg: `no member with the id ${req.params.id} was found` });
  }
});

module.exports = router;
