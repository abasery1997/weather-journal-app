// VanillaJS v1.0
// Released into the Public Domain
/* Global Variables */
const WeatherMap = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const key = '&appid=fbbfd062e20caf7afab6bab8e4ae9a52&units=imperial';
const datediv = document.querySelector('#date');
const tempdiv = document.querySelector('#temp');
const contentdiv = document.querySelector('#content');
const Districtdiv = document.querySelector('#District');
const countrydiv = document.querySelector('#country');


//listener to generate button
const generateButton = document.querySelector('#generate');

generateButton.addEventListener('click', getInfo);

//getting all data
 async function getInfo ()  {
    
    const   zipcode =  document.querySelector('#zip').value;
    const  URL = WeatherMap+zipcode+key ;
        getData(URL)
          .then(function(data){
              const currentdate =getdate()
              const feelings = getfeels()
              try{
                postData('/postdata',{date:currentdate ,feels:feelings ,temp:data.main.temp ,District:data.name,country:data.sys.country});
              }catch(e){
                console.log('there is '+e)
              } 
              updateUI();
          })
                     
}

///get current date
function getdate(){
    let today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth()+1; 
    const yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
return today;
}
//get user's feels 
function getfeels(){
    const feels = document.querySelector('#feelings').value;
      return feels;
}

//ubdating ui
function updateUI(){
    getData('/showdata')
    .then(function(data){
        if (data.temp == undefined){
            datediv.innerHTML ='';
            tempdiv.innerHTML ='there is no such a zipcode';
            contentdiv.innerHTML ='';
            Districtdiv.innerHTML='';
            countrydiv.innerHTML='';
        }
        else{
            datediv.innerHTML = 'Date :'+ data.date;
            tempdiv.innerHTML = 'Temp :'+data.temp;
            contentdiv.innerHTML = 'Feels :'+data.feels;
            Districtdiv.innerHTML='District :'+ data.District;
            countrydiv.innerHTML='Country :'+ data.country;
        }      
    });
}

//post data 
const postData =async (url ='',data = {} )=>{
    const obj = {
        method :'POST',
        credentials :'same-origin',
        headers :{
            'content-Type':'application/json'
        },
        body: JSON.stringify(data )
    };
    console.log(data);
    const response = await fetch(url,obj);
    try{
        const newData = await response.json();
        return newData;

    }catch(e){
        console.log('oops there is ' +e);
    }
}

///get data
const getData =async (url ='')=>{
    const request = await fetch(url);
    try{
        const allData = await request.json();
        return allData;
    }catch(e){
        console.log('oops there is ' +e);
    }
}
