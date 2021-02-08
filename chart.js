document.addEventListener("DOMContentLoaded",()=>
{
    //console.log(GetTypes());

})

/*
function StoreTypes(typearr,typeData)
{

    
    //if array empty then push 
    if(typearr.length==0)
    {
        if(typeData.length==1)
        {
            typearr.push(typeData[0].type.name);
        }
        else
        {
            typearr.push(typeData[0].type['name']);
            typearr.push(typeData[1].type['name']);
        }

    }
    else{

        if(typeData.length==1)
        {
            if(typearr.find(typeData[0].type.name))
            {
                return;
            }else{
                typearr.push(typeData[0].type.name);
            }

            
        }
        else
        {
            if(typearr.includes(typeData[0].type.name)==true)
            {

            }else{
                typearr.push(typeData[0].type.name);
            }

            if(typearr.includes(typeData[1].type.name))
            {
                return;
            }else{
                typearr.push(typeData[1].type.name);
            }
        }
    }
    console.log(typearr)
    return typearr;

}*/
    



const ctx = document.getElementById('myChart').getContext('2d');
const xlabels = [];
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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