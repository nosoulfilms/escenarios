#pragma strict
var pinchitos : trampapinchos;

function Start () {

}

function Update () {

}
function OnTriggerEnter(other : Collider){

	 	if( other.gameObject.name == "alien"){
	 		pinchitos.Activar();
	 		Debug.Log ("entra");
	}
}