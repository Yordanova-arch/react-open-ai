const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 8001;

app = express();
app.use(express.json());
app.use(cors({}));

app.get("/api/assistants", async (req, res) => {
    const openai = new OpenAI();
    const assistants = await openai.beta.assistants.list();
    return res.json({ assistants: assistants.data });
});

app.delete("/api/assistants/delete", async (req, res) => {
    const openai = new OpenAI();
    const { deleteIds } = req.body;

    for(let deleteId of deleteIds) {
        await openai.beta.assistants.del(deleteId);
    }

    return res.json({ message: "Assistants deleted successfully" })
});

app.get("/api/files", async (req, res) => {
    const openai = new OpenAI();
    const files = await openai.files.list();
    return res.json({ files: files.data });
});

app.delete("/api/files/delete", async (req, res) => {
    const openai = new OpenAI();
    const { deleteIds } = req.body;

    for(let deleteId of deleteIds) {
        await openai.files.del(deleteId);
    }

    return res.json({ message: "Files deleted successfully" })
});

app.listen(port, () => console.log(`Server started - http://localhost:${port}`));