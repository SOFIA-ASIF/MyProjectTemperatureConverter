#! /usr/bin/env node
import inquirer from "inquirer";
let givingUnit = await inquirer.prompt([{
        name: "unit1",
        message: "From which unit of temperature you want to convert",
        type: "list",
        choices: ["Farenheit", "celcius", "kelvin"]
    }]);
let gettingUnit = await inquirer.prompt([{
        name: "unit2",
        message: "To which unit of temperature you want to convert",
        type: "list",
        choices: ["Farenheit", "celcius", "kelvin"]
    }]);
let value = await inquirer.prompt([{
        name: "valueOfTemperature",
        message: "Enter the value you want to convert",
        type: "number"
    }]);
let temperature;
if (givingUnit.unit1 === "Farenheit") {
    if (gettingUnit.unit2 === "Farenheit") {
        console.log("value will be same: ", value.valueOfTemperature, " Farenheit");
    }
    else if (gettingUnit.unit2 === "celcius") {
        temperature = (value.valueOfTemperature - 32) * 5 / 9;
        console.log(temperature, " celcius");
    }
    else if (gettingUnit.unit2 === "kelvin") {
        temperature = ((value.valueOfTemperature - 32) * 5 / 9) + 273.15;
        console.log(temperature, " kelvin");
    }
}
else if (givingUnit.unit1 === "kelvin") {
    if (gettingUnit.unit2 === "Farenheit") {
        temperature = ((value.valueOfTemperature - 273.15) * 9 / 5) + 32;
        console.log(temperature, " Farenheit");
    }
    else if (gettingUnit.unit2 === "celcius") {
        temperature = value.valueOfTemperature - 273.15;
        console.log(temperature), " celcius";
    }
    else if (gettingUnit.unit2 === "kelvin") {
        console.log("value will be same: ", value.valueOfTemperature, " kelvin");
    }
}
else if (givingUnit.unit1 === "celcius") {
    if (gettingUnit.unit2 === "Farenheit") {
        temperature = (9 / 5 * value.valueOfTemperature) + 32;
        console.log(temperature, " Farenheit");
    }
    else if (gettingUnit.unit2 === "celcius") {
        console.log("value will be same :", value.valueOfTemperature, "celcius");
    }
    else if (gettingUnit.unit2 === "kelvin") {
        temperature = value.valueOfTemperature + 273.15;
        console.log(temperature, " kelvin");
    }
}
