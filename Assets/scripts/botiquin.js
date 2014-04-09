#pragma strict

function Start () {

}

function Update () {

}
function OnTriggerEnter (other : Collider) {
	Debug.Log ("hola");
	if (other.gameObject.name== "alien"){
		
		playercontroller.vida++ ;
		Debug.Log ("vida");
		Destroy  (gameObject); 
		}
	}