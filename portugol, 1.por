programa
{
	
	funcao inicio()
	{
		real nota1,nota2,nota3,nota4,media
		cadeia aluno
		
		escreva("Qual seu nome? ")
		leia(aluno)
		escreva("Digite sua nota ")
		leia(nota1)
		escreva("Digite sua nota ")
		leia(nota2)
		escreva("Digite sua nota ")
		leia(nota3)
		escreva("Digite sua nota ")
		leia(nota4)

		media = (nota1+nota2+nota3+nota4)/4

		escreva("O aluno: " + aluno + " obteve a media de: " + media)

		se(media>=5){
			escreva("\n" + "Parabens, voce foi aprovado!")
		}
		senao{
			escreva("\n" + "Voce foi reprovado")
		}
			
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 92; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */