frameRate(30);
var schlange;
var anzahl = 1000 ;
var anzahlZeichnen = anzahl*2;
var objarray = [anzahl+1];
var objarraym = [anzahl+1];

var schlange = function(){
this.px = random(0,100);
this.py = random(0,100);
this.ppx = this.px+random(-20,20);
this.ppy = this.py+random(-20,20);
this.cx=0;
this.cy=0;
this.xrand = 10;
this.yrand = 10;
this.opacity = 49;
this.rstart = 30;
this.gstart = 155;
this.r=0;
this.g=0;
this.b=0;

};
for (var i = 0;i < anzahl;i++){
	objarray[i]=new schlange();
	objarray[i].r = 255;
	objarray[i].g = 255;
	objarray[i].b = 255;
}
for (var i = 0;i < anzahl;i++){
	objarraym[i]=new schlange();
	objarraym[i].r = 100;
	objarraym[i].g = 50;
	objarraym[i].b = 230;
	objarraym[i].px = width-random(0,100);
	objarraym[i].py = height-random(0,100);
}
objarray = concat(objarray,objarraym);
var neueSchlange = function(ss){
	fill(ss.r+random(-100,100), ss.g+random(-100,100), ss.b,50);  
	stroke(ss.r+random(-100,100), ss.g+random(-100,100), ss.b,50);
    ss.cx = ss.px+random(-(ss.xrand),ss.xrand); 
    ss.cy = ss.py+random(-(ss.xrand),ss.xrand);//enable for random lines
    
    if (mouseIsPressed){
        if (mouseX>ss.cx){
        ss.cx=ss.cx+(mouseX-ss.cx)/10;
        }
        if (mouseX<ss.cx){
        ss.cx=ss.cx-(ss.cx-mouseX)/10;
        }
        if (mouseY>ss.cy){
        ss.cy=ss.cy+(mouseY-ss.cy)/10;
        }
        if (mouseY<ss.cy){
        ss.cy=ss.cy-(ss.cy-mouseY)/10;
        }
    }	
    
    ss.cx = max(0,min(width,ss.cx));
    ss.cy = max(0,min(height,ss.cy));
    triangle(ss.ppx,ss.ppy,ss.px,ss.py,ss.cx,ss.cy);
    ss.ppx=ss.px;
    ss.ppy=ss.py;
    ss.px=ss.cx;
    ss.py=ss.cy;
};
var draw = function() {
    fill(0, 0, 0,20); 
    rect(-10,-10,width+20,height+20); //fading
	for (var i = 0;i<objarray.length;i++){
	neueSchlange(objarray[i]);
	}
};

/*
var mouseDragged = function(){
var newschl = new schlange();
newschl.r=random(100,255);
newschl.g=random(100,255);
newschl.b=random(100,255);
newschl.px = mouseX;
newschl.py = mouseY;
newschl.ppx=newschl.px+random(-20,20);
newschl.ppy=newschl.py+random(-20,20);
append(objarray,newschl);

};
*/
