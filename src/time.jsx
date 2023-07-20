
function formatTimeAgo(createdDate) {
    const serverTime = new Date(createdDate);
  const utcOffset = 9 * 60; // 한국 시간(KST)은 UTC+9 이므로 9시간에 해당하는 분을 더합니다.
  const koreaTime = new Date(serverTime.getTime() + utcOffset * 60000);
  
  
    const currentDate = new Date(); // 현재 시간
    const diffInMilliseconds = currentDate - koreaTime; // 현재 시간과 조정된 작성 시간의 차이 (밀리초)
  
    // 시간 간격 계산
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000); // 초 단위
    const diffInMinutes = Math.floor(diffInSeconds / 60); // 분 단위
    const diffInHours = Math.floor(diffInMinutes / 60); // 시간 단위
    const diffInDays = Math.floor(diffInHours / 24); // 일 단위
  
    if (diffInDays >= 1) {
      return `${diffInDays}일 전`;
    } else if (diffInHours >= 1) {
      return `${diffInHours}시간 전`;
    } else {
      return `${diffInMinutes}분 전`;
    }
  }
  
  export default formatTimeAgo;
  