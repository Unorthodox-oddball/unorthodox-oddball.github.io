# Unorthodox-oddball.github.io

Unorthodox-oddball.github.io

https://unorthodox-oddball.github.io/

![sym](https://user-images.githubusercontent.com/100816088/216017625-168f2682-0bc1-4e14-840d-019f492aec37.gif)



# Tools

1. html-sorting

Simply sort dirty html code. 

Using tkinter and BeautifulSoup. 

*GUI, Format HTML bt, Open File bt*

You can use not only html code but also any text file. Probably, maybe not.

[html line clear.zip](https://github.com/Unorthodox-oddball/unorthodox-oddball.github.io/files/10758689/html.line.clear.zip)



<div class="marquee">
  <p>Created by Unorthodox-oddball</p>
</div>
.marquee {
  overflow: hidden;
  position: relative;
}

.marquee p {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  line-height: 50px; 
  text-align: center;
  
  animation: marquee 15s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
