//Copyright 2019 Netherlands eScience Center and CML, Leiden University
//Licensed under the Apache License, version 2.0. See LICENSE for details.

const LT_Car = 15 
const Dist_Year_Car = 10000
const Dist_LT_Car = LT_Car * Dist_Year_Car 
const TotalNop_Bus = 160000
const Dist_LT_Bus = 500000
const Op_Bus_mi = 2.4
const TotalConstr_Bus = 34000
const Fuels_Bus_mi = 0.380

var last_total

function LCA_Car(dist = document.getElementById('Car_KM').value, occup = document.getElementById('Car_Occup').value, state = document.getElementById('Car_Type').value) {
      switch(state) {
	    	case "Sedan":
	    		TotalNop_Car = 8500;
	    		Op_Car_mi = 0.370;
	    		TotalConstr_Car = 14000;
	    		Fuels_Car_mi = 0.061;
	    		break;
	    	case "SUV":
	    		TotalNop_Car = 12000;
	    		Op_Car_mi = 0.370;
	    		TotalConstr_Car = 13000;
	    		Fuels_Car_mi = 0.100;
	    		break;
	    	case "Pickup":
	    		TotalNop_Car = 8300;
	    		Op_Car_mi = 0.620;
	    		TotalConstr_Car = 13000;
	    		Fuels_Car_mi = 0.110;
	    		break;
	  } 
      dist = dist / 1.61 //to miles
      nop = TotalNop_Car * dist / Dist_LT_Car; 
      op = dist * Op_Car_mi;
      infr = TotalConstr_Car * dist / Dist_LT_Car;
      fuels = dist * Fuels_Car_mi;
      em = nop + op + infr + fuels;
      nop_mi = TotalNop_Car / Dist_LT_Car;
      op_mi = Op_Car_mi;
      infr_mi = TotalConstr_Car / Dist_LT_Car;
      fuels_mi = Fuels_Car_mi;
      em_mi = nop_mi + op_mi + infr_mi + fuels_mi
      em_km = em_mi / 1.61;
      document.getElementById("Result_Car").innerHTML = "kg CO2e : " + em.toFixed(3);
      document.getElementById("Result_Car_VMT").innerHTML = "kg CO2e/VMT : " + em_mi.toFixed(3) + " = " + nop_mi.toFixed(3) + "(M) + " + op_mi.toFixed(3) + "(O) + " + infr_mi.toFixed(3) + "(I) + " + fuels_mi.toFixed(3)+"(F)";
      document.getElementById("Result_Car_VKT").innerHTML = "kg CO2e/VKT : " + em_km.toFixed(3) + " = " + (nop_mi/1.61).toFixed(3) + "(M) + " + (op_mi/1.61).toFixed(3) + "(O) + " + (infr_mi/1.61).toFixed(3) + "(I) + " + (fuels_mi/1.61).toFixed(3)+"(F)";
      document.getElementById("Result_Car_PKT").innerHTML = "kg CO2e/PKT : " + (em_km/occup).toFixed(3) + " = " + (nop_mi/1.61/occup).toFixed(3) + "(M) + " + (op_mi/1.61/occup).toFixed(3) + "(O) + " + (infr_mi/1.61/occup).toFixed(3) + "(I) + " + (fuels_mi/1.61/occup).toFixed(3)+"(F)";
      return em_km/occup;
}

