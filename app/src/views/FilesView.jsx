import Table from "../components/common/Table"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

import { useState, useEffect } from "react"
import axios from "axios"

function FilesView() {
  const [files, setFiles] = useState([])

  useEffect(() => {
    async function getFiles() {
      try{
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/files`)
        setFiles(res.data.files)
      }
      catch(error){
        console.error("Error fetching files: " + error.message)
      }
    }

    getFiles()

  }, [])

  return (
    <Grid item>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }} >
        Files
      </Typography>
      {
        files.length > 0 ? 
        <Table 
          initialData={files}
          deleteEndpoint="/files/delete" 
          getName={value => value.filename}
          rowType="File" /> : null
      }
    </Grid>
  )
}

export default FilesView