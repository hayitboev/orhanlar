# Настройка GitHub репозитория

## 🚀 Быстрые шаги

### 1. Создайте репозиторий на GitHub

1. Перейдите на [GitHub.com](https://github.com)
2. Нажмите зеленую кнопку "New" или "+" → "New repository"
3. Введите название: `nextjs-project` (или любое другое)
4. Выберите "Public" или "Private"
5. **НЕ ставьте галочки** на:
   - ✅ Add a README file
   - ✅ Add .gitignore
   - ✅ Choose a license
6. Нажмите "Create repository"

### 2. Загрузите код в GitHub

Выполните эти команды в терминале:

```bash
# Добавьте удаленный репозиторий (замените YOUR_USERNAME и REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Переименуйте ветку в main (современный стандарт)
git branch -M main

# Отправьте код в GitHub
git push -u origin main
```

### 3. Пример команд

Если ваш репозиторий называется `nextjs-project` и ваш username `john`:

```bash
git remote add origin https://github.com/john/nextjs-project.git
git branch -M main
git push -u origin main
```

## 🔗 Деплой

После загрузки в GitHub:

1. **Vercel** (рекомендуется): [vercel.com](https://vercel.com)
2. **Netlify**: [netlify.com](https://netlify.com)
3. **Railway**: [railway.app](https://railway.app)

Подробные инструкции смотрите в файле `DEPLOYMENT.md`

## ✅ Проверка

После загрузки:
- Перейдите на ваш GitHub репозиторий
- Убедитесь, что все файлы загружены
- Проверьте, что README.md отображается корректно 