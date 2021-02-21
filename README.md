this is the documentation of the weather app webpage

1))  ***discription ***
this  project get the zipcode and how feelings from the user then tell him what is thecurrent date , the temprutre in this District , his feelings ,District name and filnally the country if this District .

2)) **hierarch of files ***
project 
       server    js file
       website   directory
                          app       js file
                          index     html file
                          style     css file
       readme   text file


3)) ***server discription***
* EXPRESS , BODY-PARSER AND CORS where required 
* port was decided to be 8080
* has listining function that tell that server is working
* initialize the main project folder as website
* have get and post to diffrent url 
* has an opject to store data in it called 'projectData'
       stored data are {
             date        :current date 
             feels       :the user feelings
             temp        :tempruture of the District
             District    : District name
             country     : country name 
       }


4)) ***app discription***
* has variable 
   WeatherMap & key     to get the api url 
   tempdiv              to write tempruture of the District in most recent area
   datediv              to write current date in most recent area
   contentdiv           to write the user feelings in most recent area
   countrydiv           to write country name in most recent area
   Districtdiv          to write District name in most recent area
   generateButton       to add click listener to the generate button to do  the above 

* has functions 
        **getInfo**      when generate button clicked this function fet the zipcode run **getData** to get the info above then **getfeels**  get the feeling of the user from the text area then**getdate**get the current date then   **postData** send data to server finally **updateUI** ubdate most recent entry area by  call  **getData** by the data from server .


        
        
        

