const size = document.getElementById('sizeInfo')
   function DisplayWindowSize(){
        const width = window.innerWidth //innerwidth is a property for findig inner width , if its like innerwidth() this then its called method
         const height = window.innerHeight

         size.innerText = `width : ${width} and Height : ${height}`

          

// call once when page loads
DisplayWindowSize()
    }
      window.addEventListener('resize', DisplayWindowSize) 