# Sistema de Filmes e Séries
O projeto é formado por uma única ponta, que é a do cliente. É possível visualizar a listagem de Filmes e Series, bem como buscar por conteúdos específicos.
Além disso, também é possível acessar os detalhes de um determinado conteúdo para ver mais sobre ele.

## Tecnologias e Versões
```
PHP 7.4.33
```
```
Node.js 20.17.0
```
```
MySQL 8.3.0
```


## Rodando o projeto

### Back-end
Inicie digitando o seguinte comando para acessar a pasta do back-end:
```bash
  cd recruiting-laon-backend
```

Após já estar dentro da pasta do backend, execute os seguintes comandos em sequência:
```bash
  npm install
```
```bash
  composer install
```
```bash
  cp .env.example .env
```

Após isso, gere a chave laravel digitando o seguinte comando:
```bash
  php artisan key:generate
```

Agora será necessário alterar as informações para o banco de dados. (será necessário que você crie o seu próprio banco de dados).</br>
Dentro do arquivo .env, altere as informações de DB_USERNAME e DB_PASSWORD para o usuário e senha (respectivamente) do seu banco de dados.

Rode as migrations e os seeders com os seguintes comandos que deverão ser executados em sequência:

```bash
  php artisan migrate:fresh
```
```bash
  php artisan db:seed
```


Agora rode o servidor digitando o comando: 
```bash
  php artisan serve
```
Nesse momento o back-end do projeto já deverá estar rodando.

### Front-end
Abra um novo terminal e digite o seguinte comando para acessar a pasta do front-end:
```bash
  cd recruiting-laon-frontend
```

Dentro da pasta src > app > Utils, altere as variáveis "url" e "UrlRaiz" para o local que seu backend está rodando.
Por exemplo: var url = 'http://127.0.0.1:8000/api' e urlRaiz: 'http://127.0.0.1:8000'

Depois execute os seguintes comando em sequência:
```bash
  npm install
```
```bash
  npm start
```

Nesse momento, o projeto já deve estar rodando completamente.

Para realizar o login, as credenciais usadas deverão ser:
Usuário: admin@email.com
Senha: admin123
