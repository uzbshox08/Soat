const time = document.querySelector(".time")
const day = document.querySelector(".day")
const moth = document.querySelector(".moth")

setInterval(() => {
    let date = new Date()

    let hour = date.getHours();
    let minut = date.getMinutes();
    let secund = date.getSeconds();

    let clock = `${hour}:${minut}:${secund}`

    // console.log(clock);
    time.innerHTML = clock
}, 1000)


let date = new Date()

let days = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()
let hafta = date.getDay()




if (hafta === 1) {
    day.innerHTML = 'Dushanba'
}
if (hafta === 2) {
    day.innerHTML = 'Seshanba'
}
if (hafta === 3) {
    day.innerHTML = 'Chorshanba'
}
if (hafta === 4) {
    day.innerHTML = 'Payshanba'
}
if (hafta === 5) {
    day.innerHTML = 'Juma'
}
if (hafta === 6) {
    day.innerHTML = 'Shanba'
}
if (hafta === 7) {
    day.innerHTML = 'Yakshanba'
}






if (month === 1) {
    moth.innerHTML = `${days} - Yanvar. ${year}`
}
else if (month === 2) {
    moth.innerHTML = `${days} - Fevral. ${year}`
}
else if (month === 3) {
    moth.innerHTML = `${days} - Mart. ${year}`
}
else if (month === 4) {
    moth.innerHTML = `${days} - Aprel. ${year}`
}
else if (month === 5) {
    moth.innerHTML = `${days} - May. ${year}`
}
else if (month === 6) {
    moth.innerHTML = `${days} - Iyun. ${year}`
}
else if (month === 7) {
    moth.innerHTML = `${days} - Iyul. ${year}`
}
else if (month === 8) {
    moth.innerHTML = `${days} - Avgust. ${year}`
}
else if (month === 9) {
    moth.innerHTML = `${days} - Sentabr. ${year}`
}
else if (month === 10) {
    moth.innerHTML = `${days} - Aktabr. ${year}`
}
else if (month === 11) {
    moth.innerHTML = `${days} - Noyabr. ${year}`
}
else if (month === 12) {
    moth.innerHTML = `${days} - Dekabr. ${year}`
}
