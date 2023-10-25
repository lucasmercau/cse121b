//10p - Render in GitHub - Ready
//10p - Application Works - Ready
//05p - ES Modules - At least one module - Line 10 and Lines 30-31
//05p - Include at least 1 conditional branching - Line 83 (Switch)
//05p - EXCLUSIVELY use Template Literals (``) WHEN building strings - Line 72
//05p - Use 1 Array - Lines 11-14
//05p - Use 1 Array Method (filter, map, reduce) - Line 64 (map)
//05p - Fetch is used to get JSON data, and used in the application - Line 22

import allButtons from "./Buttons.js";
let conversionsList = [];
let conversionRates = [];
let listOfKeys = [];
let listOfKeyValues = [];
let index1 = 0;
let index2 = 0;
let button1;
let button2;
let divideNumber1; 

const getConversions = async () => {
    const response = await fetch("https://v6.exchangerate-api.com/v6/e4e1170dc0cd54257dd330f8/latest/USD");
    if (response.ok) {
        conversionsList = await response.json();  
        conversionRates = conversionsList.conversion_rates;
        listOfKeys = Object.keys(conversionRates);
        console.log(listOfKeys);
        listOfKeyValues = Object.values(conversionRates);
        console.log(listOfKeyValues);
        allButtons.getButtons1(listOfKeys);
        allButtons.getButtons2(listOfKeys);
        document.querySelector("#sortBy").addEventListener("change", () => { sortBy(listOfKeys, listOfKeyValues); });
        document.querySelector("#sortBy2").addEventListener("change", () => { sortBy2(listOfKeys, listOfKeyValues); });
        document.querySelector("#addNumbers").addEventListener("click", () => { getResult()});
        
    }
    
    console.log(conversionRates);
}
getConversions();

const getNumber1 = function (value01) {        
    button1 = value01;
    console.log(button1);
    
}

const getNumber2 = function (value02) {        
    button2 = value02;
    console.log(button2);
    
}

const getResult = function () {
    divideNumber1 = Number(document.querySelector("#add1").value)
    if (button1 == null)
    {        
        button1 = 1;
    }
    if (button2 == null)
    {
        button2 = 1;
    }
    const map1 = listOfKeyValues.map((x) => divideNumber1 = Number(document.querySelector("#add1").value) / x); //05p - Use 1 Array Method (filter, map, reduce)
    let divident = map1[index1];
    let result = multiply(divident, button2);
    const options = { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 };
    let stringResult = result.toLocaleString('en-US', options);
    let stringCurrency = listOfKeys[index2];
    console.log(stringResult);
    const h2Element = document.getElementById("result");
    h2Element.innerHTML = `$${stringResult} ${stringCurrency}`;

}

const multiply = (number1, number2) => number1 * number2;

