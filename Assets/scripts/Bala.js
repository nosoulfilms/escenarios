
		

function OnCollisionEnter (colision : Collision) {

	var contacto: ContactPoint;
	
	contacto = colision.contacts [0] ;
	
	var rotacion : Quaternion;
	
	rotacion = Quaternion.FromToRotation ( Vector3.forward,contacto.normal);
	
	

	
	
	
	
	

	var giro : Quaternion;
	
	giro = Quaternion.identity;
	
	if ( colision.gameObject.name == "alien"){
		playercontroller.vida= playercontroller.vida-1;
		Destroy  (gameObject);
		Debug.Log(playercontroller.vida);
	}
 }