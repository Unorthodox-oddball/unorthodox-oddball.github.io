# Unorthodox-oddball.github.io

Unorthodox-oddball.github.io

https://unorthodox-oddball.github.io/

![sym](https://user-images.githubusercontent.com/100816088/216017625-168f2682-0bc1-4e14-840d-019f492aec37.gif)

# html-sorting
Simply sort dirty html code. 

using tkinter and BeautifulSoup, you can use not only html code but also any text file. probably, maybe not.

# Footer

Memento mori, Memento te hominem esse, Respice post te, hominem te esse memento

&copy; 2023 - 2023 Unorthodox-oddball - All Rights Reserved.  
Last Updated: 2023-02-16

<script>
    const currentYear = new Date().getFullYear();
    const startYear = 2023; // 저작권 시작 연도
    let copyrightText = "";

    if (currentYear === startYear) {
        copyrightText = startYear;
    } else {
        copyrightText = startYear + " - " + currentYear;
    }

    document.querySelector("footer").innerHTML += `
        <div>&copy; ${copyrightText} Unorthodox-oddball - All Rights Reserved.</div>
        <div>Last Updated: ${new Date(document.lastModified).toLocaleDateString()}</div>
    `;
</script>

