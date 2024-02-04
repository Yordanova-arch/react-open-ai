import { useState } from "react"

import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'


import DvrIcon from '@mui/icons-material/Dvr'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

function AssistantsView() {
  const [checked, setChecked] = useState([])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <Grid item>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }} >
        Assistants
      </Typography>
      {
        checked.length > 0 ?
          <ButtonGroup variant="text" sx={{ mb: 4 }} aria-label="text button group">
            {
              checked.length == 1 ?
                <Button>
                  <EditIcon />
                </Button> : null
            }
            <Button>
              <DeleteIcon />
            </Button>
          </ButtonGroup> : null
      }

      <List dense sx={{ width: '100%', backgroundColor: "#f9f9f9", p: 5 }}>
        {[0, 1, 2, 3].map((value, index) => {
          return (
            <ListItem
              sx={{ mb: 2 }}
              key={index}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(index)}
                  checked={checked.indexOf(index) !== -1}
                />
              }
              disablePadding
            >

              <ListItemButton sx={{ p: 1 }} onClick={handleToggle(index)}>
                <ListItemIcon>
                  <DvrIcon />
                </ListItemIcon>
                <ListItemText primary={`Line item ${index + 1}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Grid>
  )
}

export default AssistantsView