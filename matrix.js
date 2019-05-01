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

  addNum(number) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        this.Mat[i][j] += number;
      }
    }     
  }	
	
  scale(multiplier) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        this.Mat[i][j] *= multiplier;
      }
    }     
    
  }	
	
  addMat(matrix) {
    // add try except clause for matricies of incorrect dimesions
    if (this.rows == matrix.rows && this.cols == matrix.cols){
		for (var i = 0; i < this.rows; i++) {
		  for (var j = 0; j < this.cols; j++) {
			this.Mat[i][j] += matrix.Mat[i][j];
		  }
		}
	}
	else{
		console.log("Incorrect matrix dimensions for addition");
	}
  }
	
	
	
	
}
