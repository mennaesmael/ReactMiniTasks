import Button from "./Components/Button";
import Alert from "./Components/Alert";
import { useState } from "react";
function App() {
const[alertVisible,setAlertVisibility]=useState(false);
 return<div>
{alertVisible&&<Alert onClose={()=>setAlertVisibility(false)}>There is Alert</Alert>}
<Button color="danger" onClick={()=>setAlertVisibility(true)}>My Button</Button>
    </div>;
}

export default App;
