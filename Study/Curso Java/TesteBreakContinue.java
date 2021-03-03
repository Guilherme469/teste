import java.util.Scanner;

public class TesteBreakContinue {
	public static void main(String args[]){

		Scanner teclado = new Scanner(System.in);

		int valor;
		int contador;

		System.out.println("Digite um valor");
		valor = teclado.nextInt();

		/*for (contador =1; contador <= valor; contador++){
			System.out.println("Contando "+contador);
			if (contador ==5) {
				break;
			}


		}*/
contador =1;
		while (contador <= valor){
			if (contador ==5) {
				continue;
			}
			System.out.println("Contador = "+contador);
			contador++;
		}

		System.out.println("Fim do programa");

	}
}