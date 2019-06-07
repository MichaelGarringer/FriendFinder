var friendsData = require("../app/data/friends.js");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function (req, res) {

    var newFriend = req.body;

    for (var i = 0; i < newFriend.testAnswers.length; i++)
      newFriend.testAnswers[i] = parseInt(newFriend.testAnswers[i]);

    var friendsIndex = 0;
    var bigScore = 100000;

    for (var i = 0; i < friendsData.length; i++) {
      var totalDifference = 0;
      for (var j = 0; j < friendsData[i].testAnswers.length; j++) {
        var difference = Math.abs(newFriend.testAnswers[j] - friendsData[i].testAnswers[j]);
        totalDifference += difference;
      }
      if (totalDifference < bigScore) {
        friendsIndex = i;
        bigScore = totalDifference;
      }
    }


    friendsData.push(newFriend);

    res.json(friendsData[friendsIndex]);
  });
};
