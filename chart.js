



    

chartIt()
async function chartIt()
{

    await GetDefaultView()
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xlabels,
            
            datasets: [{
                label: xlabels,
                data: ylabels,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

}

let xlabels = [];
let ylabels = [];

function GetTypes(typearr,typeData,pokemon)
{
    //if array empty then push 
    if(Object.keys(typearr).length==0)
    {

        //if pokemon has only one type
        if(typeData.length==1)
        {
            typearr.typeData[0].type.name = 1;
        }
            
        //dual type pokemon
        else
        {
            typearr[typeData[0].type.name] = 1;
             typearr[typeData[1].type.name] = 0;
        }

    }
    else{
        
        //
        if(typeData.length==1)
        { 
            if(!(typeData[0].type.name in typearr))
            {
                typearr[typeData[0].type.name] = 1;
            }
            else 
            {
                //increment type count
                typearr[typeData[0].type.name] +=1;
            }
            

        }
        else{
            if(!(typeData[0].type.name in typearr))
            { 
                typearr[typeData[0].type.name] = 1;

            }
            else 
            {
                //increment type count
                typearr[typeData[0].type.name] +=1;
            }
            if(!(typeData[1].type.name in typearr))
            {
                typearr[typeData[1].type.name] = 0;
            }
            
        }

       
     

    }

    //sends and overides data in arr 
    //StoreTypes(typearr);
    xlabels = Object.keys(typearr)
    ylabels = Object.values(typearr)
    return typearr;

    


}

