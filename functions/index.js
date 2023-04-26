const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
 // eslint-disable-next-line max-len
"sk_test_51N1As3DRIsEHj72wOx4xJXZbPNvyjxeiZWEZ3LYfW6d5ghit4KidP1u4zZElDlgW9Ty4Pspym6qlCa9iSUdjyYMt00KmmRCDVU"
)

// - API

// - APP Config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API Routes
app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request received ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

exports.api = functions.https.onRequest(app);