document.addEventListener('DOMContentLoaded', function() {
    var currentDateElement = document.getElementById('current-date');
    var semesterInfoElement = document.getElementById('semester-info');
    
    var today = new Date();
    var formattedDate = '<strong>' + today.getDate() + '</strong> ' + getMonthName(today.getMonth()) + ' ' + today.getFullYear() + "г.";
    currentDateElement.innerHTML = formattedDate;

    var semesterInfo = getSemesterInfo(today);
    semesterInfoElement.innerText = semesterInfo;
});

function getMonthName(monthIndex) {
    var monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    return monthNames[monthIndex];
}

function getSemesterInfo(date) {
    var startFirstSemester = new Date(date.getFullYear(), 8, 1); // 1 сентября
    var endFirstSemester = new Date(date.getFullYear(), 0, 20);  // 20 января

    var startSecondSemester = new Date(date.getFullYear(), 1, 12);  // 12 февраля
    var endSecondSemester = new Date(date.getFullYear(), 5, 30);  // 30 июня

    var semesterInfo = "Неделя: ";
    
    if (date >= startFirstSemester && date <= endFirstSemester) {
        // Первый семестр
        var weeks = Math.ceil((date - startFirstSemester) / (7 * 24 * 60 * 60 * 1000));
        semesterInfo += weeks + " | " + (weeks % 2 === 0 ? "Четная🌕" : "Нечетная🌑");
    } else if (date >= startSecondSemester && date <= endSecondSemester) {
        // Второй семестр
        var weeks = Math.ceil((date - startSecondSemester) / (7 * 24 * 60 * 60 * 1000));
        semesterInfo += weeks + " | " + (weeks % 2 === 0 ? "Четная🌕" : "Нечетная🌑");
    } else {
        var currentMonth = date.getMonth();
        if (currentMonth >= 5 && currentMonth <= 7) {
            return "☀️Летние каникулы😎";
        } else {
            return "❄️Зимние каникулы☃️🎄";
        }
    }
    
    

    return semesterInfo;
}
