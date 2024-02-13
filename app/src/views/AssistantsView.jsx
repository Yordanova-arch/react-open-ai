import { useState, useEffect } from "react"
import axios from "axios"

import Table from "../components/common/Table"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"


function AssistantsView() {
  const [assistants, setAssistants] = useState([])

  useEffect(() => {
    async function getAssistants() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/assistants`)
        setAssistants(res.data.assistants)
      }
      catch (error) {
        console.error("Error fetching assistants: " + error.message)
      }
    }

    getAssistants()

  }, [])


  return (
    <Grid item>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }} >
        Assistants
      </Typography>
      {
        assistants.length > 0 ? 
        <Table 
          initialData={assistants} 
          deleteEndpoint="/assistants/delete"
          getName={value => value.name}
          rowType="Assistant" /> : null
      }
    </Grid>
  )
}

export default AssistantsView