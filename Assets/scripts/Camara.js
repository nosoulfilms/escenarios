

	


function Start () {

}

function Update () {

 var movcamara = GameObject.Find("alien");

	transform.position = movcamara.transform.position  ; // para buscar el gameObject hay que poner el nombre de la variable que lo busca
	
	transform.position.y = movcamara.transform.position.y+10;
	transform.position.x = movcamara.transform.position.x;
	transform.position.z = movcamara.transform.position.z;
	
	
}