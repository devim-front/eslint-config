# DevimFront: eslint-config

Конфигурация ESLint для проектов на TS+React.

## Установка

1. Подключите этот пакет в dev-зависимости (и, разумеется, `eslint`, если он не был установлен ранее):

```bash
npm i -D eslint @devim-front/eslint-config
```

2. Создайте файл `.eslintrc` в корне проекта со следующим содержанием:

```json
{
  "extends": "@devim-front/eslint-config"
}
```

3. Добавьте в секцию `scripts` своего `package.json` следующие строки:

```json
{
  // ...
  "scripts": {
    // ...
    "lint": "eslint --ext .tsx,.ts,.jsx,.js src/",
    "lint-fix": "eslint --ext .tsx,.ts,.jsx,.js src/"
    // ...
  }
}
```

Теперь `npm run lint` запустит проверку code-style вашего проекта, а `npm run lint-fix` помимо простой проверки попробует исправить некоторые ошибки автоматически.

## Auto-fix при сохранении файла

Почти все современные IDE можно настроить таким образом, чтобы `eslint --fix` выполнялся автоматически при каждом сохранении файла. Настоятельно рекомендуется включить эту возможность. Как это сделать, ищите в документации к своей IDE.

## Auto-fix перед git commit

Помимо конфигурации eslint, в пакет включены инструменты [Husky](https://github.com/typicode/husky) и [Lint-Staged](https://github.com/okonet/lint-staged). Чтобы включить проверку на pre-commit:

1. Создайте файл `.huskyrc` со следующий содержанием в корне проекта:

```json
{
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```

2. Создайте файл `.lintstagedrc` со следующий содержанием в корне проекта:

```json
{
  "*.(ts|tsx|js|jsx)": "eslint --fix"
}
```

Теперь добавленные в коммит файлы будут проверятся с помощью eslint, и, если они не пройдут проверку, коммит будет отклонён.
