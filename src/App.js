
import Sidebar from "./Components/Sidebar";
import Datatable from "./Components/Datatable";
// import "./Components/sidebar.scss";
// import Feeder from "./Components/Feeder";
// import Rightbar from "./Components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./Components/Navbar";

import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }, 
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
          {/* <Feeder /> */}
          {/* <Rightbar /> */}
          <Datatable/> 
        </Stack>
        
      </Box>
    </ThemeProvider>
  );
}

export default App;


