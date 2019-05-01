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
  
}
