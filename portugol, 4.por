// COMANDO "ESCOLHA"
programa
{
	
	funcao inicio()
	{
		escreva("Escolha uma das opcoes a seguir: 1 - Netflix 2 - Amazon Prime 3 - Disney Plus 4 - Sair")
		inteiro menu = 0

		escreva("\n" + "Digite sua opcao: ")
		leia(menu)
		
		escolha (menu)
	{
		caso 1:
		escreva("Abrindo Netflix..")
		pare

		caso 2:
		escreva("Abrindo Amazon Prime...")
		pare

		caso 3:
		escreva("Abrindo Disney Plus...")
		pare

		caso contrario:
		escreva("\n" + "Digite uma das opcoes.")
	}
}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 20; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */