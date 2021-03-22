let logout = () => {
  localStorage.clear();
  sessionStorage.clear();

  // 跳转
  setTimeout(() => {
    location.href = location.origin;
  }, 500);
}

export default logout
