import java.util.Scanner;

public class Repeticao{
public static void main(String args[]){
	
	int valor;

	Scanner teclado = new Scanner(System.in);

	System.out.println("Digite um valor");
	valor = teclado.nextInt();

	if (valor >= 0) {
		System.out.println("Valor positivo");
	}

	System.out.println("Obrigado");

}
}