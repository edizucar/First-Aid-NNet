class Matrix{
  constructor(row, col) {
    
  this.rows = row;
	this.cols = col;
	
    this.Mat = [];
    
    for (var i = 0; i < this.rows; i++) {
      this.Mat.push([]);
      for (var j = 0; j < this.cols; j++) {
        this.Mat[i].push(0.0);
      }
    }
  }

  display() {
    console.table(this.Mat);
  }
	
  randomize(x1, x2) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        this.Mat[i][j] = floor(random(x1, x2 + 1));
      }
    }     
  }
	
  getItem(row, col){
    return this.Mat[row][col];
  }	
  
}
