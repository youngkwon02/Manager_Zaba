$(document).ready(function(){
    //For moving by nav bar
    document.getElementsByTagName('html')[0].style.scrollBehavior = '';

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.location.href="./unaccessible_mobile.php";
    }
    var hello_top = 0;
    var todo_top = $('#todo').offset().top;
    var memo_top = $('#memo').offset().top;
    var calendar_top = $('#calendar').offset().top;
    var navEle = document.getElementsByClassName('navli');
    navEle[0].style.color = 'rgba(255, 255, 255, 1)';
    navEle[0].style.fontWeight = 'bold';
    $(document).scroll(function(){
        var scrollPos = $(document).scrollTop() + 80; //Because navbar height
        if(scrollPos >= hello_top && scrollPos < todo_top-1){
            for(var k = 0; k < navEle.length; k++){
                navEle[k].style.color = 'rgba(255, 255, 255, .65)';
                navEle[k].style.fontWeight = '';
                if(k === 0){
                    navEle[k].style.color = 'rgb(255, 255, 255)';
                    navEle[k].style.fontWeight = 'bold';
                }
            }
        }else if (scrollPos >= todo_top-1 && scrollPos < memo_top) {
            for(var k = 0; k < navEle.length; k++){
                navEle[k].style.color = 'rgba(255, 255, 255, .65)';
                navEle[k].style.fontWeight = '';
                if(k === 1){
                    navEle[k].style.color = 'rgb(255, 255, 255)';
                    navEle[k].style.fontWeight = 'bold';
                }
            }
        }else if (scrollPos >= memo_top-1 && scrollPos < calendar_top) {
            for(var k = 0; k < navEle.length; k++){
                navEle[k].style.color = 'rgba(255, 255, 255, .65)';
                navEle[k].style.fontWeight = '';
                if(k === 2){
                    navEle[k].style.color = 'rgb(255, 255, 255)';
                    navEle[k].style.fontWeight = 'bold';
                }
            }
        }else if (scrollPos >= calendar_top) {
            for(var k = 0; k < navEle.length; k++){
                navEle[k].style.color = 'rgba(255, 255, 255, .65)';
                navEle[k].style.fontWeight = '';
                if(k === 3){
                    navEle[k].style.color = 'rgb(255, 255, 255)';
                    navEle[k].style.fontWeight = 'bold';
                }
            }
        }
    })


// These are function for home.php
    $('#prev_m').click(function(){
        window.location.href = './calendarAction.php?action=prevM';
    });

    $('#next_m').click(function(){
        window.location.href = './calendarAction.php?action=nextM';
    });

    $('#prev_y').click(function(){
        window.location.href = './calendarAction.php?action=prevY';
    });

    $('#next_y').click(function(){
        window.location.href = './calendarAction.php?action=nextY';
    });

    $('#today').click(function(){
        window.location.href = './calendarAction.php?action=reset'
    });
// ----------------------------------------------------------------------
// These are function for manageCalendar.php
    $('#prev_M').click(function(){
        window.location.href = './calendarAction.php?action=prevM&onPage=TRUE';
    });

    $('#next_M').click(function(){
        window.location.href = './calendarAction.php?action=nextM&onPage=TRUE';
    });

    $('#prev_Y').click(function(){
        window.location.href = './calendarAction.php?action=prevY&onPage=TRUE';
    });

    $('#next_Y').click(function(){
        window.location.href = './calendarAction.php?action=nextY&onPage=TRUE';
    });

    $('#todayInner').click(function(){
        window.location.href = './calendarAction.php?action=reset&onPage=TRUE'
    });

    $('#startMonthSelect').on('change', function(){
        var startMonth = $(this).val();
        startMonth = startMonth.substring(0, startMonth.length -1);
        startMonth = parseInt(startMonth);
        var arr_30 = [4, 6, 9, 11];
        var arr_31 = [1, 3, 5, 7, 8, 10, 12];
        var is_30 = arr_30.includes(startMonth);
        var is_31 = arr_31.includes(startMonth);
        option_28 = "";
        for(var i=1; i<29; i++){
            option_28 += "<option>"+i+"일</option>";
        }

        // 30일 까지
        if(is_30 && !is_31){
            for(var i=29; i<31; i++){
                option_28 += "<option>"+i+"일</option>";
            }
        }

        // 31일 까지
        if(!is_30 && is_31){
            for(var i=29; i<32; i++){
                option_28 += "<option>"+i+"일</option>";
            }
        }
        $('#startDaySelect').html(option_28);

        /* ****************************** */
        var startYear = $('#startYearSelect').val();
        var endYear = $('#endYearSelect').val();

        if(endYear < startYear){
            $('#endYearSelect').val($('#startYearSelect').val());
            $('#endMonthSelect').val($(this).val());  
            var endMonth = $(this).val();
            endMonth = endMonth.substring(0, endMonth.length -1);
            endMonth = parseInt(endMonth);
            var arr_30 = [4, 6, 9, 11];
            var arr_31 = [1, 3, 5, 7, 8, 10, 12];
            var is_30 = arr_30.includes(endMonth);
            var is_31 = arr_31.includes(endMonth);
            option_28 = "";
            for(var i=1; i<29; i++){
                option_28 += "<option>"+i+"일</option>";
            }

            // 30일 까지
            if(is_30 && !is_31){
                for(var i=29; i<31; i++){
                    option_28 += "<option>"+i+"일</option>";
                }
            }

            // 31일 까지
            if(!is_30 && is_31){
                for(var i=29; i<32; i++){
                    option_28 += "<option>"+i+"일</option>";
                }
            }
            $('#endDaySelect').html(option_28);          
        }else if(startYear == endYear){
            $('#endMonthSelect').val($(this).val());
            var endMonth = $(this).val();
            endMonth = endMonth.substring(0, endMonth.length -1);
            endMonth = parseInt(endMonth);
            var arr_30 = [4, 6, 9, 11];
            var arr_31 = [1, 3, 5, 7, 8, 10, 12];
            var is_30 = arr_30.includes(endMonth);
            var is_31 = arr_31.includes(endMonth);
            option_28 = "";
            for(var i=1; i<29; i++){
                option_28 += "<option>"+i+"일</option>";
            }

            // 30일 까지
            if(is_30 && !is_31){
                for(var i=29; i<31; i++){
                    option_28 += "<option>"+i+"일</option>";
                }
            }

            // 31일 까지
            if(!is_30 && is_31){
                for(var i=29; i<32; i++){
                    option_28 += "<option>"+i+"일</option>";
                }
            }
            $('#endDaySelect').html(option_28);
        }
    });

    $('#endMonthSelect').on('change', function(){
        var endMonth = $(this).val();
        endMonth = endMonth.substring(0, endMonth.length -1);
        endMonth = parseInt(endMonth);
        var arr_30 = [4, 6, 9, 11];
        var arr_31 = [1, 3, 5, 7, 8, 10, 12];
        var is_30 = arr_30.includes(endMonth);
        var is_31 = arr_31.includes(endMonth);
        option_28 = "";
        for(var i=1; i<29; i++){
            option_28 += "<option>"+i+"일</option>";
        }

        // 30일 까지
        if(is_30 && !is_31){
            for(var i=29; i<31; i++){
                option_28 += "<option>"+i+"일</option>";
            }
        }

        // 31일 까지
        if(!is_30 && is_31){
            for(var i=29; i<32; i++){
                option_28 += "<option>"+i+"일</option>";
            }
        }
        $('#endDaySelect').html(option_28);
    });

    $('#startYearSelect').on('change', function(){
        var startYear = $(this).val();
        var endYear = $('#endYearSelect').val();
        if(startYear > endYear){
            $('#endYearSelect').val($('#startYearSelect').val());
        }
    })

    $('#startDaySelect').on('change', function(){
        var startYear = $('#startYearSelect').val();
        var endYear = $('#endYearSelect').val();

        if(startYear > endYear){
            $('#endYearSelect').val($('#startYearSelect').val());
        }
        if(startYear >= endYear){
            var startMonth = $('#startMonthSelect').val();
            startMonth = startMonth.substring(0, startMonth.length -1);
            startMonth = parseInt(startMonth);
            var endMonth = $('#endMonthSelect').val();
            endMonth = endMonth.substring(0, endMonth.length -1);
            endMonth = parseInt(endMonth);
            console.log(startMonth+'/'+endMonth);
            if(startMonth > endMonth){
                $('#endMonthSelect').val($('#startDaySelect').val());
            }
            if(startMonth >= endMonth){
                var startDay = $('#startDaySelect').val();
                startDay = startDay.substring(0, startDay.length -1);
                startDay = parseInt(startDay);
                var endDay = $('#endDaySelect').val();
                endDay = endDay.substring(0, endDay.length -1);
                endDay = parseInt(endDay);
                if(startDay > endDay){
                    $('#endDaySelect').val($('#startDaySelect').val());                    
                }
            }
        }
    })

    $('#calFilter1').on('change', function(){
        window.location.href="./calendarFilterAction.php?filter=my";
    })
    $('#calFilter2').on('change', function(){
        window.location.href="./calendarFilterAction.php?filter=all";
    })

    $('#help').on('mouseenter', function(){
        var filter = document.getElementById('calendarFilter');
        filter.style.display = 'none';
    })

    $('#help').on('mouseout', function(){
        var filter = document.getElementById('calendarFilter');
        filter.style.display = 'block';
    })
});

