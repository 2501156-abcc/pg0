const launchBtn = document.getElementById('launchBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const logArea = document.getElementById('logArea');

function log(message) {
	logArea.textContent += message + '\n';
	logArea.scrollTop = logArea.scrollHeight;
}

launchBtn.addEventListener('click', () => {
	const username = usernameInput.value.trim();
	const password = passwordInput.value.trim();

	if (!username) {
		alert('ユーザー名を入力してください');
		return;
	}

	log(`起動処理開始...`);
	log(`ユーザー名: ${username}`);
	log(`入力されたコード: ${password || '（なし）'}`);
	log('起動中...');
	launchBtn.disabled = true;

	setTimeout(() => log('ログイン成功！'), 1500);
	setTimeout(() => log('リソースを読み込み中...'), 3000);
	setTimeout(() => {
		log('起動完了！');
		launchBtn.disabled = false;

		setTimeout(() => {
			window.location.href = 'main.html';
		}, 1500); 
	}, 5000);
});