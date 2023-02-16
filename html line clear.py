import tkinter as tk
from tkinter import filedialog
from bs4 import BeautifulSoup
window = tk.Tk()
window.title("HTML Code Formatter")
window.geometry("512x512")
html_text = tk.Text(window)
html_text.pack(expand=True, fill='both')
def format_html():
    html_code = html_text.get("1.0", "end-1c")
    soup = BeautifulSoup(html_code, 'html.parser')
    prettified_html = soup.prettify()
    cleaned_html = '\n'.join([line for line in prettified_html.split('\n') if line.strip()])
    html_text.delete("1.0", tk.END)
    html_text.insert(tk.END, cleaned_html)
format_button = tk.Button(window, text="Format HTML", command=format_html)
format_button.pack(pady=10)
def open_file():
    file_path = filedialog.askopenfilename()
    with open(file_path, 'r') as f:
        html_text.delete("1.0", tk.END)
        html_text.insert(tk.END, f.read())
open_button = tk.Button(window, text="Open File", command=open_file)
open_button.pack(pady=10)
window.mainloop()
