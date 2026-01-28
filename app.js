document.addEventListener("keyup", (e) =>{
    console.log(e.key)
})
  




  let inp = document.querySelector("input");
   let btn = document.querySelector("button");
    btn.addEventListener("click", () =>{
        console.log(inp.value)
    })




  document.getElementById("myForm").addEventListener("submit", function (e) {
      e.preventDefault(); 

      let password = document.getElementById("password").value;

      if (password.length > 5) {
        console.log("İcazə verildi");
      } else {
        console.log("Giriş qadağandır");
      }
    });