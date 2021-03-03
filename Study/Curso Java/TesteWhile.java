import java.util.Scanner;

public class TesteWhile {
	public static void main(String args[]){

		Scanner teclado = new Scanner(System.in);

		int valor;
		int contador;

		System.out.println("Digite um valor");
		valor = teclado.nextInt();
		System.out.println("Contando de 1 ate chegar no valor -----------");
		contador = 1;

		while(contador <= valor){
			System.out.println("Valor do contador = "+contador);
			contador ++;
		}

	}
}