/* lingapp.js : Helper class LingApp  to construct screen mappings with questions and store results
   Global variable :
   LING_CFG

*/
Array.range= function(a, b, step){
    var A= [];
    if(typeof a== 'number'){
        A[0]= a;
        step= step || 1;
        while(a+step<= b){
            A[A.length]= a+= step;
        }
    }
    else{
        var s= 'abcdefghijklmnopqrstuvwxyz';
        if(a=== a.toUpperCase()){
            b=b.toUpperCase();
            s= s.toUpperCase();
        }
        s= s.substring(s.indexOf(a), s.indexOf(b)+ 1);
        A= s.split('');
    }
    return A;
}
var LING_CFG = {
		blocks_count:0,
		blocks :[],
    items_inblock:4,
    questions:[],
    audio_res:[]

	}
class LingApp
{

	constructor(blocks)
	{
		this._cfg = LING_CFG
		this._cfg.blocks_count = blocks;
		this._cfg.blocks =[];
    this._cfg.name = "SURESH KRISHNAN";

	}
	shuffle( inarray )
	{
		var array = inarray.slice();
		var currentIndex = array.length, temporaryValue, randomIndex;
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}
	init()
	{
		var c1 = Array.range(1,7);
		var c2 = Array.range(8,14);
		var c3 = Array.range(15,21);
		var c4 = Array.range(22,28);
		var Questions = [c1,c2,c3,c4];
		var shuffeled = []
		//console.log(Questions);
		for (var i = 0; i < Questions.length; i++) {
			shuffeled[i] = this.shuffle(Questions[i]);
		}
		for ( var i=0; i< this._cfg.blocks_count; i++) {
			this._cfg.blocks[i] = [shuffeled[0][i],shuffeled[1][i],shuffeled[2][i],shuffeled[3][i]];

		}
	}

	debug()
	{
    var i=0;
		for ( i=0; i< this._cfg.blocks_count; i++) {
			console.log(this._cfg.blocks[i]);
		}
   	console.log(this._cfg.blocks_count + "....."+LING_CFG.items_inblock );
    for ( i=0; i< this._cfg.questions.length; i++) {
      console.log("------");
			console.log(this._cfg.questions[i][3]);
		}

	}
  display_results()
	{
    var i=0;
    console.log("results .....");
	   for ( i=0; i< this._cfg.questions.length; i++) {
      console.log("Q["+ i +"]=" + this._cfg.audio_res[i] );

		}

	}
  set_audioselected(index, value)
  {
     this._cfg.audio_res[index-1]=value;

  }

}


LingApp.prototype.loadResource = function (name) {

	var key = "";
	var items = [];

	$.ajax({
		url: name,
		success: function(data) {

			var lines =  data.split(/\r\n|\n/);
      console.log(lines.length);
			for (var i=1; i<lines.length; i++) {
//        console.log(lines[i]);
        var line = lines[i].split(",");
				var frame = [];
				for (var j=0; j<line.length; j++) {
					frame.push(line[j]);
				}
			 LING_CFG.questions[i-1]=frame;
       LING_CFG.audio_res[i-1]=0;

			}
			return true;
		},
		async: false,
		error: function() {
			console.error("The file " + name + " wasn't found.");
			return false;
		}
	});

}