function click_menu(x){
    x.classList.toggle("change");
    var menuTab = document.getElementById('menuTab');
    var header = document.getElementById('header');
    var todo = document.getElementById('todo');
    var todoP = document.getElementById('todoP');
    var todoBox = document.getElementById('todoBox');
    var memo = document.getElementById('memo');
    var memoText = document.getElementById('memoText');
    var calendar = document.getElementById('calendar');
    var calendarBody = document.getElementById('calendarBody');

    if(menuTab.style.display !== 'block') {
        menuTab.style.display = 'block';
        // For modify width when click menu bar
        header.style.width = "85%";
        todo.style.width = "85%";
        todoP.style.gridColumnStart='1';
        todoP.style.gridColumnEnd='11';
        todoBox.style.width = "85%";
        memo.style.width = "85%";
        memoText.style.width="400px";
        calendar.style.width = "85%";
        calendarBody.style.width = "476px";
        calendarBody.style.gridTemplateColumns = "repeat(7, 68px)";
    }else {
        menuTab.style.display = 'none';
        // For modify width when click menu bar
        header.style.width = "100%";
        todo.style.width = "100%";
        todoP.style.gridColumnStart='2';
        todoP.style.gridColumnEnd='10';
        todoBox.style.width = "100%";
        memo.style.width = "100%";
        memoText.style.width="500px";
        calendar.style.width = "100%";
        calendarBody.style.width = "560px";
        calendarBody.style.gridTemplateColumns = "repeat(7, 80px)";
    }
}

// 모두 parameter를 num으로 했으나, 하나의 num이 여러 line을 가질경우 문제가 발생.
// line을 계산해서 parameter로 line을 넘김으로 해결

function resize_todo(num) {
    var box = document.getElementById('todoBox');
    var k = 300 + (num-4)*50;
    box.style.height = k+'px';
}

function resize_todoP(num) {
    var pTag = document.getElementById('todoP');

    if(num > 4){
        var p = 148 + (num-4)*50;
    }else {
        var p =148;
    }    
    pTag.style.height = p+'px';
}

function resize_todoNote(num) {
    var note = document.getElementById('listTab'); 
    var k = 480 + (num-15)*23.25;
    note.style.height = k+'px';
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var link = "./dropCalendarAction.php?CAL_seq="+data;
  window.location.href = link;
}

function navMove(sec){
    var navEle = document.getElementsByClassName('navli');
    for(var k = 0; k < navEle.length; k++){
        navEle[k].style.color = 'rgba(255, 255, 255, .65)';
        navEle[k].style.fontWeight = '';
    }
    document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth';
    window.location.href = './home.php#'+sec;
}