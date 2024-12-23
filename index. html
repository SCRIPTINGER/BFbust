<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Копировать текст</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            color: #333;
            text-align: center;
            padding: 50px;
        }
        .copy-text {
            background-color: #4CAF50;
            color: white;
            padding: 15px;
            border-radius: 5px;
            cursor: pointer;
            display: inline-block;
            margin: 20px 0;
            transition: background-color 0.3s;
        }
        .copy-text:hover {
            background-color: #45a049;
        }
        .advertisement {
            margin-top: 30px;
            padding: 20px;
            background-color: #ffeb3b;
            border: 1px solid #fbc02d;
        }
    </style>
</head>
<body>

    <h1>Копируйте текст в буфер обмена</h1>
    <div class="copy-text" onclick="copyToClipboard()">Нажмите здесь, чтобы скопировать текст!</div>

    <div class="advertisement">
        <h2>Реклама</h2>
        <p>Посетите наш сайт для получения лучших предложений!</p>
    </div>

    <script>
        function copyToClipboard() {
            const text = "Текст для копирования";
            navigator.clipboard.writeText(text).then(() => {
                alert("Текст скопирован в буфер обмена!");
            }).catch(err => {
                console.error("Ошибка при копировании текста: ", err);
            });
        }
    </script>

</body>
</html>
