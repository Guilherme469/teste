public class Televisao{
	
	//Atributos 
	String marca;
	boolean ligada;
	int volume;
	int canal;

	//Métodos
	void ligar(){
		 if(ligada == true){
			System.out.println("A TV "+marca+" está ligada");
}else {
	System.out.println("Ligue a TV");
}}

		void aumentarVolume(){
			if (ligada == true){
				volume++;
				System.out.println("A TV "+marca+" esta com volume "+volume);
			}else {
				System.out.println("Por favor, primeiro ligue a TV "+marca);
			}

		}
		void avancarCanal(){
			if (ligada == true){
				canal++;
				System.out.println("A TV "+marca+" esta com canal "+canal);
			}else {
				System.out.println("Por favor, primeiro ligue a TV "+marca);
			}
	}
}
