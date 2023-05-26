import * as React from 'react'
import { styled } from '@mui/material/styles'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import ClearIcon from '@mui/icons-material/Clear'
import AddIcon from '@mui/icons-material/Add'
import { Container, Divider, Paper, TextField } from '@mui/material'
import { useState } from 'react'

function InteractiveList({ items, setItems, setRemainingAllowedCalories }) {
   const [currentItem, setCurrentItem] = useState('')
   const CustomDiv = styled('div')(({ theme }) => ({
      backgroundColor: theme.palette.secondary.main,
   }))

   const StyledListItemText = styled(ListItemText)({
      maxWidth: '276px',
      display: 'flex',
      justifyContent: 'space-between',
   })

   const handleChange = (e) => {
      e.preventDefault()
      setCurrentItem(e.target.value)
   }

   const handleAdd = () => {
      if (currentItem === '' || currentItem in items) return
      setItems((prevState) => ({
         ...prevState,
         [currentItem]: 200,
      }))
      setRemainingAllowedCalories((prevCalories) => prevCalories - 200)
      setCurrentItem('')
   }

   const handleDelete = (key) => {
      setRemainingAllowedCalories((prevState) => prevState + items[key])
      const tempObj = { ...items }
      delete tempObj[key]
      setItems(tempObj)
   }

   const entries = Object.entries(items)
   const itemsJSX = entries.map(([item, calories], index) => (
      <div key={item}>
         <ListItem
            secondaryAction={
               <IconButton edge='end' onClick={() => handleDelete(item)}>
                  <ClearIcon fontSize='small' />
               </IconButton>
            }
         >
            <StyledListItemText primary={item} secondary={`${calories} kcal`} />
         </ListItem>
         {index !== entries.length - 1 && <Divider />}
      </div>
   ))

   return (
      <Container maxWidth='sm'>
         <Grid container spacing={3}>
            <Grid item xs={12}>
               <Paper>
                  <CustomDiv>
                     <List dense disablePadding>
                        <ListItem
                           secondaryAction={
                              <IconButton edge='end' onClick={handleAdd}>
                                 <AddIcon />
                              </IconButton>
                           }
                        >
                           <TextField
                              autoFocus
                              label='Add food'
                              variant='outlined'
                              size='small'
                              fullWidth
                              value={currentItem}
                              onChange={handleChange}
                              margin='dense'
                              onKeyDown={(e) => {
                                 if (e.key === 'Enter') {
                                    handleAdd()
                                 }
                              }}
                           />
                        </ListItem>
                     </List>
                  </CustomDiv>
               </Paper>
            </Grid>

            {entries.length != 0 && (
               <Grid item xs={12}>
                  <Paper square>
                     <CustomDiv>
                        <List
                           dense
                           sx={{
                              overflow: 'auto',
                              maxHeight: 175,
                           }}
                        >
                           {itemsJSX}
                        </List>
                     </CustomDiv>
                  </Paper>
               </Grid>
            )}
         </Grid>
      </Container>
   )
}

export default InteractiveList
