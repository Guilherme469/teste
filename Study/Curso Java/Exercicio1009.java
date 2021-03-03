import java.util.Scanner;

public class Exercicio1009{
public static void main(String[] args) {
		Scanner teclado = new Scanner(System.in);

		String nome;
		double salario, vendas;
		double comissao, salarioTotal;

		System.out.println("Digite seu nome");
		nome = teclado.nextLine();
		System.out.println("Digite seu salario");
		salario = teclado.nextDouble();
		System.out.println("Digite o numero de vendas");
		vendas = teclado.nextDouble();

		comissao = vendas * 15/100;

		salarioTotal = salario + comissao;


		System.out.printf("Salario R$ %.2f\n ", salarioTotal);



}
}