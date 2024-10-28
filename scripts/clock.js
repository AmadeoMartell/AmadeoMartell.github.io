setInterval(setLocalTime, 1000);

function setLocalTime(){
    let date = new Date();
    let local = document.getElementById("localTime");
    local.innerHTML = "Current Time: " + date.toLocaleTimeString();

    let chinese = document.getElementById("chineseTime");
    chinese.innerHTML = "China: " + date.toLocaleTimeString('en-GB', { timeZone: 'Asia/Shanghai' });

    let uk = document.getElementById("ukTime");
    uk.innerHTML = "Greenwich: " + date.toLocaleTimeString('en-GB', { timeZone: 'Europe/London' });

    let usa = document.getElementById("usaTime");
    usa.innerHTML = "Washington: " + date.toLocaleTimeString('en-GB', { timeZone: 'America/New_York' });
}
