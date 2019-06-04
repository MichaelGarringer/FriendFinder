var friendsList = [];

app.get("/api/data/friends", function(req, res) {
    return res.json(friendsList);
  });
