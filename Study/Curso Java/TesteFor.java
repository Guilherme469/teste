import java.util.Scanner;

public class TesteFor {
	public static void main(String args[]){

		Scanner teclado = new Scanner(System.in);

		int valor;
		int contador;

		System.out.println("Digite um valor");
		valor = teclado.nextInt();
		System.out.println("Contando de 1 ate o valor ----");
		for (contador =1; contador <= valor;  contador ++){
			System.out.println("Valor do contador = "+contador);
		}

	}
}