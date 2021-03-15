public class TesteArgs{
	public static void main(String args[]){
		/*
		System.out.println("Argumentos " +args.length);
		System.out.println("E quais os valores?");
		for (int i=0; i <args.length; i++){
			System.out.println("args["+i+"]=" +args[i]);
		}
		*/

		float a,b,media;

		if(args.length== 0) {
			System.out.println("INFO: Execute java TesteArgs <<Valor1> <Valor2> ");		
		}
		else {
			a = Float.parseFloat(args[0]);
			b = Float.parseFloat(args[1]);
			media = (a+b)/ 2;
			System.out.println("INFO: media igual a "+media);
		}
	}
}