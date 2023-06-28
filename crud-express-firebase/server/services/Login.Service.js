
// Variáveis em memória para armazenar os dados de login
const loginData = [
    { email: 'admin', senha: 'senha1' },
    { email: 'usuario2@example.com', senha: 'senha2' },
    { email: 'jefferson@melhorprofessor.com', senha: 'senha3' }
  ];
  
  // Função para verificar o login
class LoginData {
    static autenticacao(request, response) {
        const { username, password } = request.body
        // Verifica se o usuário e senha estão corretos e retorna true ou false
        loginData.forEach(user => {
            if (user.username === username && user.password === password) {
                return response.json({ res: "true" })
            }
        });
        return response.json({ res: "false" })
    }

}
  
  export default LoginData;