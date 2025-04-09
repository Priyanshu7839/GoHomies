import React,{useState,useEffect} from "react";


export const useScreenResizeValue = () => {
    const arr = [350,390,412,420,480,500,550,600,650,700,750,768,800,850,900,950,1000,1050,1100,1200,1250,1300,1440]
    const [screenValue, setScreenValue] = useState(null);
   
  
    useEffect(() => {
      const handleResize = () => {
        let newScreenValue = 0;
   

        for(let i = 0;i<arr.length-1;i++){
           
            if((document.documentElement.clientWidth > arr[i])&&(document.documentElement.clientWidth <= arr[i+1])){
                newScreenValue = arr[i+1];
            }
        }


        if(document.documentElement.clientWidth <= arr[0]){
            newScreenValue = arr[0];
        }


        if(document.documentElement.clientWidth > arr[arr.length-1]){
            newScreenValue = arr[arr.length-1]+1;
        }

        
       

        setScreenValue(newScreenValue);
      };
  
      handleResize(); // Set the initial screen size value
      window.addEventListener('resize', handleResize);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return screenValue;
  };