/* sortBy Function */
const sortBy = function (listOfKeys, listOfKeyValues) {
    const filter = document.querySelector("#sortBy").value;
    index1 = listOfKeys.indexOf("USD");
    let value01 = listOfKeyValues[index1]
        switch (filter) {
            case 'USD':
                index1 = listOfKeys.indexOf("USD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'AED':
                index1 = listOfKeys.indexOf("AED");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'AFN':
                index1 = listOfKeys.indexOf("AFN");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'ALL':
                index1 = listOfKeys.indexOf("ALL");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'AMD':
                index1 = listOfKeys.indexOf("AMD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'ANG':
                index1 = listOfKeys.indexOf("ANG");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'AOA':
                index1 = listOfKeys.indexOf("AOA");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'ARS':
                index1 = listOfKeys.indexOf("ARS");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'AUD':
                index1 = listOfKeys.indexOf("AUD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'AWG':
                index1 = listOfKeys.indexOf("AWG");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'AZN':
                index1 = listOfKeys.indexOf("AZN");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'BAM':
                index1 = listOfKeys.indexOf("BAM");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'BBD':
                index1 = listOfKeys.indexOf("BBD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'BDT':
                index1 = listOfKeys.indexOf("BDT");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'BGN':
                index1 = listOfKeys.indexOf("BGN");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'BHD':
                index1 = listOfKeys.indexOf("BHD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'BIF':
                index1 = listOfKeys.indexOf("BIF");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'BMD':
                index1 = listOfKeys.indexOf("BMD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'BND':
                index1 = listOfKeys.indexOf("BND");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'BOB':
                index1 = listOfKeys.indexOf("BOB");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'BRL':
                index1 = listOfKeys.indexOf("BRL");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'BSD':
                index1 = listOfKeys.indexOf("BSD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'BTN':
                index1 = listOfKeys.indexOf("BTN");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'BWP':
                index1 = listOfKeys.indexOf("BWP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'BYN':
                index1 = listOfKeys.indexOf("BYN");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'BZD':
                index1 = listOfKeys.indexOf("BZD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'CAD':
                index1 = listOfKeys.indexOf("CAD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'CDF':
                index1 = listOfKeys.indexOf("CDF");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'CHF':
                index1 = listOfKeys.indexOf("CHF");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'CLP':
                index1 = listOfKeys.indexOf("CLP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'CNY':
                index1 = listOfKeys.indexOf("CNY");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'COP':
                index1 = listOfKeys.indexOf("COP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'CRC':
                index1 = listOfKeys.indexOf("CRC");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'CUP':
                index1 = listOfKeys.indexOf("CUP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'CVE':
                index1 = listOfKeys.indexOf("CVE");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'CZK':
                index1 = listOfKeys.indexOf("CZK");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'DJF':
                index1 = listOfKeys.indexOf("DJF");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'DKK':
                index1 = listOfKeys.indexOf("DKK");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'DOP':
                index1 = listOfKeys.indexOf("DOP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'DZD':
                index1 = listOfKeys.indexOf("DZD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'EGP':
                index1 = listOfKeys.indexOf("EGP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'ERN':
                index1 = listOfKeys.indexOf("ERN");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'ETB':
                index1 = listOfKeys.indexOf("ETB");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'EUR':
                index1 = listOfKeys.indexOf("EUR");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'FJD':
                index1 = listOfKeys.indexOf("FJD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'FKP':
                index1 = listOfKeys.indexOf("FKP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'FOK':
                index1 = listOfKeys.indexOf("FOK");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'GBP':
                index1 = listOfKeys.indexOf("GBP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'GEL':
                index1 = listOfKeys.indexOf("GEL");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'GGP':
                index1 = listOfKeys.indexOf("GGP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'GHS':
                index1 = listOfKeys.indexOf("GHS");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'GIP':
                index1 = listOfKeys.indexOf("GIP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'GMD':
                index1 = listOfKeys.indexOf("GMD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'GNF':
                index1 = listOfKeys.indexOf("GNF");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'GTQ':
                index1 = listOfKeys.indexOf("GTQ");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'GYD':
                index1 = listOfKeys.indexOf("GYD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'HKD':
                index1 = listOfKeys.indexOf("HKD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'HNL':
                index1 = listOfKeys.indexOf("HNL");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'HRK':
                index1 = listOfKeys.indexOf("HRK");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'HTG':
                index1 = listOfKeys.indexOf("HTG");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'HUF':
                index1 = listOfKeys.indexOf("HUF");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'IDR':
                index1 = listOfKeys.indexOf("IDR");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'ILS':
                index1 = listOfKeys.indexOf("ILS");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'IMP':
                index1 = listOfKeys.indexOf("IMP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'INR':
                index1 = listOfKeys.indexOf("INR");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'IQD':
                index1 = listOfKeys.indexOf("IQD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'IRR':
                index1 = listOfKeys.indexOf("IRR");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'ISK':
                index1 = listOfKeys.indexOf("ISK");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'JEP':
                index1 = listOfKeys.indexOf("JEP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'JMD':
                index1 = listOfKeys.indexOf("JMD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'JOD':
                index1 = listOfKeys.indexOf("JOD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'JPY':
                index1 = listOfKeys.indexOf("JPY");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'KES':
                index1 = listOfKeys.indexOf("KES");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'KGS':
                index1 = listOfKeys.indexOf("KGS");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'KHR':
                index1 = listOfKeys.indexOf("KHR");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'KID':
                index1 = listOfKeys.indexOf("KID");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'KMF':
                index1 = listOfKeys.indexOf("KMF");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'KRW':
                index1 = listOfKeys.indexOf("KRW");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'KWD':
                index1 = listOfKeys.indexOf("KWD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'KYD':
                index1 = listOfKeys.indexOf("KYD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'KZT':
                index1 = listOfKeys.indexOf("KZT");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'LAK':
                index1 = listOfKeys.indexOf("LAK");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'LBP':
                index1 = listOfKeys.indexOf("LBP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'LKR':
                index1 = listOfKeys.indexOf("LKR");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'LRD':
                index1 = listOfKeys.indexOf("LRD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'LSL':
                index1 = listOfKeys.indexOf("LSL");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'LYD':
                index1 = listOfKeys.indexOf("LYD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'MAD':
                index1 = listOfKeys.indexOf("MAD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'MDL':
                index1 = listOfKeys.indexOf("MDL");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'MGA':
                index1 = listOfKeys.indexOf("MGA");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'MKD':
                index1 = listOfKeys.indexOf("MKD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'MMK':
                index1 = listOfKeys.indexOf("MMK");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'MNT':
                index1 = listOfKeys.indexOf("MNT");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'MOP':
                index1 = listOfKeys.indexOf("MOP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'MRU':
                index1 = listOfKeys.indexOf("MRU");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'MUR':
                index1 = listOfKeys.indexOf("MUR");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'MVR':
                index1 = listOfKeys.indexOf("MVR");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'MWK':
                index1 = listOfKeys.indexOf("MWK");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'MXN':
                index1 = listOfKeys.indexOf("MXN");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'MYR':
                index1 = listOfKeys.indexOf("MYR");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'MZN':
                index1 = listOfKeys.indexOf("MZN");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'NAD':
                index1 = listOfKeys.indexOf("NAD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'NGN':
                index1 = listOfKeys.indexOf("NGN");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'NIO':
                index1 = listOfKeys.indexOf("NIO");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'NOK':
                index1 = listOfKeys.indexOf("NOK");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'NPR':
                index1 = listOfKeys.indexOf("NPR");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'NZD':
                index1 = listOfKeys.indexOf("NZD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'OMR':
                index1 = listOfKeys.indexOf("OMR");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'PAB':
                index1 = listOfKeys.indexOf("PAB");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'PEN':
                index1 = listOfKeys.indexOf("PEN");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'PGK':
                index1 = listOfKeys.indexOf("PGK");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'PHP':
                index1 = listOfKeys.indexOf("PHP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'PKR':
                index1 = listOfKeys.indexOf("PKR");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'PLN':
                index1 = listOfKeys.indexOf("PLN");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'PYG':
                index1 = listOfKeys.indexOf("PYG");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'QAR':
                index1 = listOfKeys.indexOf("QAR");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'RON':
                index1 = listOfKeys.indexOf("RON");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'RSD':
                index1 = listOfKeys.indexOf("RSD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'RUB':
                index1 = listOfKeys.indexOf("RUB");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'RWF':
                index1 = listOfKeys.indexOf("RWF");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'SAR':
                index1 = listOfKeys.indexOf("SAR");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'SBD':
                index1 = listOfKeys.indexOf("SBD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'SCR':
                index1 = listOfKeys.indexOf("SCR");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'SDG':
                index1 = listOfKeys.indexOf("SDG");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'SEK':
                index1 = listOfKeys.indexOf("SEK");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'SGD':
                index1 = listOfKeys.indexOf("SGD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'SHP':
                index1 = listOfKeys.indexOf("SHP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'SLE':
                index1 = listOfKeys.indexOf("SLE");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'SLL':
                index1 = listOfKeys.indexOf("SLL");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'SOS':
                index1 = listOfKeys.indexOf("SOS");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'SRD':
                index1 = listOfKeys.indexOf("SRD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'SSP':
                index1 = listOfKeys.indexOf("SSP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'STN':
                index1 = listOfKeys.indexOf("STN");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'SYP':
                index1 = listOfKeys.indexOf("SYP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'SZL':
                index1 = listOfKeys.indexOf("SZL");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'THB':
                index1 = listOfKeys.indexOf("THB");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'TJS':
                index1 = listOfKeys.indexOf("TJS");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'TMT':
                index1 = listOfKeys.indexOf("TMT");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'TND':
                index1 = listOfKeys.indexOf("TND");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'TOP':
                index1 = listOfKeys.indexOf("TOP");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'TRY':
                index1 = listOfKeys.indexOf("TRY");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'TTD':
                index1 = listOfKeys.indexOf("TTD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'TVD':
                index1 = listOfKeys.indexOf("TVD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'TWD':
                index1 = listOfKeys.indexOf("TWD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'TZS':
                index1 = listOfKeys.indexOf("TZS");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'UAH':
                index1 = listOfKeys.indexOf("UAH");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'UGX':
                index1 = listOfKeys.indexOf("UGX");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'UYU':
                index1 = listOfKeys.indexOf("UYU");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'UZS':
                index1 = listOfKeys.indexOf("UZS");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'VES':
                index1 = listOfKeys.indexOf("VES");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'VND':
                index1 = listOfKeys.indexOf("VND");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'VUV':
                index1 = listOfKeys.indexOf("VUV");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'WST':
                index1 = listOfKeys.indexOf("WST");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'XAF':
                index1 = listOfKeys.indexOf("XAF");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'XCD':
                index1 = listOfKeys.indexOf("XCD");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'XDR':
                index1 = listOfKeys.indexOf("XDR");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'XOF':
                index1 = listOfKeys.indexOf("XOF");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'XPF':
                index1 = listOfKeys.indexOf("XPF");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'YER':
                index1 = listOfKeys.indexOf("YER");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'ZAR':
                index1 = listOfKeys.indexOf("ZAR");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'ZMW':
                index1 = listOfKeys.indexOf("ZMW");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            case 'ZWL':
                index1 = listOfKeys.indexOf("ZWL");
                value01 = listOfKeyValues[index1];
                getNumber1(value01);
                break;
            default:
                divideNumbers(listOfKeyValues, 0);
    };
};

const sortBy2 = function (listOfKeys, listOfKeyValues) {
    const filter = document.querySelector("#sortBy2").value;
    
    let value02;
        switch (filter) 
        {
            case 'USD':
                index2 = listOfKeys.indexOf("USD");                
                value02 = listOfKeyValues[index2];                
                getNumber2(value02);
                break;
            case 'AED':
                index2 = listOfKeys.indexOf("AED");
                value02 = listOfKeyValues[index2];
                getNumber2(value02);
                break;
            case 'AFN':
                index2 = listOfKeys.indexOf("AFN");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'ALL':
                index2 = listOfKeys.indexOf("ALL");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'AMD':
                index2 = listOfKeys.indexOf("AMD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'ANG':
                index2 = listOfKeys.indexOf("ANG");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'AOA':
                index2 = listOfKeys.indexOf("AOA");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'ARS':
                index2 = listOfKeys.indexOf("ARS");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'AUD':
                index2 = listOfKeys.indexOf("AUD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'AWG':
                index2 = listOfKeys.indexOf("AWG");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'AZN':
                index2 = listOfKeys.indexOf("AZN");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'BAM':
                index2 = listOfKeys.indexOf("BAM");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'BBD':
                index2 = listOfKeys.indexOf("BBD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'BDT':
                index2 = listOfKeys.indexOf("BDT");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'BGN':
                index2 = listOfKeys.indexOf("BGN");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'BHD':
                index2 = listOfKeys.indexOf("BHD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'BIF':
                index2 = listOfKeys.indexOf("BIF");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'BMD':
                index2 = listOfKeys.indexOf("BMD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'BND':
                index2 = listOfKeys.indexOf("BND");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'BOB':
                index2 = listOfKeys.indexOf("BOB");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'BRL':
                index2 = listOfKeys.indexOf("BRL");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'BSD':
                index2 = listOfKeys.indexOf("BSD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'BTN':
                index2 = listOfKeys.indexOf("BTN");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'BWP':
                index2 = listOfKeys.indexOf("BWP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'BYN':
                index2 = listOfKeys.indexOf("BYN");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'BZD':
                index2 = listOfKeys.indexOf("BZD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'CAD':
                index2 = listOfKeys.indexOf("CAD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'CDF':
                index2 = listOfKeys.indexOf("CDF");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'CHF':
                index2 = listOfKeys.indexOf("CHF");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'CLP':
                index2 = listOfKeys.indexOf("CLP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'CNY':
                index2 = listOfKeys.indexOf("CNY");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'COP':
                index2 = listOfKeys.indexOf("COP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'CRC':
                index2 = listOfKeys.indexOf("CRC");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'CUP':
                index2 = listOfKeys.indexOf("CUP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'CVE':
                index2 = listOfKeys.indexOf("CVE");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'CZK':
                index2 = listOfKeys.indexOf("CZK");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'DJF':
                index2 = listOfKeys.indexOf("DJF");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'DKK':
                index2 = listOfKeys.indexOf("DKK");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'DOP':
                index2 = listOfKeys.indexOf("DOP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'DZD':
                index2 = listOfKeys.indexOf("DZD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'EGP':
                index2 = listOfKeys.indexOf("EGP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'ERN':
                index2 = listOfKeys.indexOf("ERN");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'ETB':
                index2 = listOfKeys.indexOf("ETB");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'EUR':
                index2 = listOfKeys.indexOf("EUR");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'FJD':
                index2 = listOfKeys.indexOf("FJD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'FKP':
                index2 = listOfKeys.indexOf("FKP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'FOK':
                index2 = listOfKeys.indexOf("FOK");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'GBP':
                index2 = listOfKeys.indexOf("GBP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'GEL':
                index2 = listOfKeys.indexOf("GEL");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'GGP':
                index2 = listOfKeys.indexOf("GGP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'GHS':
                index2 = listOfKeys.indexOf("GHS");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'GIP':
                index2 = listOfKeys.indexOf("GIP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'GMD':
                index2 = listOfKeys.indexOf("GMD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'GNF':
                index2 = listOfKeys.indexOf("GNF");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'GTQ':
                index2 = listOfKeys.indexOf("GTQ");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'GYD':
                index2 = listOfKeys.indexOf("GYD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'HKD':
                index2 = listOfKeys.indexOf("HKD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'HNL':
                index2 = listOfKeys.indexOf("HNL");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'HRK':
                index2 = listOfKeys.indexOf("HRK");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'HTG':
                index2 = listOfKeys.indexOf("HTG");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'HUF':
                index2 = listOfKeys.indexOf("HUF");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'IDR':
                index2 = listOfKeys.indexOf("IDR");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'ILS':
                index2 = listOfKeys.indexOf("ILS");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'IMP':
                index2 = listOfKeys.indexOf("IMP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'INR':
                index2 = listOfKeys.indexOf("INR");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'IQD':
                index2 = listOfKeys.indexOf("IQD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'IRR':
                index2 = listOfKeys.indexOf("IRR");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'ISK':
                index2 = listOfKeys.indexOf("ISK");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'JEP':
                index2 = listOfKeys.indexOf("JEP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'JMD':
                index2 = listOfKeys.indexOf("JMD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'JOD':
                index2 = listOfKeys.indexOf("JOD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'JPY':
                index2 = listOfKeys.indexOf("JPY");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'KES':
                index2 = listOfKeys.indexOf("KES");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'KGS':
                index2 = listOfKeys.indexOf("KGS");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'KHR':
                index2 = listOfKeys.indexOf("KHR");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'KID':
                index2 = listOfKeys.indexOf("KID");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'KMF':
                index2 = listOfKeys.indexOf("KMF");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'KRW':
                index2 = listOfKeys.indexOf("KRW");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'KWD':
                index2 = listOfKeys.indexOf("KWD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'KYD':
                index2 = listOfKeys.indexOf("KYD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'KZT':
                index2 = listOfKeys.indexOf("KZT");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'LAK':
                index2 = listOfKeys.indexOf("LAK");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'LBP':
                index2 = listOfKeys.indexOf("LBP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'LKR':
                index2 = listOfKeys.indexOf("LKR");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'LRD':
                index2 = listOfKeys.indexOf("LRD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'LSL':
                index2 = listOfKeys.indexOf("LSL");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'LYD':
                index2 = listOfKeys.indexOf("LYD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'MAD':
                index2 = listOfKeys.indexOf("MAD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'MDL':
                index2 = listOfKeys.indexOf("MDL");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'MGA':
                index2 = listOfKeys.indexOf("MGA");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'MKD':
                index2 = listOfKeys.indexOf("MKD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'MMK':
                index2 = listOfKeys.indexOf("MMK");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'MNT':
                index2 = listOfKeys.indexOf("MNT");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'MOP':
                index2 = listOfKeys.indexOf("MOP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'MRU':
                index2 = listOfKeys.indexOf("MRU");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'MUR':
                index2 = listOfKeys.indexOf("MUR");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'MVR':
                index2 = listOfKeys.indexOf("MVR");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'MWK':
                index2 = listOfKeys.indexOf("MWK");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'MXN':
                index2 = listOfKeys.indexOf("MXN");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'MYR':
                index2 = listOfKeys.indexOf("MYR");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'MZN':
                index2 = listOfKeys.indexOf("MZN");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'NAD':
                index2 = listOfKeys.indexOf("NAD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'NGN':
                index2 = listOfKeys.indexOf("NGN");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'NIO':
                index2 = listOfKeys.indexOf("NIO");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'NOK':
                index2 = listOfKeys.indexOf("NOK");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'NPR':
                index2 = listOfKeys.indexOf("NPR");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'NZD':
                index2 = listOfKeys.indexOf("NZD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'OMR':
                index2 = listOfKeys.indexOf("OMR");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'PAB':
                index2 = listOfKeys.indexOf("PAB");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'PEN':
                index2 = listOfKeys.indexOf("PEN");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'PGK':
                index2 = listOfKeys.indexOf("PGK");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'PHP':
                index2 = listOfKeys.indexOf("PHP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'PKR':
                index2 = listOfKeys.indexOf("PKR");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'PLN':
                index2 = listOfKeys.indexOf("PLN");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'PYG':
                index2 = listOfKeys.indexOf("PYG");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'QAR':
                index2 = listOfKeys.indexOf("QAR");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'RON':
                index2 = listOfKeys.indexOf("RON");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'RSD':
                index2 = listOfKeys.indexOf("RSD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'RUB':
                index2 = listOfKeys.indexOf("RUB");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'RWF':
                index2 = listOfKeys.indexOf("RWF");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'SAR':
                index2 = listOfKeys.indexOf("SAR");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'SBD':
                index2 = listOfKeys.indexOf("SBD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'SCR':
                index2 = listOfKeys.indexOf("SCR");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'SDG':
                index2 = listOfKeys.indexOf("SDG");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'SEK':
                index2 = listOfKeys.indexOf("SEK");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'SGD':
                index2 = listOfKeys.indexOf("SGD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'SHP':
                index2 = listOfKeys.indexOf("SHP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'SLE':
                index2 = listOfKeys.indexOf("SLE");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'SLL':
                index2 = listOfKeys.indexOf("SLL");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'SOS':
                index2 = listOfKeys.indexOf("SOS");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'SRD':
                index2 = listOfKeys.indexOf("SRD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'SSP':
                index2 = listOfKeys.indexOf("SSP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'STN':
                index2 = listOfKeys.indexOf("STN");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'SYP':
                index2 = listOfKeys.indexOf("SYP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'SZL':
                index2 = listOfKeys.indexOf("SZL");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'THB':
                index2 = listOfKeys.indexOf("THB");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'TJS':
                index2 = listOfKeys.indexOf("TJS");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'TMT':
                index2 = listOfKeys.indexOf("TMT");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'TND':
                index2 = listOfKeys.indexOf("TND");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'TOP':
                index2 = listOfKeys.indexOf("TOP");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'TRY':
                index2 = listOfKeys.indexOf("TRY");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'TTD':
                index2 = listOfKeys.indexOf("TTD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'TVD':
                index2 = listOfKeys.indexOf("TVD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'TWD':
                index2 = listOfKeys.indexOf("TWD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'TZS':
                index2 = listOfKeys.indexOf("TZS");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'UAH':
                index2 = listOfKeys.indexOf("UAH");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'UGX':
                index2 = listOfKeys.indexOf("UGX");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'UYU':
                index2 = listOfKeys.indexOf("UYU");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'UZS':
                index2 = listOfKeys.indexOf("UZS");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'VES':
                index2 = listOfKeys.indexOf("VES");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'VND':
                index2 = listOfKeys.indexOf("VND");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'VUV':
                index2 = listOfKeys.indexOf("VUV");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'WST':
                index2 = listOfKeys.indexOf("WST");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'XAF':
                index2 = listOfKeys.indexOf("XAF");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'XCD':
                index2 = listOfKeys.indexOf("XCD");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'XDR':
                index2 = listOfKeys.indexOf("XDR");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'XOF':
                index2 = listOfKeys.indexOf("XOF");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'XPF':
                index2 = listOfKeys.indexOf("XPF");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'YER':
                index2 = listOfKeys.indexOf("YER");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'ZAR':
                index2 = listOfKeys.indexOf("ZAR");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'ZMW':
                index2 = listOfKeys.indexOf("ZMW");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            case 'ZWL':
                index2 = listOfKeys.indexOf("ZWL");
                value02 = listOfKeyValues[index2];  
                getNumber2(value02); 
                break;
            default:        
                return 1;
        };
};