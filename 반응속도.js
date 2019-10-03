var 스크린 = document.querySelector('#screen');
var 시작시간;
var 끝시간;
var 기록 = [];
var 타임아웃;
스크린.addEventListener('click',function(){
    if (스크린.classList.contains('waiting')) { //파란색-->빨간색
        스크린.classList.remove('waiting');
        스크린.classList.add('ready');
        스크린.textContent = '초록색이되면 클릭하세요!'
          타임아웃 = setTimeout(function(){
          시작시간 = new Date(); //초록색으로 바뀐 후부터의 시간을 재어 시작시간으로 함 !
          스크린.click(); //이벤트리스너의 클릭이벤트 다시 발생하여 초록색배경의 클릭하세요!로 바뀜
        }, Math.floor(Math.random()*1000) + 2000) // 2000 ~ 1000사이의수 ,  2초에서 3초사이!
    } else if (스크린.classList.contains('ready')) {  //빨간색-->초록색
      if (!시작시간) { //부정클릭을 체크
        clearTimeout(타임아웃);
        스크린.classList.remove('ready');
        스크린.classList.add('waiting');
        스크린.textContent = '초록색이 되면 클릭해주세요!!';
      } else {
        스크린.classList.remove('ready');
        스크린.classList.add('now');
        스크린.textContent = '클릭하세요!'
      }

    } else if (스크린.classList.contains('now')) { //초록색 --> 파란색
       끝시간 = new Date(); //초록색으로 바뀌고 내가 스크린을 클릭하여 파란색으로 바뀌는 그 시간이 끝시간이 됨 .
      const time = body.createElement('div');
      time.textContent = '반응속도' + 끝시간 - 시작시간+'ms';
      document.body.append(time);
      //console.log('반응속도', 끝시간 - 시작시간,'ms');
      기록.push(끝시간 - 시작시간);
      시작시간 = null;
      끝시간 = null;
      스크린.classList.remove('now');
      스크린.classList.add('waiting');
      스크린.textContent = '클릭해서 시작하세요';
    }
});
