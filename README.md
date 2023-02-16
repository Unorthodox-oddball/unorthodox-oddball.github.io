# Unorthodox-oddball.github.io

Unorthodox-oddball.github.io

https://unorthodox-oddball.github.io/

![sym](https://user-images.githubusercontent.com/100816088/216017625-168f2682-0bc1-4e14-840d-019f492aec37.gif)

# html-sorting
Simply sort dirty html code. 

using tkinter and BeautifulSoup, you can use not only html code but also any text file. probably, maybe not.

<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
    <meta charset="UTF-8">
    <style>
      footer {
        text-align: center;
        color: #555;
        margin-top: 50px;
        padding-top: 10px;
      }

      .tagline {
        font-size: 16px;
        margin-bottom: 10px;
      }

      .copyright-info {
        font-size: 14px;
      }

      footer span {
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div>
      <h1>Welcome to my website!</h1>
      <p>This is the content of my website.</p>
    </div>
    <footer>
      <h2 class="tagline">Memento mori, Memento te hominem esse, Respice post te, hominem te esse memento</h2>
      <div class="copyright-info">
        &copy; <span class="copyright-year"></span> Unorthodox-oddball - All Rights Reserved.<br>
        Last Updated: <span class="last-updated"></span>
      </div>
    </footer>
    <script>
      const currentYear = new Date().getFullYear();
      const startYear = 2023; // 저작권 시작 연도
      let copyrightText = "";

      if (currentYear === startYear) {
        copyrightText = startYear;
      } else {
        copyrightText = startYear + " - " + currentYear;
      }

      document.querySelector(".copyright-year").textContent = copyrightText;

      const lastUpdated = new Date(document.lastModified).toLocaleDateString();
      document.querySelector(".last-updated").textContent = "Last Updated: " + lastUpdated;
    </script>
  </body>
</html>

