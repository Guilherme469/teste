public class AppPessoa{
	public static void main(String args[]){
	Pessoa p1 = new Pessoa("Guilherme", "guilhermeluiz06@hotmail.com", 2000);
	Pessoa p2 = new Pessoa("Guilheme", 5000);


	p1.exibirDados();
	p1.aumentarSalario(15);
	p1.exibirDados();
	p2.exibirDados();
}
}
