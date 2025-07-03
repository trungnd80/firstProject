document.getElementById('getUserBtn').addEventListener('click', () => {
  ZaloMiniApp.getUserInfo({
    success: function(data) {
      document.getElementById('userInfo').innerHTML = `
        <p><strong>ID:</strong> ${data.id}</p>
        <p><strong>Display Name:</strong> ${data.name}</p>
        <img src="${data.avatar}" alt="Avatar" width="100"/>
      `;
    },
    fail: function(error) {
      document.getElementById('userInfo').innerHTML = `
        <p style="color:red;">Lỗi khi lấy thông tin người dùng: ${JSON.stringify(error)}</p>
      `;
    }
  });
});