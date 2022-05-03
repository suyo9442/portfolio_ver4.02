# portfolio_ver4.02
 2022년 portfolio_ver4.02


22/05/02
1. 100vh 해결 
--> JS trick: CSS에 vh변수 생성, JS로 기기별 사이즈로 변환

2. 스와이퍼 100vh 해결
--> 슬라이드 섹션과 각 슬라이드에 JS trick 사용

3. svg 해결
---> 창에 대지 1개, 아이콘1개 있는 상태로 코드뽑아야함 
---> svg style은 각 태그안에 있어도 공유되기 때문에
class를 개별로 설정해줘야 함 


22/05/03
1. 스와이퍼 잘리는 부분 해결
--> box-sizing으로 해결!!^^...^^

2. header 이동 js로 제어하기 (제이쿼리 사용안하고!)
- 부드럽게, 헤더가리는부분 해결하기
--> scrollTo, offsetTop, offsetHeight
*중복되는 코드 합치는 방법은?

3. 웹표준성 - 스킵메뉴 만들기
--> rel: "bookmark"
--> focus, active되었을 때 top값 변경

4. contact 이메일, 전화번호 링크연결
--> mailto, tell

5. a태그 hover 수정