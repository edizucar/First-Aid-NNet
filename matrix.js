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
	
  dotProduct(matrix) {
	  // Finish this
	  let result = new Matrix(this.rows, matrix.cols);
	  if (this.cols == matrix.rows) {
		  
		  for (var i = 0; i < this.rows; i++) {
			  for (var j = 0; j < matrix.cols; j++) {
				  let sum = 0;
				  for (var z = 0; z < this.cols;z++) {
					sum += this.Mat[i][z] * matrix.Mat[z][j];
				  }
				  result.Mat[i][j] = sum;
			  }
		  }
		  return result
	}
	else {
		console.log("Incorrect matrix dimensions for multiplication")
		return -1;
	}
  }	

	
  getMatClone() {
    var clone = [];
    
    for (var i = 0; i < this.rows; i++) {
      clone.push([]);
      for (var j = 0; j < this.cols; j++) {
        clone[i].push(this.Mat[i][j]);
      }
    } 
    
    return clone;
  }	
	
	
	
}
