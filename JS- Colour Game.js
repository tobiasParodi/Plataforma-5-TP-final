var boxes = document.querySelectorAll(".box");
var s = document.querySelector('.rgbspan');
var colors = generateRandomColor(6);
var pickedColor = colors[Math.floor(Math.random() * 6)];
s.textContent = pickedColor;
var playbtn = document.querySelector("#playAgain");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var boxCount = 6;
var statusText = document.querySelector(".status")
statusText.textContent = "Let's Play!!";
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/styles.css">
    <title>RGB color guessing</title>
</head>

<body>

    <h1>Color guessing game
        <br> <span class="rgbspan"></span> <br> Guess the color above
    </h1>

    <div class="line">
        <button id="PlayAgain">New Colors</button>
        <span class="status"></span>
        <button style="color: #f88989;" id="easyBtn">Easy</button>
        <button id="hardBtn">Hard</button>
    </div>

    <div class="mainBox">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
    <script src="assets/main.js"></script>
</body>

</html>

