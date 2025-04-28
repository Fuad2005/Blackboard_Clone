import React from "react";


export default function Home() {



  React.useEffect(() => {
    if (!localStorage.getItem("user")) {
      window.location.replace("/login");
    }
  }, []);


  return (
  <div></div>  
  
  );
}
