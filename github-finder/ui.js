class UI {
    // UI 클래스의 생성자
    constructor() {
        // 프로필 요소를 가져와서 변수에 할당합니다.
        this.profile = document.getElementById('profile');
        this.repos = document.getElementById('repos');
    }

    // 사용자 정보를 화면에 표시하는 메서드입니다.
    showProfile(user) {
        // 프로필 정보 및 레포지토리 정보를 HTML 문자열로 생성하여 프로필 영역에 삽입합니다.
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                    </div>

                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span>
                        <span class="badge badge-third">Followers : ${user.followers}</span>
                        <span class="badge badge-success">Following : ${user.following}</span>
                        <br><br>

                        <table class="table">
                            <tr class="list-group-item">
                                <td>Company: ${user.company}</td>
                            </tr>
                            <tr class="list-group-item">
                                <td>Website / Blog: ${user.blog}</td>
                            </tr>
                            <tr class="list-group-item">
                                <td>Location: ${user.location}</td>
                            </tr>
                            <tr class="list-group-item">
                                <td>Email: ${user.email}</td>
                            </tr>
                            <tr class="list-group-item">
                                <td>Member Since: ${user.created_at}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
        // 레포지토리 정보를 HTML 문자열로 생성하는 메서드
    showRepos(repos){
        // 레포지토리 정보를 HTML 문자열로 생성하여 repos 영역에 삽입합니다.
        this.repos.innerHTML = `
             <div class="repo">   
                <h3 class="page-heading mb-3">Latest Repos</h3>
                <table class="table">
                    <tbody>
                        ${repos.map(repo => `<tr><td class="table-repo"><a href="${repo.html_url}" target="_blank">${repo.name}</a></td></tr>`).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
    

    getReposHTML(repos) {
        if (repos && repos.length > 0) {
            // 레포지토리가 있는 경우 리스트로 표시
            `
            <ul class="list-group">
                ${repos.map(repo => `<li class="list-group-item"><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`).join('')}
            </ul>
        `;
        }else {
            // 레포지토리가 없는 경우 메시지 표시
            return '<p>No repositories available</p>';
        }
    }
    
    // 레포지토리 아이템을 HTML 문자열로 생성하는 메서드
    getRepoItemHTML(repo) {
        return `<li class="list-group-item"><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`;
    }
   
    // 알림 메시지를 화면에 표시하는 메서드
    showAlert(message, classname) {
        // div 엘리먼트 생성
        const div = document.createElement('div');
        // 클래스 추가
        div.className = classname;
        // 텍스트 추가
        div.appendChild(document.createTextNode(message));

        // 부모 엘리먼트 가져오기
        const container = document.querySelector('.searchContainer');
        // 검색 상자 가져오기
        const search = document.querySelector('.search');
        // 알림 삽입
        container.insertBefore(div, search);

        // 1초 후에 알림을 지우는 타임아웃 설정
        setTimeout(() => {
            this.clearAlert();
        }, 1000);
    }

    // 프로필 영역을 지우는 메서드입니다.
    clearProfile() {
        this.profile.innerHTML = '';
    }
}
