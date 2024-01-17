// GitHub 클래스 정의
class Github {
    // 생성자에서 GitHub API에 사용될 클라이언트 ID와 시크릿 키를 설정
    constructor() {
        this.client_id = '4905e3a24606033c122f';
        this.client_secret = '066dce2629721724b48114922d21c2c635b46295';
    }

    async getUser(user) {
        
            // 사용자 프로필 정보를 가져오는 API 호출
            const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
            // 사용자의 레포지토리 정보를 가져오는 API 호출
            const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);
            
            if (!profileResponse.ok) {
                throw new Error(`GitHub API 요청이 실패했습니다. 상태 코드: ${profileResponse.status}`);
            }

            // 사용자 프로필 정보를 JSON 형식으로 변환
            const profile = await profileResponse.json();
            // 사용자의 레포지토리 정보를 JSON 형식으로 변환
            const repos = await reposResponse.json();
            
            
            if (!reposResponse.ok) {
                throw new Error(`GitHub API 요청이 실패했습니다. 상태 코드: ${reposResponse.status}`);
            }

            // 사용자 프로필과 레포지토리 정보를 함께 반환
            return { profile, repos };
        
    }
}