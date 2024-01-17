// init github
const github = new Github();
// init ui class
const ui = new UI();

// 검색 입력란
const searchUser = document.getElementById('searchUser');

// 검색 입력 이벤트 리스너
searchUser.addEventListener('keyup', (e) => {
    // 입력된 텍스트 가져오기
    const userText = e.target.value;
    if (userText !== '') {
        // HTTP 호출
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // 알림 표시
                    ui.showAlert('사용자를 찾을 수 없습니다', 'alert alert-danger');
                } else {
                    // 프로필 표시
                    ui.showProfile(data.profile);
                    //레포지토리 표시
                    ui.showRepos(data.repos);
                }
            });
    } else {
        // 프로필 지우기
        ui.clearProfile();
    }
});
