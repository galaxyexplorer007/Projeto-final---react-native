import tkinter as tk

# Função para processar os botões
def clicar(botao):
    if botao == "=":
        try:
            resultado = str(eval(entrada.get()))
            entrada.delete(0, tk.END)
            entrada.insert(tk.END, resultado)
        except:
            entrada.delete(0, tk.END)
            entrada.insert(tk.END, "Erro")
    elif botao == "C":
        entrada.delete(0, tk.END)
    else:
        entrada.insert(tk.END, botao)

# Criação da janela
janela = tk.Tk()
janela.title("Calculadora")
janela.configure(bg="#1e1e1e")

# Campo de entrada
entrada = tk.Entry(janela, font=("Arial", 24), bd=10, insertwidth=2, width=14, justify='right', bg="#282828", fg="white")
entrada.grid(row=0, column=0, columnspan=4)

# Botões
botoes = [
    ('7', '8', '9', '/'),
    ('4', '5', '6', '*'),
    ('1', '2', '3', '-'),
    ('0', '.', '=', '+'),
    ('C',)
]

for i, linha in enumerate(botoes):
    for j, botao in enumerate(linha):
        tk.Button(
            janela,
            text=botao,
            padx=20,
            pady=20,
            font=("Arial", 18),
            bg="#444" if botao not in ('=', 'C') else ("#ffce00" if botao == '=' else "#ff4444"),
            fg="white",
            command=lambda b=botao: clicar(b)
        ).grid(row=i+1, column=j, sticky="nsew")

# Deixa os botões ocuparem o espaço todo da célula
for i in range(5):
    janela.grid_rowconfigure(i+1, weight=1)
for j in range(4):
    janela.grid_columnconfigure(j, weight=1)

# Iniciar o app
janela.mainloop()