const PORT = process.env.PORT || 3000;  // Usando a variável de ambiente PORT
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
