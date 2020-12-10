programa
{
	
	funcao inicio()
	{
		real janeiro,fevereiro,marco,abril,total,media

		escreva("Total de vendas de Janeiro: ")
		leia(janeiro)
		escreva("Total de vendas de Fevereiro: ")
		leia(fevereiro)
		escreva("Total de vendas de Marco: ")
		leia(marco)
		escreva("Total de vendas de Abril: ")
		leia(abril)

		total = janeiro+fevereiro+marco+abril

		escreva("O total de vendas e de: " + total)

		media = (janeiro+fevereiro+marco+abril)/4

		escreva(" E a media de vendas foi de: " + media)

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 261; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */