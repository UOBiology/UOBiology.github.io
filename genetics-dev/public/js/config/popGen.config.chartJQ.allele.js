//Namespaces
var popGen = popGen || {};
popGen.config = popGen.config || {}; 
popGen.config.chartJQ = popGen.config.chartJQ || {
    debug:                     false, 

    //Colors 
    lightGray:                "rgba(255, 255, 255, 0.75)",  
    lighterGray:              "rgba(255, 255, 255, 0.2)",  
    clear:                    "rgba(255, 255, 255, 0.0)",     
    backgroundColor:          "rgba(255, 255, 255, 0.0)",                  
    
    //ColorSets
    colorSetOrig:            [ 
                                    "#1BCDD1", 
                                    "#EC5657",
                                    "#8FAABB",
                                    "#B08BEB",
                                    "#3EA0DD",
                                    "#F5A52A",
                                    "#23BFAA",
                                    "#FAA586",
                                    "#EB8CC6", 
                                    "#ECF0F1"           
                             ],    
   	colorSet:                 [ 
                                    
   									"#F64747", 
   									"#BE90D4",  
   									"#F9690E",	
   									"#1BCDD1",	
   									"#F9BF3B",	
   									"#87D37C",
   									"#4B77BE",
   									"#663399",
   									"#FDE3A7", 	      
   									"#F1A9A0",        
   									"#2574A9",        
   									"#90C695",        
   									"#F4B350",        
   									"#BDC3C7",        
   									"#D2527F",   
									"#8FAABB"     
                             ], 
      
    //Attributes 
    fontFamily:               "Roboto, Helvetica, Arial, sans-serif",
    backgroundColor:          "rgba(255, 255, 255, 0.0)",
    labelFontSize:            "14",
};


popGen.config.chartJQ.debugData = function(){
    console.log(this); 
    console.log(CanvasJS); 
}


/**
 * Initialize the main chart that will hold of the data
 *      
 *  @param {string} selector JQuery selctor for the chart element 
 */
popGen.config.chartJQ.initChart = function(selector){
    if(this.chartExists(selector)){
        this.addColorSet("main", this.colorSet);    //Add the color set to the library 

        var data = [];  //Holds all of the datapoints 
        var dataSeries = {
            type: "line"

        };
        var dataPoints = [];
        dataPoints.push({x: 0,y: 0}); //Set the inital graph to 0,0 
        dataSeries.dataPoints = dataPoints;
        data.push(dataSeries);

        //Create the graph 
        $(selector).CanvasJSChart({
            zoomEnabled: true,
            exportEnabled: true,
            exportFileName: "Genetic Simulation Graph",
            backgroundColor: this.clear,
            title: { //Only here if we want to add it later 
                text: "",
                fontColor: this.lightGray,
                fontFamily: this.fontFamily,
                fontWeight: 300
            },
            axisX: {
                title: "Generation",
                titleFontColor: "white", 
                // titleFontSize: 22, //Automatically calculated for responsive design
                labelFontColor: this.lighterGray,
                labelFontSize: this.labelFontSize,
                labelAngle: 0,
                gridThickness: 1,
                gridColor: this.lighterGray,
                lineColor: this.lighterGray,
                tickColor: this.lighterGray,
            },
            axisY: {
                title: "Frequency of the A allele", 
                titleFontColor: "white",
                // titleFontSize: 22, //Automatically calculated for responsive design
                labelFontColor: this.lighterGray,
                minimum: 0,
                maximum: 1,
                labelFontSize: this.labelFontSize,
                includeZero: false,
                gridThickness: 1,
                gridColor: this.lighterGray,
                lineColor: this.lighterGray,
                tickColor: this.lighterGray
            },
            data: data
        });
    }
    else{
        console.log("ERROR: The chart [" + selector + "] isn't on this page!")
    }
}

/**
 * Determines if the chart exists on the page 
 *      
 *  @param {string} selector JQuery selctor for the chart element 
 */
popGen.config.chartJQ.chartExists = function(selector){
    if ($(selector).length) return true;
    else return false; 
}


/**
 *  Add a custome color set to the CanvasJS library
 *      
 *  @param {string} name the name to identify this color set 
 *  @param {array<String>} colorSet array of strings representing colors
 */
popGen.config.chartJQ.addColorSet = function(name, colorSet){
    if(typeof CanvasJS !== 'undefined'){
        CanvasJS.addColorSet(name,colorSet);
        if(this.debug) console.log("ColorSet Successfull Set"); 
    }
    else{
        console.log("CanvasJS not avaiable"); 
    }
}

