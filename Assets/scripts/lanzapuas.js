public var misil : GameObject ;
public var velocidad = 1 ;
	
	
private var nextFire = 0.0;
function OnTriggerStay(other:Collider) {
		var fireRate = 0.5;
		
		
		var aux : GameObject;
		if(other.gameObject.name== "alien"){
			Debug.Log("cachito") ;
			var auxxx : GameObject;
			
			if ( Time.time > nextFire){
				nextFire = fireRate + Time.time;
				
				
				auxxx = Instantiate (misil, transform.position, transform.rotation);
				
				
				auxxx.rigidbody.velocity = transform.TransformDirection (Vector3(0,0,velocidad));
				
				Physics.IgnoreCollision(aux.collider, transform.root.collider);
			}
		}

}



	

	
	