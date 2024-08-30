import express from "express";
import initKnex from "knex";
import configuration from "./knexfile.js";
import "dotenv/config";


const knex = initKnex(configuration);
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());

app.get('/', async (_req, res) => {
  try {
    const data = []; // add query here
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(`Error retrieving snacks: ${error}`);
  }
});

app.get('/snacks/:id', async (req, res) => {
  try {
    const snackFound = true; // add query here

    if (snackFound.length === 0) {
      return res.status(404).json({
        message: `Snack with ID ${req.params.id} not found`
      });
    }

    res.json(snackFound[0]);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve snack data for ID ${req.params.id}: ${error}`,
    });
  }
});

app.post('/addSnack', async (req, res) => {
  if (!req.body.Snack_Name) {
    return res.status(400).json({
      message: "Please provide the snack name in the request",
    });
  }

  try {
    const result = []; // add query here
    const newSnackId = result[0];
    const createdSnack = []; // add query here

    res.status(201).json(createdSnack[0]);
  } catch (error) {
    res.status(500).json({
      message: `Unable to create new snack: ${error}`,
    });
  }
});

app.put('/updateSnack/:id', async (req, res) => {
  try {
    const rowsUpdated = []; // add query here

    if (rowsUpdated === 0) {
      return res.status(404).json({
        message: `Snack with ID ${req.params.id} not found`
      });
    }

    const updatedSnack = []; // add query here
    res.json(updatedSnack[0]);
  } catch (error) {
    res.status(500).json({
      message: `Unable to update snack with ID ${req.params.id}: ${error}`
    });
  }
});

app.delete('/removeSnack/:id', async (req, res) => {
  try {
    const rowsDeleted = []; // add query here

    if (rowsDeleted === 0) {
      return res.status(404).json({
        message: `Snack with ID ${req.params.id} not found`
      });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete snack: ${error}`
    });
  }
});


app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
