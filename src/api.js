// api.js
const enviarDadosParaServidor = async (formData) => {
    try {
      const response = await fetch('/api/salvar-dados-formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Dados do formulário enviados com sucesso!');
      } else {
        console.error('Erro ao enviar dados do formulário:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar dados do formulário:', error.message);
    }
  };
  
  export { enviarDadosParaServidor };
  