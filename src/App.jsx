import { useState } from "react"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import MailList from "./components/MailList/MailList"
import Grid from '@mui/material/Grid';




function App() {
  const [menu,setMenu] = useState(false) 

  return (
    <>
      <Header setMenu={setMenu} menu={menu} />
      <Grid container spacing={1} >
        <Grid item xs={4} sm={1}  >
        <Sidebar menu={menu} />
        </Grid>
      <Grid item xs={8} sm={11} >
      <MailList/>
      </Grid>
     
      </Grid>
      
    </>
  )
}

export default App
