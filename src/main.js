
//show the deposit input box
function fundButtonClick(fundId, fundInput, fundDeposit, fundWithdrawal) {
    
    var mq = window.matchMedia( "(max-width: 700px)" );
    if(mq.matches){
    
    const fund = document.getElementById(fundId);
    const input = document.getElementById(fundInput);
    const deposit = document.getElementById(fundDeposit);
    const withdrawal = document.getElementById(fundWithdrawal);

    input.style.display = 'inline-flex';
    fund.style.height = '32vh';
    }
    
  };

//main page chart functions
//displays chart on main page
function openChart(openFund, openChart, moreInfo, secondFund, secondChart, thirdFund, thirdChart) {
    const header = document.getElementById('header')
    const chart = document.getElementById(openChart);
    const fund1 = document.getElementById(openFund);
    const info = document.getElementById(moreInfo);
    const fund2 = document.getElementById(secondFund);
    const chart2 = document.getElementById(secondChart);
    const fund3 = document.getElementById(thirdFund);
    const chart3 = document.getElementById(thirdChart);

    header.style.position = 'sticky';
    chart.style.display = 'inline-block';
    fund1.style.display = 'inline-flex';   
    fund1.style.display = '-webkit-sticky'
    fund1.style.position = 'sticky';
    fund1.style.alignSelf = 'flex-start';
    fund1.style.top = '15.5vh';
    fund1.style.height = '83.5vh';
    fund1.style.left = '.5%';
    fund2.style.display = 'none';
    chart2.style.display = 'none';  
    fund3.style.display = 'none';
    chart3.style.display = 'none'; 
    info.style.display = 'none';
}

function openMobileChart(connected, openFund, openChart, fundInfo, fundReturn, depositWithdrawal, fundArrow) {
    const chart = document.getElementById(openChart);
    const fund1 = document.getElementById(openFund);
    const info = document.getElementById(fundInfo);
    const returns = document.getElementById(fundReturn);
    const buttons = document.getElementById(depositWithdrawal);
    const arrow = document.getElementById(fundArrow);
    const dropdown = document.getElementById(`${openFund}-dropdown-input`);

    if(connected){
        //wallet connected and chart closed
        if(chart.style.display == 'none' || chart.style.display == ''){
            fund1.style.height = '30vh';
            fund1.style.paddingBottom = '0';
            chart.style.display = 'block';
            arrow.style.display = 'none';
            buttons.style.display = 'block';
    
            //wallet connected and chart open
        } else{
            //close chart
            fund1.style.height = '26.5vh';
            fund1.style.paddingBottom = '10%';
            chart.style.display = 'none';
            buttons.style.display = 'none';
            arrow.style.display = 'block';
        }
    } else {
        //wallet not connected chart closed
        if(chart.style.display == 'none' || chart.style.display == ''){
            fund1.style.height = '25vh';
            fund1.style.paddingBottom = '0';
            chart.style.display = 'block';
            info.style.display = 'none';
            arrow.style.display = 'none';
            buttons.style.display = 'block';
    
            //wallet not connected chart open
        } else{
            //close chart
            fund1.style.height = '26.5vh';
            fund1.style.paddingBottom = '10%';
            chart.style.display = 'none';
            info.style.display = 'inline-flex';
            arrow.style.display = 'block';
            buttons.style.display = 'none';
        }
    }
}


function openChartMm(connected) {
    //check if vertical or horizontal
    var mq = window.matchMedia( "(max-width: 700px)" );
    if(mq.matches){
        openMobileChart(connected, 'mm', 'mm-chart', 'mm-fund-info', 'mm-fund-return', 'mm-deposit-withdrawal', 'mm-arrow')
    } 
    else {  
    openChart('mm', 'mm-chart', 'mm-more-info', 'index', 'index-chart', 'farm', 'farm-chart');
    //fundButtonClick('mm', 'mm-dropdown-input', 'mm-deposit', 'mm-withdrawal');
    }
};

function openChartIndex(connected) {
    var mq = window.matchMedia( "(max-width: 700px)" );
    if(mq.matches){
        openMobileChart(connected, 'index', 'index-chart', 'index-fund-info', 'index-fund-return', 'index-deposit-withdrawal', 'index-arrow')
    } else{
    openChart('index', 'index-chart', 'index-more-info', 'mm', 'mm-chart', 'farm', 'farm-chart');
    //fundButtonClick('index', 'index-dropdown-input', 'index-deposit', 'index-withdrawal');
    }
};

function openChartFarm(connected) {
    var mq = window.matchMedia( "(max-width: 700px)" );
    if(mq.matches){
        openMobileChart(connected, 'farm', 'farm-chart', 'farm-fund-info', 'farm-fund-return', 'farm-deposit-withdrawal', 'farm-arrow')
    } else {
    openChart('farm', 'farm-chart', 'farm-more-info', 'mm', 'mm-chart', 'index', 'index-chart');
    //fundButtonClick('farm', 'farm-dropdown-input', 'farm-deposit', 'farm-withdrawal');
    }
};
/*
document.getElementById('mm-fund-title').addEventListener('click', openChartMm);
document.getElementById('index-fund-title').addEventListener('click', openChartIndex);
document.getElementById('farm-fund-title').addEventListener('click', openChartFarm);

// changes chart displayed
document.getElementById('index-chart-tab-mm').addEventListener('click', openChartIndex);
document.getElementById('farm-chart-tab-mm').addEventListener('click', openChartFarm);
document.getElementById('mm-chart-tab-index').addEventListener('click', openChartMm);
document.getElementById('farm-chart-tab-index').addEventListener('click', openChartFarm);
document.getElementById('mm-chart-tab-farm').addEventListener('click', openChartMm);
document.getElementById('index-chart-tab-farm').addEventListener('click', openChartIndex);

//more info click
document.getElementById('mm-more-info').addEventListener('click', openChartMm);
document.getElementById('index-more-info').addEventListener('click', openChartIndex);
document.getElementById('farm-more-info').addEventListener('click', openChartFarm);
*/
//opens link on info page
function openInfo(id, open) {
    const section = document.getElementById(id);
    const fullQ = document.getElementById(`${id}-q`);
    const displays = section.style.display; 

    if(open == false){ 
        fullQ.style.borderBottomStyle = 'inset';
        section.style.display = "flex";
    } 
    else {
        fullQ.style.borderBottomStyle = 'none';
        section.style.display = 'none';
    }
};


export { openChartMm, openChartIndex, openChartFarm, openInfo };