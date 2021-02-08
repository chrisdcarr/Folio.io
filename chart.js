



    

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
                data: [12, 19, 3, 5, 2, 3],
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


function GetTypes(typearr,typeData)
{

    //if array empty then push 
    if(typearr[0].length==0)
    {
        if(typeData.length==1)
        {
            typearr[0].push(typeData[0].type.name);
            typearr[1].push(1);
        }
        else
        {
            typearr[0].push(typeData[0].type['name']);
            typearr[1].push(1);
            typearr[0].push(typeData[1].type['name']);
            typearr[1].push(1)
        }

    }
    else{

        if(typeData.length==1)
        {
            if(typearr[0].includes(typeData[0].type.name))
            {
                
            }else{
                typearr[0].push(typeData[0].type.name);
            }

            
        }
        else
        {
            if(typearr[0].includes(typeData[0].type.name))
            {
                //typearr[1][typearr[0].findIndex(typeData[0].type.name)]++;
            }else{
                typearr[0].push(typeData[0].type.name);
            }

            if(typearr[0].includes(typeData[1].type.name))
            {
             
            }else{
                typearr[0].push(typeData[1].type.name);
            }
        }
    }

    //sends and overides data in arr 
    //StoreTypes(typearr);
    //return typearr;
    xlabels = typearr


}