function LCA_CS(dist = document.getElementById('CS_KM').value, occup = document.getElementById('CS_Occup').value, scen = document.getElementById('CS_LT_Scenario').value, state = document.getElementById('CS_Type').value) {
      switch(state) {
	    	case "Sedan":
	    		TotalNop_Car = 8500;
	    		Op_Car_mi = 0.370;
	    		TotalConstr_Car = 14000;
	    		Fuels_Car_mi = 0.061;
	    		break;
	    	case "SUV":
	    		TotalNop_Car = 12000;
	    		Op_Car_mi = 0.370;
	    		TotalConstr_Car = 13000;
	    		Fuels_Car_mi = 0.100;
	    		break;
	    	case "Pickup":
	    		TotalNop_Car = 8300;
	    		Op_Car_mi = 0.620;
	    		TotalConstr_Car = 13000;
	    		Fuels_Car_mi = 0.110;
	    		break;
      }
      Dist_LT_CS = scen / 1.61; //to miles
      dist = dist / 1.61; //to miles
      nop = TotalNop_Car * dist / Dist_LT_CS; 
      op = dist * Op_Car_mi;
      infr = TotalConstr_Car * dist / Dist_LT_CS;
      fuels = dist * Fuels_Car_mi;
      em = nop + op + infr + fuels;
      nop_mi = TotalNop_Car / Dist_LT_CS;
      op_mi = Op_Car_mi;
      infr_mi = TotalConstr_Car / Dist_LT_CS;
      fuels_mi = Fuels_Car_mi;
      em_mi = nop_mi + op_mi + infr_mi + fuels_mi
      em_km = em_mi / 1.61;
      document.getElementById("Result_CS").innerHTML = "kg CO2e : " + em.toFixed(3);
      document.getElementById("Result_CS_VMT").innerHTML = "kg CO2e/VMT : " + em_mi.toFixed(3) + " = " + nop_mi.toFixed(3) + "(M) + " + op_mi.toFixed(3) + "(O) + " + infr_mi.toFixed(3) + "(I) + " + fuels_mi.toFixed(3)+"(F)";
      document.getElementById("Result_CS_VKT").innerHTML = "kg CO2e/VKT : " + em_km.toFixed(3) + " = " + (nop_mi/1.61).toFixed(3) + "(M) + " + (op_mi/1.61).toFixed(3) + "(O) + " + (infr_mi/1.61).toFixed(3) + "(I) + " + (fuels_mi/1.61).toFixed(3)+"(F)";
      document.getElementById("Result_CS_PKT").innerHTML = "kg CO2e/PKT : " + (em_km/occup).toFixed(3) + " = " + (nop_mi/1.61/occup).toFixed(3) + "(M) + " + (op_mi/1.61/occup).toFixed(3) + "(O) + " + (infr_mi/1.61/occup).toFixed(3) + "(I) + " + (fuels_mi/1.61/occup).toFixed(3)+"(F)";
      return em_km/occup;
}

function LCA_Bus(dist = document.getElementById('Bus_KM').value, occup = document.getElementById('Bus_Occup').value) {
      dist = dist / 1.61 //km to miles
      nop = TotalNop_Bus * dist / Dist_LT_Bus; 
      op = dist * Op_Bus_mi;
      infr = TotalConstr_Bus * dist / Dist_LT_Bus;
      fuels = dist * Fuels_Bus_mi;
      em = nop + op + infr + fuels;     
      nop_mi = TotalNop_Bus / Dist_LT_Bus;
      op_mi = Op_Bus_mi;
      infr_mi = TotalConstr_Bus / Dist_LT_Bus;
      fuels_mi = Fuels_Bus_mi; 
      em_mi = nop_mi + op_mi + infr_mi + fuels_mi
      em_km = em_mi / 1.61;
      document.getElementById("Result_Bus").innerHTML = "kg CO2e : " + em.toFixed(3);
      document.getElementById("Result_Bus_VMT").innerHTML = "kg CO2e/VMT : " + em_mi.toFixed(3) + " = " + nop_mi.toFixed(3) + "(M) + " + op_mi.toFixed(3) + "(O) + " + infr_mi.toFixed(3) + "(I) + " + fuels_mi.toFixed(3)+"(F)";
      document.getElementById("Result_Bus_VKT").innerHTML = "kg CO2e/VKT : " + em_km.toFixed(3) + " = " + (nop_mi/1.61).toFixed(3) + "(M) + " + (op_mi/1.61).toFixed(3) + "(O) + " + (infr_mi/1.61).toFixed(3) + "(I) + " + (fuels_mi/1.61).toFixed(3)+"(F)";
      document.getElementById("Result_Bus_PKT").innerHTML = "kg CO2e/PKT : " + (em_km/occup).toFixed(3) + " = " + (nop_mi/1.61/occup).toFixed(3) + "(M) + " + (op_mi/1.61/occup).toFixed(3) + "(O) + " + (infr_mi/1.61/occup).toFixed(3) + "(I) + " + (fuels_mi/1.61/occup).toFixed(3)+"(F)";
      
      return em_km/occup;
}   

