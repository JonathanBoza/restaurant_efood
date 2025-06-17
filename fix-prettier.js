const { execSync } = require('child_process');

// Lista de arquivos para formatar
const files = [
  'src/components/Checkout/index.tsx',
  'src/components/MaskedInput/index.tsx',
  'src/components/Toast/index.tsx'
];

// Executa o prettier em cada arquivo
files.forEach(file => {
  try {
    console.log(`Formatando ${file}...`);
    execSync(`npx prettier --write ${file}`, { stdio: 'inherit' });
    console.log(`${file} formatado com sucesso!`);
  } catch (error) {
    console.error(`Erro ao formatar ${file}:`, error.message);
  }
});

console.log('Formatação concluída!');
