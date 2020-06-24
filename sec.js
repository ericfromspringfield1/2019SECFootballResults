fetch("results.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);

    
    /*let colorTeam = document.querySelectorAll("p.winner")
    let i;
  //data.forEach.call(colorTeam, function() {
    for (i = 0; i < data.length; i++) {
    switch (data[i].Winner) {
      case "(3) Georgia":
      /*case "(1) Alabama":
        case "(2) Alabama":
          case "(3) Alabama":
            colorTeam[i].style.backgroundColor = "#9e1b32"
            break;
            
            case "(3) Georgia":
                  
              colorTeam[i].style.backgroundColor = "#ba0c2f"
                break;
                
                
                default:
                  break
                  
                }
              }
            */
    
    
    const renderToDom = (resultsString) => {
      const teamWrapper = document.querySelector("div");
      teamWrapper.innerHTML += resultsString;
      console.log(teamWrapper);
    };
    
    
    
    
    
   //Team colors are the same as the last team color entered in JSON. It does not apply it to winner.
   //We had Rk as a defacto ID. Can we apply Rk(ID) to each team color result so it is rendered for each winner
   //Each HEX for each color prints in the console. But I cannot get that HEX to change style for each winner
   const resultsHtmlRepresentation = (gameObj) => {
     
     
     
     //for each gameId, give me the TeamColor and apply it?
     
     return `
     <body>
     <img class="image" src="seclogo.png" alt="SEC Logo" width="150" height="150">
     <p class=${"gameNum"}>${gameObj.Winner} vs ${gameObj.Loser}</p>
     <container class=${"container"}>  
     <p class=${"date"}>${gameObj.Day} ${gameObj.Date} <br> ${gameObj.Time} EST <br>${gameObj.Notes}</p>
     <div class=${"result"}>
     <p class=${"winner"}> ${gameObj.Winner} ${gameObj.Pts} </p>
     <p class=${"loser"}>${gameObj.Loser} ${gameObj.Pts__1}</p>
     </div>
     <div class=${"rightColumn"}>
     </div>
     </container>
     
     
     </body>
     `;
    };
    
   
    
    
              data.forEach((gameObj) => {
                resultsString = resultsHtmlRepresentation(gameObj);
                renderToDom(resultsString);
              });
            })
              
              
              