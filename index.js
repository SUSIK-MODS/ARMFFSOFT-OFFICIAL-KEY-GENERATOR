const express = require('express');
const app = express();

app.use(express.json());

app.post('/connect', (req, res) => {
  const validKeys = ["dark123", "mkop2024", "wavepass", "123456"];
  if(validKeys.includes(req.body.user_key)) {
    res.json({
      status: true, 
      data: {
        token: "valid_token", 
        rng: Date.now(),
        EXP: "LIFETIME"
      }
    });
  } else {
    res.json({status: false, reason: "Invalid Key"});
  }
});

app.listen(process.env.PORT || 3000);