function LCA_Rail(dist = document.getElementById('Rail_KM').value, occup = document.getElementById('Rail_Occup').value, state = document.getElementById('Energy_Profile').value) {
	  const Dist_LT_Rail = 620000
	      switch(state) {
	      	case "Ontario":
	    	  	EmissFactor = 0.058;
	    		break;
	    	case "Quebec":
	    		EmissFactor = 0.021;
	    		break;
	    	case "Alberta":
	    		EmissFactor = 0.590;
	    		break;
	    	case "Massachusetts":
	    		EmissFactor = 0.538;
	    		break;
	    	case "California":
	    		EmissFactor = 0.327;
	    		break;
	    	case "Vermont":
	    		EmissFactor = 0.039;
	    		break;
	    	case "D.C.":
	    		EmissFactor = 1.397;
	    		break;
	    	case "Netherlands":
	    		EmissFactor = 0.410;
	    		break;
	    	case "Washington":
	    		EmissFactor = 0.157;
	    		break;	
	  }
	  const MJtokWh = 0.2778 
	  const Man_Rail_mi = 0.061
	  const Op_Rail_mi = 48.3 * MJtokWh * EmissFactor
	  const Infr_Rail_mi = 1.51 + 14.3 * MJtokWh * EmissFactor


      dist = dist / 1.61 //km to miles
      nop = dist * Man_Rail_mi; 
      op = dist * Op_Rail_mi;
      infr = dist * Infr_Rail_mi;
      em = nop + op + infr;
      nop_mi = Man_Rail_mi;
      op_mi = Op_Rail_mi;
      infr_mi = Infr_Rail_mi;
      em_mi = nop_mi + op_mi + infr_mi
      em_km = em_mi / 1.61;
      document.getElementById("Result_Rail").innerHTML = "kg CO2e : " + em.toFixed(3);
      document.getElementById("Result_Rail_VMT").innerHTML = "kg CO2e/VMT : " + em_mi.toFixed(3) + " = " + nop_mi.toFixed(3) + "(M) + " + op_mi.toFixed(3) + "(O) + " + infr_mi.toFixed(3) + "(I)";
      document.getElementById("Result_Rail_VKT").innerHTML = "kg CO2e/VKT : " + em_km.toFixed(3) + " = " + (nop_mi/1.61).toFixed(3) + "(M) + " + (op_mi/1.61).toFixed(3) + "(O) + " + (infr_mi/1.61).toFixed(3) + "(I)";
      document.getElementById("Result_Rail_PKT").innerHTML = "kg CO2e/PKT : " + (em_km/occup).toFixed(3) + " = " + (nop_mi/1.61/occup).toFixed(3) + "(M) + " + (op_mi/1.61/occup).toFixed(3) + "(O) + " + (infr_mi/1.61/occup).toFixed(3) + "(I)";
      
      return em_km/occup;
}  

function LCA() {
    	em_car = LCA_Car();
    	em_bus = LCA_Bus();
    	em_cs = LCA_CS();
    	em_rail = LCA_Rail();
    	car_km = document.getElementById('Car_KM').value;
    	cs_km = document.getElementById('CS_KM').value;
    	bus_km = document.getElementById('Bus_KM').value;
    	rail_km = document.getElementById('Rail_KM').value;
    	total = em_rail * rail_km + em_cs * cs_km + em_bus * bus_km + em_car * car_km;

    	
    	document.getElementById("Total Emissions").innerHTML = "Total personal emissions: " + Math.floor(total) + " kg CO2e; Changed by: " + Math.floor((total-last_total)/last_total*100) + " %";
    	last_total = total;
} 
