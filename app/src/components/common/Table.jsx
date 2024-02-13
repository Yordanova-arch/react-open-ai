import { useState } from "react"
import axios from "axios"

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

function Table({ initialData, getName, deleteEndpoint, rowType }) {
  const [checked, setChecked] = useState([])
  const [data, setData] = useState(initialData)

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
  
  const deleteData = () => {
    axios.delete(`${import.meta.env.VITE_SERVER_URL}${deleteEndpoint}`, {
      data: { deleteIds: checked }
    })

    setData([...data].filter(assistant => !checked.includes(assistant.id)))
    setChecked([])
  }

  return (
    <div>
        {
        checked.length > 0 ?
          <ButtonGroup variant="text" sx={{ mb: 4 }} aria-label="text button group">
            {
              checked.length == 1 ?
                <Button>
                  <EditIcon />
                </Button> : null
            }
            <Button onClick={deleteData} >
              <DeleteIcon />
            </Button>
          </ButtonGroup> : null
      }

      <List dense sx={{ width: '100%', backgroundColor: "#f9f9f9", p: 5 }}>
        {data.map((value, index) => {
          return (
            <ListItem
              sx={{ mb: 2 }}
              key={index}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value.id)}
                  checked={checked.indexOf(value.id) !== -1}
                />
              }
              disablePadding
            >

              <ListItemButton sx={{ p: 1 }} onClick={handleToggle(value.id)}>
                <ListItemIcon>
                  <DvrIcon />
                </ListItemIcon>
                <ListItemText primary={`${rowType} ${getName(value)}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  )
}

export default Table